const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayar = require("../ayarlar.js");
module.exports.run = async (client, message, args) => {

let salvoembed = new Discord.MessageEmbed().setColor(0x7997ff).setFooter(`Erenaydn55 💛 ₰ Aaurvebia`).setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(salvoembed.setDescription(`Yetki yetersiz`))

message.channel.send(salvoembed.setDescription(`**__Jail Sistemi Kurulum__**

**1-) Jail Sistemi İçin Gerekli Ayarlar;**

• \`Jail Yetkilisi Rolü\`
• \`Jail Rolü\`
• \`Kayıtsız Rolü\`
• \`Booster Rolü\`
• \`Jail Log Kanalı\`

**2-) Jail Sistemi Kurulum Adımları;**

➥ \`${ayar.prefix}jail-yetkili ayarla @rol\`
➥ \`${ayar.prefix}jail-rol ayarla @rol\`
➥ \`${ayar.prefix}jail-kayıtsız-rol ayarla @rol\`
➥ \`${ayar.prefix}jail-booster-rol ayarla @rol\`
➥ \`${ayar.prefix}jail-kanal ayarla #kanal\`
---------------------------------------
➥ \`${ayar.prefix}jail-yetkili sıfırla\`
➥ \`${ayar.prefix}jail-rol sıfırla\`
➥ \`${ayar.prefix}jail-kayıtsız-rol sıfırla\`
➥ \`${ayar.prefix}jail-booster-rol sıfırla\`
➥ \`${ayar.prefix}jail-kanal sıfırla\`

**3-) Jail Sistemine Dahil Komutlar;**

• \`${ayar.prefix}jail\`
• \`${ayar.prefix}jail-yetkili\`
• \`${ayar.prefix}jail-rol\`
• \`${ayar.prefix}jail-kayıtsız-rol\`
• \`${ayar.prefix}jail-booster-rol\`
• \`${ayar.prefix}jail-kanal\`

\`1. Not:\` **sıfırla Komutları Ayarlamış Olduğunuz Rolleri/Kanalları Sıfırlar**
\`2. Not:\` **Erenaydn55**`))


};

exports.config = {
  name: "jail-kurulum",
  guildOnly: true,
  aliases: [],
};