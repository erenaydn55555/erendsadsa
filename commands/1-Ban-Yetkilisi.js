const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayar = require("../ayarlar.js");

module.exports.run = async (client, message, args) => {
let prefix = ayar.prefix;
let salvoembed = new Discord.MessageEmbed().setColor(0x7997ff).setFooter(`Erenaydn55 💛 ₰ Aaurvebia`).setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))

if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(salvoembed.setDescription(`Yetki yetersiz`))
if(!args[0]) return message.channel.send(salvoembed.setDescription(`**__Hatalı Kullanım;__**

${prefix}ban-yetkili ayarla @rol = Ban yetkisi
${prefix}ban-yetkili sıfırla = Rolü sıfırlarsınız`))
if(args[0] === 'ayarla') {
var rol = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1])
if(!rol) return message.channel.send(salvoembed.setDescription(`Lütfen bir rol etiketleyiniz`))
db.set(`${message.guild.id}_banyetkilisi`, rol.id)
message.channel.send(salvoembed.setDescription(`Ban Yetkilisi rolü başarılı bir şekilde ${rol} Olarak Ayarlandı`))
} else if(args[0] == 'sıfırla') {
if(!db.has(`${message.guild.id}_banyetkilisi`)) return message.channel.send(salvoembed.setDescription(`Ban yetkilisi rolü zaten ayarlı değil`)); else {
    db.delete(`${message.guild.id}_banyetkilisi`)
    message.channel.send(salvoembed.setDescription(`Ban yetkilisi rolü başarılı bir şekilde silindi`))
    } 
  }
};

exports.config = {
  name: "ban-yetkili",
  guildOnly: true,
  aliases: [],
};