const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayar = require("../ayarlar.js");

module.exports.run = async (client, message, args) => {
let prefix = ayar.prefix;
let salvoembed = new Discord.MessageEmbed().setColor(0x7997ff).setFooter(`Erenaydn55 💛 ₰ Aaurvebia`).setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))

if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(salvoembed.setDescription(`Yetki yetersiz`))
if(!args[0]) return message.channel.send(salvoembed.setDescription(`**__Hatalı Kullanım;__**

${prefix}ses-mute-rol ayarla @rol = Ses Mute Rolünü Ayarlarsınız
${prefix}ses-mute-rol sıfırla = Ses Mute Rolünü Sıfırlarsınız`))
if(args[0] === 'ayarla') {
var sesmuterol = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1])
if(!sesmuterol) return message.channel.send(salvoembed.setDescription(`Lütfen bir rol etiketleyiniz`))
db.set(`${message.guild.id}_sesmuterol`, sesmuterol.id)
message.channel.send(salvoembed.setDescription(`Ses Mute Rolü başarılı bir şekilde ${sesmuterol} Olarak Ayarlandı`))
} else if(args[0] == 'sıfırla') {
if(!db.has(`${message.guild.id}_sesmuterol`)) return message.channel.send(salvoembed.setDescription(`Ses Mute Rolü zaten ayarlı değil`)); else {
    db.delete(`${message.guild.id}_sesmuterol`)
    message.channel.send(salvoembed.setDescription(`Ses Mute Rolü başarılı bir şekilde silindi`))
    } 
  }
};

exports.config = {
  name: "ses-mute-rol",
  guildOnly: true,
  aliases: [],
};