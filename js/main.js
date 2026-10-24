/* ============ main.js — arranque ============ */
(() => {
  // Si un archivo no llega a cargarse (conexión móvil que se corta), mejor
  // avisar que arrancar a medias.
  const NEED = ['U', 'I18n', 'Settings', 'DB', 'Audio', 'Input', 'Touch', 'Sprites', 'Camera', 'Moves', 'Enemies', 'Upgrades', 'Items',
                'World', 'FX', 'Projectiles', 'EnemyMgr', 'Pickups', 'Player', 'Combat', 'Spawner', 'LevelUp', 'Gacha',
                'Rift', 'Weather', 'Progress', 'Hazards', 'Icons', 'UI', 'HUD',
                'MenuUI', 'RunUI', 'SettingsUI', 'Funding', 'SupportUI', 'Game', 'Flow'];
  function broken() {
    // (En la versión publicada G no está en window: va encerrado, ver tools/build.js.)
    const miss = NEED.filter(k => typeof G !== 'object' || !G[k]);
    if (!miss.length) return false;
    const el = document.getElementById('boot');
    el.innerHTML = 'No se pudo cargar todo el juego (¿se cortó la conexión?).<br><button class="btn gold" style="margin-top:12px" onclick="location.reload()">Recargar</button>';
    console.warn('[Arranque] faltan:', miss.join(', '));
    return true;
  }

  // Mantenimiento: no se entra al juego. Para probar en local: añade ?dev.
  const MAINTENANCE = false;
  const MAINT = {
    es: ['<p><b>Estamos en mantenimiento.</b></p><p>Estamos actualizando el juego. ' +
         'Tu partida y tus Pokémon están a salvo. ¡Vuelve en unas horas!</p>', 'Volver a intentarlo'],
    en: ['<p><b>We are under maintenance.</b></p><p>We are updating the game. ' +
         'Your save and your Pokémon are safe. Please come back in a few hours!</p>', 'Try again'],
    vi: ['<p><b>Chúng tôi đang bảo trì.</b></p><p>Chúng tôi đang cập nhật trò chơi. ' +
         'Tiến trình và Pokémon của bạn vẫn an toàn. Hãy quay lại sau vài giờ!</p>', 'Thử lại']
  };
  function maintenance() {
    if (!MAINTENANCE || /[?&]dev\b/.test(location.search)) return false;
    const lang = typeof G === 'object' && G.I18n ? G.I18n.lang : (/^es/i.test(navigator.language || '') ? 'es' : 'en');
    const [msg, again] = MAINT[lang] || MAINT.en;
    const el = document.getElementById('boot');
    el.setAttribute('translate', 'no');
    el.innerHTML = '<div class="boot-in"><h1>PokéSurvivor</h1>' + msg +
      '<button class="btn gold" style="margin-top:12px" onclick="location.reload()">' + again + '</button></div>';
    return true;
  }

  function boot() {
    if (maintenance()) return;
    if (broken()) return;
    G.I18n.startDom();
    // Espera a la fuente pixel para que la UI no salte al cargarla.
    const ready = document.fonts && document.fonts.load ? document.fonts.load('16px Pixelify') : Promise.resolve();
    ready.catch(() => {}).then(() => G.Flow.boot());
  }
  if (document.readyState === 'loading') addEventListener('DOMContentLoaded', boot);
  else boot();

  // Instalable como app (PWA). Sólo con http(s): abierto con doble clic (file://) no hace falta.
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(e => console.warn('[PWA]', e.message)));
  }
})();
