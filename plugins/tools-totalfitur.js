let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `විශේශාන්ග ගනන: ${totalf}`,m)
}

handler.help = ['totalfitur']
handler.tags = ['tools']
handler.command = ['totalfitur']
handler.limit = true
export default handler 