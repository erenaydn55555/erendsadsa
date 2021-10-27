const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
module.exports.run = async (client, message, args) => {

let banyetkili = db.fetch(`${message.guild.id}_banyetkilisi`);
let salvoembed = new Discord.MessageEmbed().setColor(0x7997ff).setFooter(`Erenaydn55 💛 ₰ Aaurvebia`).setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
if(!message.member.roles.cache.has(banyetkili) && !message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(salvoembed.setDescription(`Yetki yetersiz`))

let kisi = args[0];
if (!kisi) return message.channel.send(salvoembed.setDescription("Banlanan Geçerli Bir Kullanıcı ID'si Belirtin"))
message.guild.fetchBans().then(banlar => {
if (!banlar.has(kisi)) {
return message.channel.send(salvoembed.setDescription(`Belirtilen ID'ye Sahip Kullanıcı Banlanmamış`))
}
})
message.guild.fetchBan(kisi).then(({ user, reason }) => {
message.channel.send(salvoembed.setDescription(`**__Ban Bilgi__**

• \`Kullanıcı:\` **${user.tag}**
• \`Kullanıcı ID:\` **${user.id}**
• \`Ban Sebebi:\` **${reason || "Ban Sebebi Yok!"}**`)).then(m => m.delete({timeout: 10000}));
})
};

exports.config = {
  name: "ban-bilgi",
  guildOnly: true,
  aliases: [],
};