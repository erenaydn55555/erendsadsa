const Discord = require("discord.js"),
client = new Discord.Client();
 

module.exports.run = async (client, message, args) => {
    let salvoembed = new Discord.MessageEmbed().setColor(0x7997ff).setFooter('Erenaydn55 💛 ₰ Aaurvebia').setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(salvoembed.setDescription(`Bu komutu kullanmak için yeterli yetkin yok`)).then(m => m.delete({timeout: 10000}));
let channel = message.guild.channels.cache.get(args[0]) || message.member.voice.channel;
if (!channel) message.channel.send(salvoembed.setDescription(`Bir Kanal ID'si Belirtin yada Bir Kanala Katılın`)).then(m => m.delete({timeout: 10000}));
channel.members.forEach((s, index) => {
  s.voice.setMute(false);
});
message.channel.send(salvoembed.setDescription(`\`${channel.name}\` Kanalındaki Herkesin Başarılı Bir Şekilde Susturulması Kaldırıldı`))
};
 
exports.config = {
  name: "sustur-aç",
  guildOnly: true,
  aliases: ["hsa"],
};