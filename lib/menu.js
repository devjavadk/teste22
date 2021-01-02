let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

_Spesial Thanks To:_
Nurotomo

_Rec Bye:_
Drawl Nag

Owner: wa.me.+5511946817667

*🎥 YouTube:* 
https://youtube.com/channel/UCE7x81dLhF0BQSDLSqCUjBQ

*Instagram:*
https://Instagram.com/devjavastudios

➸ Prefix:  *「 ${_p} 」*
➸ Status: *「 Online 」*

*「 COMANDO 」*
${_p}menu

*「 DIVERSÃO MENU 」*
${_p}qr <teks>
${_p}stiker (foto)
${_p}bucin
${_p}ss (website)

*「 GRUPO 」*
${_p}add (Número)
${_p}kick @menção
${_p}promote @menção
${_p}demote @menção
${_p}linkgrup
${_p}anúncio <teks>
${_p}listonline [groupid]


*「  Experimental  」*
${_p}lightbot [código de login se houver / vazio]

*「 Avançado 」*
> return 'javascript eval ' + m.sender
`.trim(), m)
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

