const Discord = require("discord.js");
const ayar = require("../ayarlar.js");
const { prefix } = require('../ayarlar.js');
module.exports.run = async (client, message, args) => {

        const infoEmbed = new Discord.MessageEmbed()
            .setDescription("<a:deynek:855913728864550963> Merhabalar, Aaurvebia botunun Sahip Olduğu Onlarca Özellik Sayesinde Sunucunuzu Güzelleştirmek Ve Moderasyonunu Daha Kolay Hale Getirmek İçin <@852619227387133962> Tarafından Kodlanmış Bir Bottur.\n\u200b")
            .addFields(
                {name: `:speech_balloon: Kullanıcı komutları`, value: `**${prefix}genel** \n Yazarak Genel Komutları Görüntüleyebilirsiniz.`, inline: true},
                {name: `<a:tac:857371169840431135> Yetkili`, value: `**${prefix}yetkili** \n Yazarak Yetkili Komutlarını Görüntüleyebilirsiniz.`, inline: true},
                {name: '\u200B', value: '\u200B', inline: true},
                {name: "\u200B", value: "[🔻 Sunucumuzun davet linki](https://discord.gg/sEcTWxcAQK)", inline: true},
                {name: "\u200B", value: "[<a:muck:857371572464910346>İnstagramdan beni takip etmek için](https://www.instagram.com/erenaydn55/)", inline: true},
            )
            .setColor("#8fffb8")
            .setFooter("Aaurvebia", "https://media.giphy.com/media/WQARGQOETIpptG1fnk/giphy.gif")
            .setImage("https://media.giphy.com/media/ckffmkTlxVChD7jWzG/giphy.gif")
        
        message.channel.send(infoEmbed);
    }
exports.config = {
    name: "yardım",
    guildOnly: true,
    aliases: ["yardım"],
  };
 


// \n\u200b
// \u200B