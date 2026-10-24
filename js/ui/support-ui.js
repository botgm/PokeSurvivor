/* ============ support-ui.js — "Apoyar el proyecto" ============
 * Botón con un corazón en la barra del menú (sólo si hay cuenta de Ko-fi en
 * js/data/funding.js) y una ventana que explica, con números, a qué va el
 * dinero. No se cobra nada dentro del juego: el pago es en Ko-fi.
 */
G.SupportUI = (() => {
  const $ = G.UI.$;
  const F = G.Funding;
  const val = v => typeof v === 'number'
    ? (Math.round(v * 100) / 100).toLocaleString(G.I18n.lang === 'en' ? 'en' : G.I18n.lang === 'vi' ? 'vi-VN' : 'es', { style: 'currency', currency: 'EUR' }) + ' / mes'
    : v;

  function init() {
    const b = $('btn-support');
    if (!F.url) return;                       // aún sin cuenta de Ko-fi: no sale
    b.classList.remove('hidden');
    b.innerHTML = G.Icons.html('heart', 18) + ' <span>Apoyar</span>';
    b.onclick = open;
    $('sup-close').onclick = close;
  }

  function open() {
    const rows = F.costs.map(([c, v]) => `<tr><td>${c}</td><td class="num">${val(v)}</td></tr>`).join('');
    $('sup-body').innerHTML = `
      <p>PokéSurvivor es y será <b>gratis</b>, sin anuncios ni compras. Si quieres ayudar a mantener la web en pie, puedes hacer una
      <b>donación voluntaria</b>: el dinero se usa sólo para el <b>dominio y la web</b>, nada más.</p>
      <p class="sub">Donar no da ninguna ventaja en el juego.</p>
      <h3>Lo que cuesta mantenerlo</h3>
      <table class="sup-tab">${rows}</table>
      <p class="sub">El juego funciona sin servidores: la partida se guarda en tu propio navegador. Lo que sobre se guarda para los gastos de los meses siguientes.</p>
      <div class="row wrap" style="gap:8px;justify-content:center;margin-top:10px">
        <a class="btn gold" href="${F.url}" target="_blank" rel="noopener">${G.Icons.html('heart', 18)} Donar en Ko-fi</a>
        ${window.PS_PAGES ? `<a class="btn" href="${G.I18n.lang === 'es' ? 'apoyar/' : G.I18n.lang === 'vi' ? 'vi/support/' : 'en/support/'}" target="_blank">Más información</a>` : ''}
      </div>`;
    $('scr-support').classList.remove('hidden');
  }
  function close() { $('scr-support').classList.add('hidden'); }

  return { init, open, close };
})();
