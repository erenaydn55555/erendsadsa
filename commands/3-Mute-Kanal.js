const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayar = require("../ayarlar.js");

module.exports.run = async (client, message, args) => {
let prefix = ayar.prefix;
let salvoembed = new Discord.MessageEmbed().setColor(0x7997ff).setFooter(`Erenaydn55 💛 ₰ Aaurvebia`).setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))

if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(salvoembed.setDescription(`Yetki yetersiz`))
if(!args[0]) return message.channel.send(salvoembed.setDescription(`**__Hatalı Kullanım;__**

\`${prefix}mute-kanal ayarla #kanal\` = **Mute Log Kanalını Ayarlarsınız**
\`${prefix}mute-kanal sıfırla\` = **Mute Log Kanalını Sıfırlarsınız**`))
if(args[0] === 'ayarla') {
var mutekanal = message.mentions.channels.first()
if(!mutekanal) return message.channel.send(salvoembed.setDescription(`Lütfen Bir Kanal Etiketleyiniz`)); else {
db.set(`${message.guild.id}_mutekanal`, mutekanal.id)
message.channel.send(salvoembed.setDescription(`Mute Log Kanalı Başarılı Bir Şekilde ${mutekanal} Olarak Ayarlandı`))
}
} else if(args[0] === 'sıfırla') {
if(!db.has(`${message.guild.id}_mutekanal`)) return message.channel.send(salvoembed.setDescription(`Mute Log Kanalı Zaten Ayarlı Değil`)); else {
db.delete(`${message.guild.id}_mutekanal`)
message.channel.send(salvoembed.setDescription(`Mute Log Kanalı Başarılı Bir Şekilde Sıfırlandı`))
}
}
};

exports.config = {
  name: "mute-kanal",
  guildOnly: true,
  aliases: [],
};