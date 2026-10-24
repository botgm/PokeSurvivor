/* ============ db.js — base de datos local (sólo este navegador) ============
 * El juego es totalmente offline: la partida se guarda en localStorage, sin
 * cuentas ni servidores. TODO el acceso a datos persistentes pasa por aquí;
 * el resto del juego sólo usa G.DB.*.
 *
 *   ps.save   la partida (una sola, sin cuentas)
 *
 * Las partidas de versiones anteriores con cuentas (ps.save.<clave> local o
 * ps.cloud.<uid> de la nube) se adoptan automáticamente: se coge la más
 * reciente y se sigue jugando con ella.
 */
G.DB = (() => {
  const K_SAVE = 'ps.save';
  const VERSION = 3;
  const START_COINS = 20000;

  let user = null;          // nombre visible
  let save = null;
  let storageOk = true;

  // ---------------- almacenamiento local seguro ----------------

  function read(k) {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; }
    catch (e) { storageOk = false; return null; }
  }
  function write(k, v) {
    const s = JSON.stringify(v);
    try { localStorage.setItem(k, s); return true; }
    catch (e) {
      // Navegador lleno (sobre todo por la caché del ranking viejo): se libera
      // lo prescindible y se reintenta.
      try {
        for (let i = localStorage.length - 1; i >= 0; i--) {
          const key = localStorage.key(i);
          if (key && /^ps\.rk\.c\./.test(key)) localStorage.removeItem(key);
        }
        localStorage.setItem(k, s); return true;
      } catch (e2) { storageOk = false; return false; }
    }
  }
  function remove(k) { try { localStorage.removeItem(k); } catch (e) { /* nada */ } }

  // ---------------- partida ----------------

  function newSave(name) {
    return {
      v: VERSION,
      name,
      created: Date.now(),
      updated: Date.now(),
      coins: START_COINS,
      owned: {},              // dex -> { at, from: 'starter'|'gacha'|'wild' }
      shiny: {},              // dex -> { at, from } — variantes shiny conseguidas
      partner: null,          // dex del Pokémon con el que juegas
      partnerShiny: false,    // jugar con su versión shiny (si la tienes)
      starter: null,          // dex que te tocó en el test
      personality: null,      // { trait, scores }
      upgrades: {},           // (antiguo) mejoras de la cuenta; ahora van por Pokémon
      pupg: {},               // dex -> { id -> nivel }: mejoras de cada Pokémon
      tickets: { t1: 20, t10: 5 },   // tickets del gacha (x1 y x10)
      pity: {},               // generación del banner -> tiradas sin ★5
      legends: {},            // dex -> fecha: legendarios vencidos en grietas
      arenas: {},             // tipo -> fecha: arenas de grieta ganadas
      itemsFound: {},         // id -> fecha: objetos equipables encontrados
      evoMoves: {},           // id -> fecha: movimientos evolucionados alguna vez
      ach: {},                // id -> fecha: logros conseguidos
      missions: {},           // misiones del día / semana (systems/progress.js)
      profile: { favs: [], title: '' },   // perfil: 3 favoritos y título
      stats: {
        runs: 0, bestTime: 0, bestLevel: 0, totalKills: 0, pulls: 0, coinsEarned: 0, shinies: 0,
        bossesTotal: 0, riftWins: 0, evolutions: 0, missionsDone: 0, groupRuns: 0, bestGroupTime: 0
      }
    };
  }

  /** Rellena campos que falten en partidas de versiones anteriores. */
  function migrate(s, name) {
    const base = newSave(name || s.name);
    for (const k in base) if (s[k] == null) s[k] = base[k];
    for (const k in base.stats) if (s.stats[k] == null) s.stats[k] = base.stats[k];
    // v1 -> v2: había un único banner (Kanto) con el pity como número.
    if (typeof s.pity === 'number') s.pity = { 1: s.pity };
    // v2 -> v3: las mejoras eran de la cuenta; pasan al compañero de entonces.
    if (!s.pupgDone) {
      if (s.partner && Object.values(s.upgrades || {}).some(v => v > 0)) {
        s.pupg[s.partner] = Object.assign({}, s.upgrades);
      }
      s.pupgDone = true;
    }
    s.tickets = Object.assign({ t1: 0, t10: 0 }, s.tickets);
    sanitize(s);
    s.v = VERSION;
    return s;
  }

  /**
   * Quita lo imposible de una partida editada a mano (el guardado del navegador
   * se puede tocar): números negativos o raros, mejoras por encima del máximo y
   * Pokémon que no existen.
   */
  function sanitize(s) {
    const n = v => (Number.isFinite(+v) && +v > 0 ? Math.floor(+v) : 0);
    s.coins = n(s.coins);
    s.tickets.t1 = n(s.tickets.t1);
    s.tickets.t10 = n(s.tickets.t10);
    delete s.led;   // libreta de sincronización vieja (ya no hay nube)
    if (G.DEX_BY) for (const coll of ['owned', 'shiny']) {
      for (const d of Object.keys(s[coll] || {})) if (!G.DEX_BY[d]) delete s[coll][d];
    }
    // Atajos: 4 huecos con un movimiento que exista (o null), sin repetir.
    if (s.pbind && typeof s.pbind === 'object') {
      for (const d of Object.keys(s.pbind)) {
        const l = Array.isArray(s.pbind[d]) ? s.pbind[d].slice(0, 4) : [];
        const seen = new Set();
        s.pbind[d] = [0, 1, 2, 3].map(i => {
          const id = l[i];
          if (typeof id !== 'string' || (G.Moves && !G.Moves.BY_ID[id]) || seen.has(id)) return null;
          seen.add(id); return id;
        });
      }
    } else s.pbind = {};
    // Veto: listas de movimientos que existen, sin repetir, como mucho 3.
    if (s.pban && typeof s.pban === 'object') {
      for (const d of Object.keys(s.pban)) {
        const l = Array.isArray(s.pban[d]) ? s.pban[d] : [];
        s.pban[d] = [...new Set(l.filter(id => typeof id === 'string' && (!G.Moves || G.Moves.BY_ID[id])))].slice(0, 3);
      }
    } else s.pban = {};
    if (G.Upgrades) for (const d of Object.keys(s.pupg || {})) {
      const u = s.pupg[d];
      if (!u || typeof u !== 'object') { delete s.pupg[d]; continue; }
      for (const id of Object.keys(u)) {
        if (!G.Upgrades.BY[id]) delete u[id];
        else u[id] = Math.min(G.Upgrades.BY[id].max, n(u[id]));
      }
    }
  }

  const isObj = v => v && typeof v === 'object' && !Array.isArray(v);

  /** Copia `s` sobre la partida SIN cambiar los objetos de dentro. */
  function assignDeep(dst, src) {
    for (const k of Object.keys(dst)) if (!(k in src)) delete dst[k];
    for (const k in src) {
      if (isObj(src[k]) && isObj(dst[k])) assignDeep(dst[k], src[k]);
      else dst[k] = src[k];
    }
  }
  function applyInPlace(s) { assignDeep(save, s); }

  /** Partida más reciente de versiones anteriores con cuentas (local o nube). */
  function legacySave() {
    let best = null, bestT = -1;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k || !/^ps\.(save|cloud)\./.test(k)) continue;
        const v = JSON.parse(localStorage.getItem(k) || 'null');
        if (!isObj(v) || !isObj(v.owned)) continue;
        const t = (v.updated || v.created) || 0;
        if (t > bestT) { bestT = t; best = v; }
      }
    } catch (e) { /* nada */ }
    return best;
  }

  // ---------------- API PÚBLICA ----------------

  /** Arranca: carga la partida guardada (o la crea) y la deja lista. */
  function ready() {
    save = migrate(read(K_SAVE) || legacySave() || newSave('Entrenador'));
    user = save.name;
    write(K_SAVE, save);
    // Limpia las claves de cuentas y nube, ya inservibles.
    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && /^(ps\.save\.|ps\.cloud\.|ps\.migrated\.|ps\.accounts$|ps\.session$|ps\.cloudok\.|ps\.recover\.)/.test(k)) remove(k);
      }
    } catch (e) { /* nada */ }
    return true;
  }

  /** Guarda la partida actual en el navegador. */
  function commit() {
    if (!save) return false;
    save.updated = Date.now();
    return write(K_SAVE, save);
  }

  /** Cambia el nombre que se ve en la partida. */
  function setName(n) {
    if (!save || !n) return;
    save.name = n; user = n;
    commit();
  }

  /** Texto de la partida para exportar (guardar en un archivo). */
  function exportData() { return JSON.stringify(save); }

  /** Carga una partida exportada, reemplazando la actual. */
  function importData(text) {
    let obj;
    try { obj = JSON.parse(text); } catch (e) { return { ok: false, error: 'El archivo no es válido.' }; }
    if (!isObj(obj) || !isObj(obj.owned)) return { ok: false, error: 'Ese archivo no es una partida de PokéSurvivor.' };
    const s = migrate(obj, obj.name || user || 'Entrenador');
    applyInPlace(s);
    user = save.name;
    commit();
    return { ok: true };
  }

  /** Borra la partida de este navegador para empezar de cero (y las viejas). */
  function reset() {
    try {
      remove(K_SAVE);
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && /^(ps\.save\.|ps\.cloud\.)/.test(k)) remove(k);
      }
    } catch (e) { /* nada */ }
    save = null; user = null;
  }

  // ---------------- helpers de partida ----------------

  function owns(dex) { return !!(save && save.owned[dex]); }

  function grant(dex, from) {
    if (!save.owned[dex]) save.owned[dex] = { at: Date.now(), from };
  }

  function ownsShiny(dex) { return !!(save && save.shiny && save.shiny[dex]); }

  /** Mejoras compradas para un Pokémon: { id -> nivel }. */
  function upgradesOf(dex) {
    if (!save) return {};
    save.pupg = save.pupg || {};
    return save.pupg[dex] || (save.pupg[dex] = {});
  }

  /** Da la versión shiny (y la normal, si no la tenía). Devuelve true si es nueva. */
  function grantShiny(dex, from) {
    grant(dex, from);
    if (save.shiny[dex]) return false;
    save.shiny[dex] = { at: Date.now(), from };
    return true;
  }

  return {
    ready, commit, owns, grant, ownsShiny, grantShiny, upgradesOf, setName, exportData, importData, reset,
    /** Sin nube: nunca hay sincronización (compatibilidad con la interfaz). */
    onSync() { return () => { }; },
    get save() { return save; },
    get user() { return user; },
    get guest() { return false; },        // ya no hay modo invitado
    get loggedIn() { return !!save; },
    get online() { return false; },
    get mode() { return 'local'; },
    get syncState() { return 'local'; },
    get storageOk() { return storageOk; },
    START_COINS
  };
})();
