const Discord = require('discord.js');
exports.run = async (client, message, args) => {

if(!message.member.roles.cache.has('855587908995907585') && !message.member.hasPermission('ADMINISTRATOR') ) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')

 let kanal = args[0]
 if (!kanal) return message.channel.send("Bir Kanal ID'si Belirt")  

 client.channels.cache.get(kanal).join();

message.channel.send("Ses Kanalına Başarılı Bir Şekilde Bağlandım")

};


exports.config = {
    name: "geloglimbura",
    guildOnly: true,
    aliases: ["gologlimbura"]
    }