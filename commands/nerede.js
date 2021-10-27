const Discord = require("discord.js")
const moment = require("moment")
module.exports.run = (client, message, args) => {
  let executor = message.member
    let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!üye) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Üye belirt.`))
  
    let üyekanal = üye.voice.channel
    if(!üyekanal) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Belirttiğin kişi ses kanalında bulunmuyor.`)) //
    let kanal = üye.voice.channel
    let samsunlu55 = moment.duration(Date.now() - üye.kanalagiris).format(` D [gün], H [saat], m [dakika], s [saniye]`); 
    let erenaydn = üye.voice.serverMute ? "Sunucuda susturulmuş" : üye.voice.selfMute ? "Kapalı Durumda" : "Açık Durumda";
 let kulaklık = üye.voice.serverDeaf ? "Sunucuda sağırlaştırılmış" : üye.voice.selfDeaf ? "Kapalı Durumda" : "Açık Durumda";
 let cameraeren = üye.voice.selfVideo ? "Açık Durumda" : "Kapalı Durumda";
 let streameren = üye.voice.streaming ? "Yayın yapıyor" : "Yayın yapmıyor";
 let kanaldakiler = kanal.members.map(x => { if(x.user.id === üye.user.id) { return } return '• <@!' + x.id  + '> (\`' + x.id + '\`)' })
let stable;
if(üye.voice.channel === null || üye.voice.channel.id === undefined || üye.voice.channel === undefined) stable = `None!`
    
    message.channel.send(
    new Discord.MessageEmbed()
    .setColor("#fd8f8f")
    .setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`${üye} \` ${samsunlu55} \` dir ${kanal} adlı ses kanalında bulunuyor.`)
    .addField(`Mikrofon`, `\` ${erenaydn}\`` , true)
    .addField(`Kulaklık`, `\` ${kulaklık}\``, true)
    .addField(`Kamera`, `\` ${cameraeren}\``, true)
    .addField(`Yayın`, `\` ${streameren}\``, true)
    .addField(`Kanaldakiler`,`${kanaldakiler.length != 1 ? kanaldakiler.join('\n ') : 'Tek başına takılıyor.'}`,true)) 
    }
    exports.config = {
        name: "sorgula",
        guildOnly: true,
        aliases: ["sorgula","nerede"],
    };