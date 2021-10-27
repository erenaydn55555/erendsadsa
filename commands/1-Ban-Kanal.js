const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayar = require("../ayarlar.js");

module.exports.run = async (client, message, args) => {
let prefix = ayar.prefix;
let salvoembed = new Discord.MessageEmbed().setColor(0x7997ff).setFooter(`Erenaydn55 💛 ₰ Aaurvebia`).setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))

if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(salvoembed.setDescription(`Yetki yetersiz`))
if(!args[0]) return message.channel.send(salvoembed.setDescription(`**__Hatalı Kullanım;__**

\`${prefix}ban-kanal ayarla #kanal\` = **Ban Log Kanalını Ayarlarsınız**
\`${prefix}ban-kanal sıfırla\` = **Ban Log Kanalını Sıfırlarsınız**`))
if(args[0] === 'ayarla') {
var bankanal = message.mentions.channels.first()
if(!bankanal) return message.channel.send(salvoembed.setDescription(`Lütfen Bir Kanal Etiketleyiniz`)); else {
db.set(`${message.guild.id}_bankanal`, bankanal.id)
message.channel.send(salvoembed.setDescription(`Ban Log Kanalı Başarılı Bir Şekilde ${bankanal} Olarak Ayarlandı`))
}
} else if(args[0] === 'sıfırla') {
if(!db.has(`${message.guild.id}_bankanal`)) return message.channel.send(salvoembed.setDescription(`Ban Log Kanalı Zaten Ayarlı Değil`)); else {
db.delete(`${message.guild.id}_bankanal`)
message.channel.send(salvoembed.setDescription(`Ban Log Kanalı Başarılı Bir Şekilde Sıfırlandı`))
}
}
};

exports.config = {
  name: "ban-kanal",
  guildOnly: true,
  aliases: [],
};