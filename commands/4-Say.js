const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {


    const mapping = {
        " ": "",
        "0": "<a:Aaurvebia_0:876398909289816074>",
        "1": "<a:Aaurvebia_1:876398908505485342>",
        "2": "<a:Aaurvebia_2:876398909549858846>",
        "3": "<a:Aaurvebia_3:876398911202398208>",
        "4": "<a:Aaurvebia_4:876398909461774336>",
        "5": "<a:Aaurvebia_5:876256953997856868>",
        "6": "<a:Aaurvebia_6:876398909507907604>",
        "7": "<a:Aaurvebia_7:876398909331767296>",
        "8": "<a:Aaurvebia_8:876398912204832808>",
        "9": "<a:Aaurvebia_9:876398908929110037>",
        "!": ":grey_exclamation:",
        "?": ":grey_question:",
        "#": ":hash:",
        "*": ":asterisk:"
      };
      
      "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
        mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
      });
    
        if (!message.member.roles.cache.has("876157979974594590") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).addField(`Hatalı Kullanım` ,` Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor(0x003366)).then(m => m.delete({timeout: 7000}));
            let voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
          let count = 0
          for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size
          let ses = `**<a:Aaurvebia_yildz:876220979808985228> Seslideki Üye Sayısı: <a:Aaurvebia_yildz:876220979808985228>** \n  \`Sesli Üye:\` ` +
              `${count}` 
              .split("")
              .map(c => mapping[c] || c)
              .join("")
          let toplam = message.guild.memberCount;
          let sunucu = `**<a:Aaurvebia_yildz:876220979808985228> Toplam Üye Sayısı: <a:Aaurvebia_yildz:876220979808985228>  ** \n  \`Toplam Üye:\` ` +
              `${toplam}`
              .split("")
              .map(c => mapping[c] || c)
              .join(" ")
        let taglıs = message.guild.roles.cache.filter(x => x.id === '876227474747433030'); 
          let counts = 0
           for (const [id, taglı] of taglıs) counts += taglı.members.size
          let online = `**<a:Aaurvebia_yildz:876220979808985228> Toplam Taglı Üye Sayısı: <a:Aaurvebia_yildz:876220979808985228>** \n  \`Taglı Üye:\` ` +
              `${counts}`
              .split("")
              .map(c => mapping[c] || c)
              .join("")
          let booster = message.guild.roles.cache.filter(x => x.id === '876194037344927884')
          let countss = 0
           for (const [id, boostere] of booster) countss += boostere.members.size
          let boosters = `**<a:Aaurvebia_yildz:876220979808985228> Toplam Booster Üye Sayısı: <a:Aaurvebia_yildz:876220979808985228>** \n  \`Booster Üye:\` ` +
              `${countss}`
              .split("")
              .map(c => mapping[c] || c)
              .join("")
           let kız = message.guild.roles.cache.filter(x => x.id === '876158021397516288')
          let kızcıkks = 0
           for (const [id, kızzz] of kız) kızcıkks += kızzz.members.size
          let kızz = `**<a:Aaurvebia_yildz:876220979808985228> Toplam Kadın Üye Sayısı: <a:Aaurvebia_yildz:876220979808985228>** \n  \`Kadın Üye:\` ` +
              `${kızcıkks}`
              .split("")
              .map(c => mapping[c] || c)
              .join("")
           let erek = message.guild.roles.cache.filter(x => x.id === '876158022064410684')
          let countssssss = 0
           for (const [id, boostereeer] of erek) countssssss += boostereeer.members.size
          let erkek = `**<a:Aaurvebia_yildz:876220979808985228> Toplam Erkek Üye Sayısı: <a:Aaurvebia_yildz:876220979808985228>** \n  \`Erkek Üye:\` ` +
              `${countssssss}`
              .split("")
              .map(c => mapping[c] || c)
              .join("") 
         let onlinesayi = message.guild.members.cache.filter(
            only => only.presence.status != "offline"
          ).size;
          let aktif = `**<a:Aaurvebia_yildz:876220979808985228> Toplam Aktif Üye Sayısı: <a:Aaurvebia_yildz:876220979808985228>>** \n  \`Online Üye:\` ` +
              `${onlinesayi}`
              .split("")
              .map(c => mapping[c] || c)
              .join(" ")
            const embed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setDescription('**<a:Aaurvebia_yildz:876220979808985228> Sunucu İstatistikleri Aşağıda Sıralanmıştır <a:Aaurvebia_yildz:876220979808985228>**\n\n ' + sunucu + '\n \n' + online +  '\n \n' + ses + ' \n \n' + boosters +  ' \n \n' + kızz + ' \n \n' + erkek + ' \n \n' + aktif + '')
            .setFooter('Bu Mesaj 30 Saniye Sonra Silinecektir')
            .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
        
        //.(online)
          message.channel.send(embed).then(m => m.delete({timeout: 30000}));
          /*message.channel.send('Online sayısı: ' + 
            `${onlinesayi}`
              .split("")
              .map(c => mapping[c] || c)
              .join(" ")
          );*/
  
};

exports.config = {
  name: "say",
  guildOnly: true,
  aliases: [],
};