/* ============ changelog.js — novedades del juego ============
 * Lo que ve la gente en el botón "Novedades" de la barra de arriba: cambios
 * de juego y fallos arreglados (nada de servidores ni bases de datos).
 * La fecha más nueva, arriba. En cada fecha, por apartados:
 *   new  lo nuevo · chg  cambios y ajustes · fix  fallos arreglados
 * Cada línea en [español, inglés, vietnamita] (si falta el vietnamita, se usa el inglés).
 */
G.CHANGELOG = [
  { d: '2026-10-23', title: ['El juego ya está en vietnamita', 'The game is now in Vietnamese', 'Trò chơi đã có tiếng Việt'], new: [
    ['Ya puedes jugar en vietnamita. Cámbialo en Ajustes > Gráficos > Idioma.',
     'You can now play in Vietnamese. Change it in Settings > Graphics > Language.',
     'Bạn có thể chơi bằng tiếng Việt. Đổi ở Cài đặt > Đồ họa > Ngôn ngữ.']
  ] },
  { d: '2026-10-17', title: ['El juego ahora es 100% offline', 'The game is now 100% offline', 'Trò chơi giờ hoàn toàn ngoại tuyến'], new: [
    ['Ya no hay cuenta ni inicio de sesión: entras y juegas. La partida se guarda sola en este navegador y no se envía a ningún servidor.',
     'There is no account or sign-in anymore: you just get in and play. Your save is stored in this browser only and is never sent to any server.',
     'Đã bỏ tài khoản và đăng nhập: vào là chơi. Tiến trình tự lưu trong trình duyệt này và không gửi tới máy chủ nào.'],
    ['En Ajustes > Partida puedes exportar tu partida a un archivo (para guardarla o pasarla a otro navegador) y volver a importarla cuando quieras.',
     'In Settings > Save you can export your save to a file (to back it up or move it to another browser) and import it back whenever you want.',
     'Trong Cài đặt > Bản lưu, bạn có thể xuất tiến trình ra tệp (để sao lưu hoặc chuyển sang trình duyệt khác) và nhập lại bất cứ lúc nào.']
  ], chg: [
    ['Se han quitado las opciones de amigos, salas y cooperativo, y el ranking; el juego es para jugar solo.',
     'Friends, rooms and co-op have been removed, along with the leaderboard; the game is meant to be played on your own.',
     'Đã bỏ bạn bè, phòng và co-op, cùng bảng xếp hạng; trò chơi dành để chơi một mình.'],
    ['Las partidas nuevas empiezan con 20.000 monedas, 20 tickets de tirada ×1 y 5 de tirada ×10.',
     'New games now start with 20,000 coins, 20 ×1-pull tickets and 5 ×10-pull tickets.',
     'Ván mới bắt đầu với 20.000 xu, 20 vé quay ×1 và 5 vé quay ×10.']
  ], fix: [
    ['Al empezar de cero, la partida arranca con las 20.000 monedas exactas: el logro del primer compañero ya no sumaba 100 monedas de más.',
     'Starting from scratch, a new game begins with exactly 20,000 coins: the first-partner achievement no longer added 100 coins on top.',
     'Khi bắt đầu lại từ đầu, ván mới có đúng 20.000 xu: thành tích đồng đội đầu tiên không còn cộng thêm 100 xu.']
  ] },
  { d: '2026-10-15', title: ['Actualizaciones obligatorias', 'Required updates', 'Cập nhật bắt buộc'], chg: [
    ['Cuando una actualización sea obligatoria (por ejemplo, para arreglar un fallo importante), la partida en curso se termina tras un aviso de 10 s y el juego se recarga. No pierdes nada: las monedas, los tickets, los récords y el ranking de esa partida se guardan como al abandonarla.',
     'When an update is required (for example, to fix an important bug), your current run ends after a 10 s notice and the game reloads. You lose nothing: that run’s coins, tickets, records and leaderboard entry are saved as if you had quit.',
     'Khi một bản cập nhật là bắt buộc (ví dụ để sửa lỗi quan trọng), ván đang chơi kết thúc sau cảnh báo 10 giây và trò chơi tải lại. Bạn không mất gì: xu, vé, kỷ lục và bảng xếp hạng của ván đó được lưu như khi bỏ ván.']
  ] },
  { d: '2026-10-14', title: ['Recupera tu cuenta con Gmail', 'Recover your account with Gmail', 'Khôi phục tài khoản bằng Gmail'], new: [
    ['Si juegas con nombre y contraseña, puedes vincular tu Gmail: si un día olvidas la contraseña, entras con Google y es tu misma cuenta. Te lo ofrecemos al entrar.',
     'If you play with a name and password, you can link your Gmail: if you ever forget your password, sign in with Google and it is the same account. We offer it when you sign in.',
     'Nếu chơi bằng tên và mật khẩu, bạn có thể liên kết Gmail: nếu một ngày quên mật khẩu, đăng nhập bằng Google vẫn là cùng tài khoản. Chúng tôi gợi ý khi bạn đăng nhập.'],
    ['Móvil: ya puedes colocar los botones donde quieras. En Ajustes > Controles > Colocar los botones arrastras los ataques (con el objeto), la pausa y el joystick, que ahora también puede ser fijo en vez de aparecer donde pones el dedo.',
     'Mobile: you can now place the buttons wherever you want. In Settings > Controls > Place the buttons, drag the attacks (with the item), the pause button and the joystick, which can now also be fixed instead of appearing where you put your finger.',
     'Mobile: giờ bạn có thể đặt các nút ở bất cứ đâu. Trong Cài đặt > Điều khiển > Sắp xếp nút, kéo các nút chiêu (kèm vật phẩm), nút tạm dừng và cần điều khiển, giờ cũng có thể cố định thay vì hiện nơi bạn đặt ngón tay.']
  ], chg: [
    ['Las tablas de la semana y del mes del ranking empiezan de cero, como el histórico: ahora sólo cuentan partidas con la Sentencia de Arceus y todas las tablas cuadran entre sí.',
     'The weekly and monthly leaderboards start from scratch, like the all-time one: now only runs with the Judgment of Arceus count, and all boards match each other.',
     'Bảng tuần và tháng của xếp hạng bắt đầu lại từ đầu, như bảng mọi thời đại: giờ chỉ tính các ván có Phán xét của Arceus và mọi bảng khớp với nhau.'],
    ['Aviso importante: la única web oficial de PokéSurvivor es pokesurvivor.com. El juego es y será gratis: si alguna otra web te pide pagar (por tickets, monedas o lo que sea), no somos nosotros. Lo verás también al entrar y en el Aviso legal.',
     'Important: the only official PokéSurvivor website is pokesurvivor.com. The game is and always will be free: if any other website asks you to pay (for tickets, coins or anything else), it isn’t us. You will also see this when signing in and in the Legal notice.',
     'Lưu ý quan trọng: trang chính thức duy nhất của PokéSurvivor là pokesurvivor.com. Game luôn miễn phí: nếu trang khác bắt bạn trả tiền (vé, xu hay bất cứ gì), đó không phải chúng tôi. Bạn cũng thấy điều này khi đăng nhập và trong Thông báo pháp lý.'],
    ['El código del juego pasa a una licencia no comercial (PolyForm Noncommercial 1.0.0): se puede seguir estudiando y modificando, pero nadie puede cobrar por él.',
     'The game’s code moves to a non-commercial license (PolyForm Noncommercial 1.0.0): you can still study and modify it, but nobody may charge for it.',
     'Mã nguồn của game chuyển sang giấy phép phi thương mại (PolyForm Noncommercial 1.0.0): vẫn có thể nghiên cứu và sửa đổi, nhưng không ai được thu tiền vì nó.']
  ], fix: [
    ['Cooperativo: la partida ya no se queda parada con cada uno esperando a que el otro elija. Un objeto y las cartas de nivel ya no se tapan, y si la conexión pierde un aviso se arregla solo.',
     'Co-op: the game no longer freezes with each player waiting for the other to choose. An item and the level-up cards no longer cover each other, and if the connection drops a message it fixes itself.',
     'Co-op: ván không còn đứng yên với mỗi người chờ người kia chọn. Vật phẩm và thẻ lên cấp không còn che nhau, và nếu mất một thông báo do kết nối, tự sửa.'],
    ['Cooperativo: al volver de una grieta, quien no era el anfitrión ya ve a todos los enemigos (antes algunos eran invisibles y sólo se veían sus ataques).',
     'Co-op: after coming back from a rift, players who are not the host can see every enemy again (some used to be invisible, with only their attacks showing).',
     'Co-op: khi trở về từ vết nứt, người không phải chủ phòng lại thấy mọi kẻ địch (trước đây một số vô hình, chỉ thấy đòn của chúng).'],
    ['Amigos: si tu móvil u ordenador tiene la hora (o la zona horaria) mal puesta, tus amigos ya no salen siempre desconectados y sus invitaciones te llegan.',
     'Friends: if your phone or computer has the wrong time (or time zone), your friends no longer always show as offline and their invitations reach you.',
     'Bạn bè: nếu điện thoại hay máy tính đặt sai giờ (hoặc múi giờ), bạn bè không còn luôn hiện ngoại tuyến và lời mời của họ đến được với bạn.'],
    ['Jugar en dos aparatos (PC y móvil) ya no hace perder monedas ni tickets: antes, si uno tenía la partida abierta con datos viejos y guardaba, borraba lo ganado en el otro. Ahora se suma lo de los dos. Y al volver al juego tras un rato fuera, se trae lo conseguido en el otro aparato (Pokémon, shinies...) sin recargar.',
     'Playing on two devices (PC and phone) no longer loses coins or tickets: before, if one had the game open with old data and saved, it erased what you earned on the other. Now both are added up. And when you come back to the game after a while away, it brings in what you got on the other device (Pokémon, shinies...) without reloading.',
     'Chơi trên hai thiết bị (PC và điện thoại) không còn mất xu và vé: trước đây, nếu một máy đang mở với dữ liệu cũ và lưu, nó xóa phần đã kiếm ở máy kia. Giờ cộng dồn cả hai. Và khi quay lại sau một lúc, nó mang về những gì bạn đạt được ở máy kia (Pokémon, shiny...) mà không cần tải lại.'],
    ['Los avisos grandes de la partida (un Gholdengo cerca, una marea...) ya salen siempre centrados.',
     'Big in-game announcements (a nearby Gholdengo, a swarm...) are always centered now.',
     'Các thông báo lớn trong ván (một Gholdengo gần đó, một đợt...) giờ luôn hiện ở giữa.']
  ] },
  { d: '2026-10-13', title: ['La Sentencia de Arceus', 'The Judgment of Arceus', 'Phán xét của Arceus'], new: [
    ['La Sentencia de Arceus: al llegar al minuto 30, Arceus baja del cielo y te lleva a las Ruinas del Juicio. Es invencible, te persigue cada vez más deprisa y lanza pilares de luz, rayos y ondas; si te toca, te quita casi media vida. Cada 5 segundos acude un legendario con el doble de vida y de daño que el anterior. ¿Cuánto aguantarás?',
     'The Judgment of Arceus: at minute 30, Arceus descends from the sky and takes you to the Ruins of Judgment. It is invincible, chases you faster and faster and casts pillars of light, beams and shockwaves; if it touches you, you lose almost half your HP. Every 5 seconds a legendary joins, each with twice the HP and damage of the previous one. How long can you last?',
     'Phán xét của Arceus: khi tới phút 30, Arceus từ trời giáng xuống và đưa bạn tới Phế tích Phán xét. Nó bất khả chiến bại, đuổi bạn mỗi lúc một nhanh và phóng cột sáng, tia, sóng xung kích; nếu chạm vào bạn, nó lấy gần nửa máu. Cứ 5 giây một huyền thoại xuất hiện, với máu và sát thương gấp đôi cái trước. Bạn trụ được bao lâu?'],
    ['Tres logros nuevos: La Sentencia (llega al minuto 30), Ante el Creador (aguanta 1 minuto ante Arceus) y Desafío divino (derrota a 3 legendarios ante Arceus en una partida).',
     'Three new achievements: The Judgment (reach minute 30), Before the Creator (survive 1 minute against Arceus) and Divine challenge (defeat 3 legendaries against Arceus in a single run).',
     'Ba thành tích mới: Phán xét (tới phút 30), Trước Đấng Sáng tạo (trụ 1 phút trước Arceus) và Thử thách thần thánh (hạ 3 huyền thoại trước Arceus trong một ván).'],
    ['Música nueva para la pelea contra Arceus.', 'New music for the fight against Arceus.', 'Nhạc mới cho trận đánh với Arceus.'],
    ['Botón para reportar marcas sospechosas en el ranking (la banderita de cada fila).',
     'A button to report suspicious records on the leaderboard (the little flag on each row).',
     'Nút báo cáo kỷ lục đáng ngờ trên bảng xếp hạng (lá cờ nhỏ ở mỗi dòng).']
  ], chg: [
    ['El ranking histórico empieza de cero: ahora que las partidas acaban ante Arceus, las marcas de antes ya no se podrían alcanzar. Las tablas de hoy, de la semana y del mes siguen igual.',
     'The all-time leaderboard starts from scratch: now that runs end against Arceus, older records could no longer be reached. The daily, weekly and monthly boards are unchanged.',
     'Bảng xếp hạng mọi thời đại bắt đầu lại từ đầu: giờ ván kết thúc trước Arceus nên các kỷ lục cũ không còn đạt được. Bảng hôm nay, tuần và tháng không đổi.'],
    ['Se quita el tiempo extra del minuto 60 (ya no se llega hasta ahí).',
     'Overtime from minute 60 is removed (runs no longer get that far).',
     'Bỏ thời gian cộng thêm từ phút 60 (không còn tới đó nữa).'],
    ['Desde el minuto 28 ya no se abren grietas, para que la Sentencia no te pille dentro de una.',
     'Rifts no longer open from minute 28 on, so the Judgment does not catch you inside one.',
     'Từ phút 28 không còn mở vết nứt, để Phán xét không bắt bạn ở trong đó.'],
    ['Ranking protegido contra trampas: el servidor comprueba que cada marca se ha jugado de verdad. Nunca se pierde nada de lo que ganas jugando.',
     'Leaderboard protected against cheating: the server checks that every record was really played. You never lose anything you earn by playing.',
     'Bảng xếp hạng chống gian lận: máy chủ kiểm tra mỗi kỷ lục đã thực sự được chơi. Không bao giờ mất những gì bạn kiếm được khi chơi.'],
    ['Se han quitado del ranking las marcas de más de 35 minutos: con la Sentencia de Arceus ya no son posibles.',
     'Records over 35 minutes have been removed from the leaderboard: with the Judgment of Arceus they are no longer possible.',
     'Đã bỏ khỏi bảng xếp hạng các kỷ lục trên 35 phút: với Phán xét của Arceus thì không còn khả thi.']
  ], fix: [
    ['Las tiradas del gacha, los Pokémon nuevos y los premios se guardan en la nube al momento. Si abriste el juego en otro aparato o navegador y te faltaba algo, vuelve a abrirlo donde lo conseguiste: se recupera solo.',
     'Gacha pulls, new Pokémon and rewards are saved to the cloud right away. If you opened the game on another device or browser and something was missing, open it again where you got it: it comes back on its own.',
     'Lượt quay gacha, Pokémon mới và phần thưởng được lưu lên cloud ngay. Nếu bạn mở game ở thiết bị hay trình duyệt khác và thiếu gì đó, hãy mở lại nơi bạn đạt được: nó tự khôi phục.']
  ] },
  { d: '2026-10-12', title: ['Tiempo extra y grietas con menos azar', 'Overtime and less random rifts', 'Thời gian cộng thêm và vết nứt bớt ngẫu nhiên'], new: [
    ['Tiempo extra: desde el minuto 60 los Pokémon salvajes se vuelven cada vez más fuertes (más vida y más daño), y cada vez más deprisa. Antes, con las mejoras al máximo, algunas partidas no acababan nunca; ahora las mejores rondarán la hora y media.',
     'Overtime: from minute 60 on, wild Pokémon keep getting stronger (more HP and more damage), faster and faster. Before, with maxed upgrades, some runs never ended; now the best ones will last about an hour and a half.',
     'Thời gian cộng thêm: từ phút 60, Pokémon hoang dã mỗi lúc một mạnh hơn (nhiều máu và sát thương hơn), và nhanh dần. Trước đây, khi nâng cấp tối đa, vài ván không bao giờ kết thúc; giờ những ván hay nhất sẽ kéo dài khoảng một tiếng rưỡi.'],
    ['El juego se actualiza solo cuando sale una versión nueva: si estás en el menú, a los 5 segundos; si estás jugando, al acabar la partida (sin perder nada).',
     'The game now updates itself when a new version is out: within 5 seconds if you are in the menu, or after your run if you are playing (without losing anything).',
     'Game tự cập nhật khi có bản mới: nếu đang ở menu, sau 5 giây; nếu đang chơi, khi kết thúc ván (không mất gì).'],
    ['Botón de Novedades (esta ventana) con todos los cambios del juego.',
     'A "What\'s new" button (this window) with every change to the game.',
     'Nút Có gì mới (cửa sổ này) với mọi thay đổi của game.'],
    ['Números más fáciles de leer: el 2, el 5 y el 8 ya no se confunden.',
     'Easier to read numbers: 2, 5 and 8 no longer look alike.',
     'Số dễ đọc hơn: 2, 5 và 8 không còn nhầm lẫn.'],
    ['Elige la versión normal o shiny de tu compañero desde el menú principal, debajo de él.',
     'Pick the normal or shiny version of your partner right from the main menu, under it.',
     'Chọn phiên bản thường hay shiny của đồng đội ngay ở menu chính, bên dưới.'],
    ['Mejoras nuevas para cada Pokémon: Golpe Crítico (+3 % de críticos por nivel, que hacen x1,5 de daño), Cambio de cartas (+1 cambio de las cartas de nivel por run) y Veto (bloquea movimientos para que no te salgan en las cartas; se eligen en Mejoras).',
     'New upgrades for each Pokémon: Critical Hit (+3% critical chance per level, crits deal x1.5 damage), Card reroll (+1 level-up card reroll per run) and Ban (block moves so they never show up in your cards; pick them in Upgrades).',
     'Nâng cấp mới cho mỗi Pokémon: Đòn chí mạng (+3% tỷ lệ chí mạng mỗi cấp, chí mạng gây x1,5 sát thương), Đổi thẻ (+1 lần đổi thẻ lên cấp mỗi lượt) và Cấm (chặn chiêu để chúng không xuất hiện trong thẻ; chọn trong Nâng cấp).'],
    ['Atajos de movimientos (en Mejoras, para cada Pokémon): elige qué movimiento va siempre en cada hueco, por ejemplo Confusión siempre en el 1, para la memoria muscular.',
     'Move shortcuts (in Upgrades, for each Pokémon): choose which move always goes in each slot, for example Confusion always on 1, for muscle memory.',
     'Phím tắt chiêu (trong Nâng cấp, cho mỗi Pokémon): chọn chiêu luôn vào mỗi ô, ví dụ Nhầm lẫn luôn ở ô 1, để nhớ tay.']
  ], chg: [
    ['Avalancha hace menos daño (21 en vez de 26): derrotaba casi el doble que la media de los movimientos.',
     'Rock Slide deals less damage (21 instead of 26): it defeated almost twice as many as the average move.',
     'Lở đá gây ít sát thương hơn (21 thay vì 26): nó hạ gần gấp đôi mức trung bình của các chiêu.'],
    ['Los cambios de cartas de nivel ya no se ganan venciendo jefes: tienes 1 gratis por run y el resto se compra en Mejoras.',
     'Level-up card rerolls are no longer earned by defeating bosses: you get 1 free per run and can buy more in Upgrades.',
     'Đổi thẻ lên cấp không còn kiếm được bằng hạ trùm: bạn có 1 miễn phí mỗi lượt và mua thêm trong Nâng cấp.'],
    ['Los legendarios de grieta ya no dan siempre tickets x10: dan uno la mitad de las veces (antes daban 2 siempre y salían demasiados).',
     'Rift legendaries no longer always drop x10 tickets: they drop one half of the time (they used to always drop 2, which was too many).',
     'Huyền thoại trong vết nứt không còn luôn cho vé x10: chúng cho một vé vào một nửa số lần (trước luôn cho 2, hơi nhiều).'],
    ['Cooperativo: si vuestras redes no consiguen conectar entre sí, la sala lo avisa y lo reintenta sola, en vez de jugar a tirones por un servidor lento.',
     'Co-op: if your networks cannot connect to each other, the room says so and keeps retrying, instead of playing laggy through a slow server.',
     'Co-op: nếu mạng của các bạn không kết nối được với nhau, phòng sẽ báo và tự thử lại, thay vì chơi giật qua một máy chủ chậm.'],
    ['Hemos cambiado de servidores para que el juego siga siendo gratis: puede que tengas que volver a iniciar sesión (con la misma cuenta y contraseña, o con Google). Tu partida y tus Pokémon siguen igual.',
     'We moved to new servers so the game can stay free: you may need to sign in again (with the same account and password, or with Google). Your save and your Pokémon are unchanged.',
     'Chúng tôi đã đổi máy chủ để game tiếp tục miễn phí: có thể bạn phải đăng nhập lại (cùng tài khoản và mật khẩu, hoặc bằng Google). Tiến trình và Pokémon không đổi.'],
    ['Gacha: los shiny ya no salen repetidos. Si te toca uno que ya tienes, sale otro de la misma rareza que te falte.',
     'Gacha: shinies no longer come out as duplicates. If you roll one you already have, you get another of the same rarity that you are missing.',
     'Gacha: shiny không còn ra trùng. Nếu quay được cái bạn đã có, sẽ ra cái khác cùng độ hiếm mà bạn còn thiếu.'],
    ['Grietas con menos azar: cada vez que no sale una, la siguiente es más probable (como mucho 2,5 minutos sin grieta).',
     'Less random rifts: every time one does not show up, the next one is more likely (at most 2.5 minutes without a rift).',
     'Vết nứt bớt ngẫu nhiên: mỗi lần không ra, lần sau càng dễ ra (tối đa 2,5 phút không có vết nứt).'],
    ['Los legendarios que aún no has vencido salen 4 veces más en las grietas.',
     'Legendaries you have not beaten yet show up 4 times as often in rifts.',
     'Các huyền thoại bạn chưa hạ xuất hiện nhiều gấp 4 lần trong vết nứt.'],
    ['Los curanderos curan más cuanto más fuerte pegas, pero cada vez menos y con un tope (como mucho el 2,5x).',
     'Healers heal more the harder you hit, but with diminishing returns and a cap (2.5x at most).',
     'Máy hồi máu hồi nhiều hơn khi bạn đánh mạnh, nhưng giảm dần và có giới hạn (tối đa 2,5x).'],
    ['Ataques cuerpo a cuerpo más fuertes: mientras llevas uno activo recibes un 25 % menos de daño, llegan un 25 % más lejos y hacen un 20 % más de daño.',
     'Stronger melee attacks: while one is active you take 25% less damage, and they reach 25% further and deal 20% more damage.',
     'Chiêu cận chiến mạnh hơn: khi đang kích hoạt một chiêu, bạn nhận ít hơn 25% sát thương, chúng vươn xa hơn 25% và gây thêm 20% sát thương.'],
    ['Cooperativo: al elegir con qué objeto quedarte, la partida se para para todos (antes seguía y te pegaban mientras elegías).',
     'Co-op: choosing which held item to keep now pauses the run for everyone (it used to keep going and you got hit while choosing).',
     'Co-op: khi chọn vật phẩm để giữ, ván dừng cho tất cả (trước đây vẫn tiếp diễn và bạn bị đánh khi đang chọn).'],
    ['Cooperativo: mientras alguien elige una fusión, la partida se para para todos.',
     'Co-op: while someone is choosing a fusion, the run pauses for everyone.',
     'Co-op: khi ai đó đang chọn một liên kết, ván dừng cho tất cả.'],
    ['Cooperativo: si el anfitrión cambia de pestaña o se le para el juego, la partida se pausa para todos hasta que vuelva.',
     'Co-op: if the host switches tabs or their game stalls, the run pauses for everyone until they are back.',
     'Co-op: nếu chủ phòng đổi tab hoặc game bị treo, ván tạm dừng cho tất cả tới khi họ trở lại.'],
    ['Las runs de menos de 1 minuto ya no cuentan para el ranking.',
     'Runs shorter than 1 minute no longer count for the leaderboard.',
     'Ván dưới 1 phút không còn tính cho bảng xếp hạng.']
  ], fix: [
    ['Quitadas del ranking las marcas rotas por el fallo del minuto 84 (el reloj seguía corriendo con el juego parado) y alguna imposible. Si tenías una, tu próxima partida vuelve a contar.',
     'Removed broken records from the leaderboard caused by the minute 84 bug (the clock kept running while the game was frozen) and a few impossible ones. If you had one, your next run counts again.',
     'Đã bỏ khỏi bảng xếp hạng các kỷ lục hỏng do lỗi phút 84 (đồng hồ vẫn chạy khi game đứng) và vài cái bất khả thi. Nếu bạn có một cái, ván tiếp theo lại tính.'],
    ['iPhone (Safari y Chrome): a veces no se podía cambiar de movimiento tocando los iconos, sobre todo con el otro dedo en el joystick. Además los botones quedan por encima de la barra de inicio.',
     'iPhone (Safari and Chrome): sometimes you could not switch moves by tapping the icons, especially with your other finger on the joystick. Buttons also sit above the home bar now.',
     'iPhone (Safari và Chrome): đôi khi không đổi được chiêu khi chạm biểu tượng, nhất là khi ngón kia đang giữ cần. Ngoài ra các nút nằm trên thanh home.'],
    ['En las partidas de más de 84 minutos la pantalla se quedaba en negro, el juego se paraba o empezabas a subir de nivel sin fin. Ya puedes jugar todo lo que aguantes.',
     'In runs longer than 84 minutes the screen went black, the game froze or you kept levelling up forever. Now you can play for as long as you survive.',
     'Ở các ván dài hơn 84 phút, màn hình đen, game đứng hoặc bạn lên cấp vô tận. Giờ bạn chơi được bao lâu tùy sức.'],
    ['Si el juego fallara, la partida se cierra sola y se guarda (tiempo, derrotados, récords y ranking) en vez de perderse.',
     'If the game ever crashes, the run ends by itself and is saved (time, defeated, records and leaderboard) instead of being lost.',
     'Nếu game gặp lỗi, ván tự đóng và lưu (thời gian, đã hạ, kỷ lục và xếp hạng) thay vì mất.'],
    ['Las partidas muy largas a veces se tomaban por trampas y no contaban para el ranking.',
     'Very long runs were sometimes flagged as cheating and did not count for the leaderboard.',
     'Các ván quá dài đôi khi bị coi là gian lận và không tính cho bảng xếp hạng.'],
    ['Cooperativo: si el anfitrión cambiaba de pestaña, los enemigos se quedaban quietos y los demás jugaban con ventaja.',
     'Co-op: if the host switched tabs, enemies stood still and everyone else got a free advantage.',
     'Co-op: nếu chủ phòng đổi tab, kẻ địch đứng yên và những người khác chơi có lợi thế.'],
    ['iPhone: mantener el dedo en el joystick sacaba "Copiar / Seleccionar todo".',
     'iPhone: holding your finger on the joystick brought up "Copy / Select all".',
     'iPhone: giữ ngón trên cần điều khiển làm hiện "Sao chép / Chọn tất cả".'],
    ['iPhone: a veces no salía la pantalla completa. Ahora el botón explica cómo tenerla (Compartir y "Añadir a pantalla de inicio").',
     'iPhone: fullscreen sometimes did not show up. Now the button explains how to get it (Share and "Add to Home Screen").',
     'iPhone: đôi khi không hiện toàn màn hình. Giờ nút giải thích cách bật (Chia sẻ và "Thêm vào Màn hình chính").']
  ] },
  { d: '2026-10-11', title: ['Vínculos', 'Bonds', 'Liên kết'], new: [
    ['Vínculos: al vencer a un legendario fusionas movimientos que se lanzan a la vez desde un solo hueco (hasta 4).',
     'Bonds: defeating a legendary lets you fuse moves that fire at the same time from a single slot (up to 4).',
     'Liên kết: khi hạ một huyền thoại, bạn hợp nhất các chiêu phóng cùng lúc từ một ô (tối đa 4).'],
    ['Botón para cambiar las cartas de subir de nivel.',
     'A button to reroll the level-up cards.',
     'Nút đổi các thẻ lên cấp.']
  ], chg: [
    ['Más grietas.', 'More rifts.', 'Thêm vết nứt.'],
    ['Movimientos psíquicos y curanderos más flojos.', 'Weaker psychic moves and healers.', 'Chiêu tâm linh và máy hồi máu yếu hơn.'],
    ['Las mejoras de las cartas de nivel (velocidad, recarga, experiencia, imán, coraza y potencia) tienen un tope de veces.',
     'Level-up card upgrades (speed, cooldown, experience, magnet, armor and power) can only be taken a limited number of times.',
     'Nâng cấp từ thẻ lên cấp (tốc độ, hồi chiêu, kinh nghiệm, nam châm, giáp và sức mạnh) có giới hạn số lần.'],
    ['En el móvil, la ficha del Pokémon sale al lado; entrar es más rápido y el gacha x10 se puede cerrar.',
     'On mobile, the Pokémon details show alongside; logging in is faster and the x10 gacha can be closed.',
     'Trên mobile, thông tin Pokémon hiện bên cạnh; đăng nhập nhanh hơn và gacha x10 đóng được.']
  ], fix: [
    ['Pantalla negra en partidas de más de una hora por llenarse la memoria de imágenes.',
     'Black screen in runs longer than an hour because image memory filled up.',
     'Màn hình đen ở ván dài hơn một giờ do đầy bộ nhớ hình ảnh.'],
    ['Los tickets se perdían si se cerraba la pestaña antes de acabar la partida: ahora se guardan al cogerlos.',
     'Tickets were lost if the tab closed before the run ended: now they are saved as soon as you pick them up.',
     'Vé bị mất nếu đóng tab trước khi kết thúc ván: giờ lưu ngay khi nhặt.'],
    ['Una mejora comprada justo después de guardar se cobraba y no se apuntaba.',
     'An upgrade bought right after saving was charged but not applied.',
     'Một nâng cấp mua ngay sau khi lưu bị trừ tiền mà không được ghi nhận.'],
    ['El juego se quedaba congelado para siempre si algo fallaba a mitad de partida.',
     'The game froze forever if something went wrong mid-run.',
     'Game đứng vĩnh viễn nếu có gì lỗi giữa ván.']
  ] },
  { d: '2026-10-10', title: ['Más reto', 'More challenge', 'Thêm thử thách'], new: [
    ['Jefes y legendarios con 4 ataques avisados que se enfurecen a media vida.',
     'Bosses and legendaries with 4 telegraphed attacks that get enraged at half health.',
     'Trùm và huyền thoại có 4 đòn báo trước và nổi giận khi còn nửa máu.'],
    ['12 movimientos nuevos y 8 formas de atacar nuevas: bumerán, cadena, minas, meteoros, torreta, embestida, rastro y abanico.',
     '12 new moves and 8 new ways to attack: boomerang, chain, mines, meteors, turret, dash, trail and spray.',
     '12 chiêu mới và 8 cách đánh mới: boomerang, dây chuyền, mìn, thiên thạch, trụ, xung kích, vệt và quạt.'],
    ['Eventos a mitad de partida (hordas de un tipo, hora dorada, Pokémon perdidos) y Meowth y Gholdengo que huyen cargados de monedas.',
     'Mid-run events (single-type hordes, golden hour, lost Pokémon) and Meowth and Gholdengo running away loaded with coins.',
     'Sự kiện giữa ván (đợt một hệ, giờ vàng, Pokémon lạc) và Meowth cùng Gholdengo bỏ chạy với đầy xu.'],
    ['Estatuas para los Pokémon grandes.', 'Statues for big Pokémon.', 'Tượng cho các Pokémon lớn.']
  ], chg: [
    ['Más difícil: menos enemigos pero más duros.', 'Harder: fewer but tougher enemies.', 'Khó hơn: ít kẻ địch hơn nhưng dai hơn.'],
    ['Subir de nivel es más lento, los tickets son más raros y los jefes dan ticket x10 una de cada tres veces.',
     'Levelling up is slower, tickets are rarer and bosses drop a x10 ticket one time in three.',
     'Lên cấp chậm hơn, vé hiếm hơn và trùm cho vé x10 một trong ba lần.'],
    ['Carga más rápida.', 'Faster loading.', 'Tải nhanh hơn.']
  ], fix: [
    ['Los enemigos rezagados desaparecían delante de ti: ahora sólo fuera de la vista.',
     'Straggling enemies vanished in front of you: now only off-screen.',
     'Kẻ địch tụt lại biến mất trước mặt bạn: giờ chỉ biến mất ngoài tầm nhìn.'],
    ['Los menús y pantallas se montaban encima de la barra de arriba.',
     'Menus and screens overlapped the top bar.',
     'Menu và màn hình đè lên thanh trên cùng.']
  ] },
  { d: '2026-10-09', title: ['Móvil e inglés', 'Mobile and English', 'Mobile và tiếng Anh'], new: [
    ['Se puede jugar en móvil y tablet con joystick táctil, e instalar como app.',
     'Play on phones and tablets with a touch joystick, and install it as an app.',
     'Chơi được trên mobile và tablet với cần điều khiển cảm ứng, và cài như app.'],
    ['El juego, en español y en inglés.', 'The game in English and Spanish.', 'Game có tiếng Tây Ban Nha và tiếng Anh.'],
    ['Pantalla de ajustes con calidad gráfica automática.', 'Settings screen with automatic graphics quality.', 'Màn hình cài đặt với chất lượng đồ họa tự động.']
  ], chg: [
    ['Menos enemigos en pantalla pero más fuertes.', 'Fewer but stronger enemies on screen.', 'Ít kẻ địch hơn trên màn hình nhưng mạnh hơn.'],
    ['Gigadrenado pasa a ser Hierba Lazo (ya no cura).', 'Giga Drain becomes Grass Knot (no more healing).', 'Hút năng lượng đổi thành Thắt cỏ (không còn hồi máu).']
  ] },
  { d: '2026-10-08', title: ['Misiones, grietas y cooperativo', 'Missions, rifts and co-op', 'Nhiệm vụ, vết nứt và co-op'], new: [
    ['Misiones diarias y semanales, logros con medallas y títulos, y perfil público.',
     'Daily and weekly missions, achievements with medals and titles, and a public profile.',
     'Nhiệm vụ hằng ngày và hằng tuần, thành tích với huy chương và danh hiệu, và hồ sơ công khai.'],
    ['Objetos equipables, evoluciones de movimientos y enemigos que curan, protegen, invocan o explotan.',
     'Held items, move evolutions and enemies that heal, shield, summon or explode.',
     'Vật phẩm mang được, tiến hóa chiêu và kẻ địch biết hồi máu, bảo vệ, triệu hồi hoặc phát nổ.'],
    ['Grietas que llevan a 18 arenas legendarias, una por tipo, y clima que cambia la batalla.',
     'Rifts leading to 18 legendary arenas, one per type, and weather that changes the fight.',
     'Vết nứt dẫn tới 18 đấu trường huyền thoại, mỗi hệ một cái, và thời tiết thay đổi trận đánh.'],
    ['Cooperativo con tu lista de amigos y ranking.', 'Co-op with your friends list and leaderboards.', 'Co-op với danh sách bạn bè và bảng xếp hạng.'],
    ['Mejoras para cada Pokémon, gacha tragaperras con tickets y tabla de tipos.',
     'Upgrades for each Pokémon, a slot-machine ticket gacha and a type chart.',
     'Nâng cấp cho mỗi Pokémon, gacha máy đánh bạc bằng vé và bảng hệ.']
  ], chg: [
    ['Cámara más lejos y enemigos que rodean los obstáculos.', 'Camera further out and enemies that walk around obstacles.', 'Camera xa hơn và kẻ địch đi vòng qua chướng ngại vật.']
  ] },
  { d: '2026-10-07', title: ['Primera versión', 'First version', 'Phiên bản đầu tiên'], new: [
    ['Primera versión pública de PokéSurvivor.', 'First public version of PokéSurvivor.', 'Phiên bản công khai đầu tiên của PokéSurvivor.']
  ] }
];
