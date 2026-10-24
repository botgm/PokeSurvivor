/* Comprueba que los diccionarios de idioma tengan exactamente las mismas claves
 * que el inglés (ninguna sin traducir ni de más).
 *   node tools/check_lang.js
 * Carga util.js + i18n.js y los diccionarios en un contexto aislado (sin navegador).
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const noop = () => {};
const fakeCtx = new Proxy({}, { get: () => noop });
const G = {};
const sandbox = {
  G, window: {}, console, Math, JSON, Date, Map, Set, Object, Array, Number, String, RegExp, Promise, Symbol, Infinity, NaN, isFinite, parseInt, parseFloat,
  location: { pathname: '/', protocol: 'file:' }, navigator: { language: 'es', languages: ['es'] }, localStorage: { getItem: () => 'es', setItem: noop },
  document: { documentElement: {}, createElement: () => ({ getContext: () => fakeCtx, width: 0, height: 0 }), addEventListener: noop, querySelector: () => null, body: {} },
  addEventListener: noop, matchMedia: () => ({ matches: false }), CanvasRenderingContext2D: function () {}, Image: function () {}, performance: { now: () => 0 }
};
sandbox.window = sandbox;
vm.createContext(sandbox);
const load = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), sandbox, { filename: f });
const D = { en: {}, vi: {} };
load('js/core/util.js'); load('js/core/i18n.js');
const add = G.I18n.add;
G.I18n.add = (a, b) => { if (typeof a === 'string') Object.assign(D[a] = D[a] || {}, b || {}); else Object.assign(D.en, a || {}); add(a, b); };
load('js/data/lang-en.js'); load('js/data/lang-vi.js');
const missing = Object.keys(D.en).filter(k => !(k in D.vi));
const extra = Object.keys(D.vi).filter(k => !(k in D.en));
console.log('en:', Object.keys(D.en).length, '· vi:', Object.keys(D.vi).length);
console.log('faltan en vi (' + missing.length + '):', missing.map(k => JSON.stringify(k)).join(', '));
console.log('de más en vi (' + extra.length + '):', extra.map(k => JSON.stringify(k)).join(', '));
process.exit(missing.length || extra.length ? 1 : 0);
