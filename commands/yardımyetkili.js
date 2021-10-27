const Discord = require("discord.js");
const ayar = require("../ayarlar.js");
const { prefix } = require('../ayarlar.js');
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu komutu kullanmak için yetkili olman lazım").then(a => a.delete({timeout: 50000}))

        const infoEmbed = new Discord.MessageEmbed()
            .setTitle("<a:tac:857371169840431135> Yetkili Komutları <a:tac:857371169840431135>")
            .addFields(
                {name: `Yer öğrenme`, value: `**${prefix}sorgula** \n Etiketlediğiniz kişinin hangi kanalda ve durumlarını öğrenebilirsiniz`, inline: true},
                {name: `ses kanala git`, value: `**${prefix}git**\nEtiketlediğiniz kişiye etiket atıp yanınıza gelmeyi isiyor diye sorar kabul ederse sizi yanına atar.`, inline: true},
                {name: `Ban komutu`, value: `**${prefix}ban** \nEtiketlediğiniz birini sunucudan banlar`, inline: true},
                {name: `Unban komutu`, value: `**${prefix}unban**\n Banlanan birinin banını kaldırırsınız`, inline: true},
                {name: `Jail komutu`, value: `**${prefix}jail** \nEtiketlediğiniz birini jaile(yasaklı)'ya atar`, inline: true},
                {name: `Unjail komutu`, value: `**${prefix}unjail** \nJaile atılan birini jailden çıkarır ve (Kayıt Olun Lütfen) Rolü verir`, inline: true},
                {name: `Mute komutu`, value: `**${prefix}mute** \nEtiketlediğiniz birine mute ve seste susturma verebilirsiniz`, inline: true},
                {name: `Unmute komutu`, value: `**${prefix}unmute**\n Mute attığınız kişinin mutesini açmak için kullanabilirsiniz`, inline: true},
                {name: `Herkesi susturur`, value: `**${prefix}hs**\n Admin olmayan seste bulunan herkesi susturur.`, inline: true},
                {name: `Susturmaları açar`, value: `**${prefix}hsa**\n Admin olmayan seste susturulan herkesin susturmasını açar`, inline: true},
                {name: `Bot istatislik`, value: `**${prefix}i** \nBotun istatisliklerine bakabilirsiniz `, inline: true},
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
        name: "yetkili",
        guildOnly: true,
        aliases: ["yetkili"],
    };
    
    