const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayar = require("../ayarlar.js");

module.exports.run = async (client, message, args) => {
let prefix = ayar.prefix;
let salvoembed = new Discord.MessageEmbed().setColor(0x7997ff).setFooter(`Erenaydn55 💛 ₰ Aaurvebia`).setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))

if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(salvoembed.setDescription(`Yetki yetersiz`))
if(!args[0]) return message.channel.send(salvoembed.setDescription(`**__Hatalı Kullanım;__**

${prefix}jail-yetkili ayarla @rol = Mute Yetkisi Rolünü Ayarlarsınız
${prefix}jail-yetkili sıfırla = Mute Yetkisi Rolünü sıfırlarsınız`))
if(args[0] === 'ayarla') {
var muteyetkilisi = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1])
if(!muteyetkilisi) return message.channel.send(salvoembed.setDescription(`Lütfen bir rol etiketleyiniz`))
db.set(`${message.guild.id}_muteyetkilisi`, muteyetkilisi.id)
message.channel.send(salvoembed.setDescription(`Mute Yetkisi Rolü başarılı bir şekilde ${muteyetkilisi} Olarak Ayarlandı`))
} else if(args[0] == 'sıfırla') {
if(!db.has(`${message.guild.id}_muteyetkilisi`)) return message.channel.send(salvoembed.setDescription(`Mute Yetkisi Rolü zaten ayarlı değil`)); else {
    db.delete(`${message.guild.id}_muteyetkilisi`)
    message.channel.send(salvoembed.setDescription(`Mute Yetkisi Rolü başarılı bir şekilde silindi`))
    } 
  }
};

exports.config = {
  name: "mute-yetkili",
  guildOnly: true,
  aliases: [],
};