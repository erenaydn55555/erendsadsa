const Discord = require('discord.js');
const qdb = require("quick.db");
const cdb = new qdb.table("cezalar");
const pdb = new qdb.table("puanlar");
const ayar = require("../ayarlar.js");

module.exports.run = async (client, message, args) => {
    let salvoembed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(`Erenaydn55 💛 ₰ Aaurvebia`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    message.react("✅");
    let data = cdb.get(`sicil.${user.id}.${message.guild.id}`) || [];
    let siralama = data.length > 0 ? data.map((value, index) => `• \`${index+1}.\` \`${value.komut}\` **${new Date(value.zaman).toTurkishFormatDate()}** \n• \`Yetkili:\` ${client.users.cache.get(value.mod) || value.mod}\n• \`Ceza No:\` **#${value.id}** \n• \`Ceza Sebebi:\` **${value.sebep}**\n`).join("\n") : "Bu Üyenin Ceza Bilgisi Bulunamadı."
    message.channel.send(salvoembed.setDescription(`${siralama}\n\n Kullanıcının Profil Bilgisinden Kaç Kez Ceza Aldığını Öğrenebilirsiniz`));
};

exports.config = {
  name: "sicil",
  guildOnly: true,
  aliases: [],
};