const Discord = require("discord.js");
const ayar = require("../ayarlar.js");
const { prefix } = require('../ayarlar.js');
module.exports.run = async (client, message, args) => {


        const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Genel Komutlar")
            .addFields(
                {name: `Git Komutu`, value: `**${prefix}git** \nArkadaşınızı yanınıza gitmek için ileti gönderir.`, inline: true},
                {name: `Sorgula`, value: `**${prefix}sorgula** \nSunucuda bir kişinin hangi ses kanalında ve kiminle olduğuna bakabilirsiniz`, inline: true},
                {name: `Say Komutu`, value: `**${prefix}say** \nSunucuda ki kişi sayısını vb. şeyleri gösterir`, inline: true},
                {name: "\u200B", value: "[🔻 Sunucumuzun davet linki](https://discord.gg/sEcTWxcAQK)", inline: true},
                {name: "\u200B", value: "[<a:muck:857371572464910346>İnstagramdan beni takip etmek için](https://www.instagram.com/erenaydn55/)", inline: true},
            )
            .setColor("#8fffb8")
            .setFooter("Aaurvebia", "https://media.giphy.com/media/WQARGQOETIpptG1fnk/giphy.gif")
            .setImage("https://media.giphy.com/media/ckffmkTlxVChD7jWzG/giphy.gif")
        
        return message.channel.send(infoEmbed);

    }
exports.config = {
    name: "genel",
    guildOnly: true,
    aliases: ["genel"],
};