# PokéSurvivor — cómo se trabaja y se publica

Normas fijas del dueño del proyecto. Se aplican SIEMPRE.

## Publicar una versión
1. Se edita `dev.html` (nunca `index.html`, que se genera).
2. `node tools/build.js && node tools/export_data.js && python tools/make_seo_pages.py`
   - `build.js` genera `index.html` y `js/app.min.js` (con la huella en la URL para que no se quede en caché).
3. Commit (sin "Co-Authored-By" ni ninguna firma de IA) y `git push origin main` sólo cuando el dueño lo pida.

## Juego offline
El juego es **100% offline**: no hay cuentas, nube, amigos, salas, cooperativo ni
ranking, y no hay actualización automática en cliente. La partida se guarda en el
`localStorage` del navegador (`js/core/db.js`) y se puede **exportar / importar** a
un archivo desde Ajustes → Partida. No añadir nada de red.

## Novedades (changelog)
Cada cambio de juego o arreglo de fallos va también en `js/data/changelog.js`
(español e inglés, en `new` / `chg` / `fix` de la fecha de hoy). Los cambios de
servidores, base de datos o costes NO van ahí.

## Mantenimiento
`MAINTENANCE` en `js/main.js` (con `?dev` se puede entrar para probar).
