const Discord = require("discord.js")     
const client = new Discord.Client({ restTimeOffset: 10 });   
const ayarlar = require("./ayarlar.js")    
const disbut = require("discord-buttons")
disbut(client)
const fs = require("fs");         
const db = require("quick.db");
const ms = require("ms");  
const moment = require("moment");   
require("moment-duration-format"); 
require('./util/Loader.js')(client);     

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} Komut Yüklenecek.`);
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} Komutu Yüklendi.`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})



client.on('ready', () => {
  console.log(`----------------------------------------`);
  console.log(`| ${client.user.tag} | Giriş Yaptı `);
  console.log(`----------------------------------------`);
});


Date.prototype.toTurkishFormatDate = function (format) {
  let date = this,
    day = date.getDate(),
    weekDay = date.getDay(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  let monthNames = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
  let dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");

  if (!format) {
    format = "dd MM yyyy | hh:ii:ss";
  };
  format = format.replace("mm", month.toString().padStart(2, "0"));
  format = format.replace("MM", monthNames[month]);
  
  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().substr(2, 2));
  };
  
  format = format.replace("dd", day.toString().padStart(2, "0"));
  format = format.replace("DD", dayNames[weekDay]);

  if (format.indexOf("HH") > -1) format = format.replace("HH", hours.toString().replace(/^(\d)$/, '0$1'));
  if (format.indexOf("hh") > -1) {
    if (hours > 12) hours -= 12;
    if (hours === 0) hours = 12;
    format = format.replace("hh", hours.toString().replace(/^(\d)$/, '0$1'));
  };
  if (format.indexOf("ii") > -1) format = format.replace("ii", minutes.toString().replace(/^(\d)$/, '0$1'));
  if (format.indexOf("ss") > -1) format = format.replace("ss", seconds.toString().replace(/^(\d)$/, '0$1'));
  return format;
};

 client.on('ready', () => {
    client.channels.cache.get('830815733494710292').join()
  });

  client.on('voiceStateUpdate', (oldState, newState) => {
    if (!oldState.channelID && newState.channelID && !oldState.channel && newState.channel || oldState.channelID && newState.channelID && oldState.channel && newState.channel) {
        let kişi = newState.guild.members.cache.get(newState.id);
        kişi.kanalagiris = Date.now()
    }
})
//
client.on(`guildMemberAdd`, async member => {
  const devils = new Discord.MessageEmbed()
    .setImage(`https://media.giphy.com/media/aHeMnprhG4ivLhrIzw/giphy.gif`)
  .setTitle("SELAMMM CUKULATAMM")
  .setColor("RANDOM")
.setDescription(`**${member.guild.name}** Isimli Sunucuya Hoş Geldin İyi Eğlenceler..`)
    .setFooter(`Erenaydn55 💛 WİNCHESTER`)
  member.send(devils);
});
//
client.login(ayarlar.token)

//
client.on('ready', () => {

  setInterval(() => {

  if(client.ws.ping < 200){
    pingmesajtr = " Bot durumu Stabil Tüm Sistemler Çalışıyor <a:tik:893594266142670868>"
    pingmesajus = " All Systems Running Bot Online "
  }
  if(client.ws.ping > 200){
    pingmesajtr = " Botun Pingi Var, Aksaklıklar Yaşanabilir <a:hata:893594265534484551>"
    pingmesajus = "Bot Has Ping, Glitches May Aging"
    } 
  
let calismasure = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika]");
let sunucular = client.guilds.cache.size
let kullanıcılar = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)
let ping = client.ws.ping+"ms!"
let besbes = "İstatikler ve Durumlar <a:dp_sayim:855486015036457020> yenilenecektir."
client.channels.cache.get("893994269675782154").messages.fetch("893994364433485844").then(msg => {
  const yaz = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(client.user.tag , client.user.avatarURL())
  .setDescription(`<a:bekleyin:893593454469345341> **Otomatik yenilenen Bot Durum ve İstatislik** <a:bekleyin:893593454469345341>`)
    .addField(`**Toplam Kullanıcı :**`, `\`${kullanıcılar}\`` , true)
    .addField(`**Toplam Sunucu :**`, `\`${sunucular}\``, true)
    .addField(` **Çalışma Süresi :**`, `\`${calismasure}\``, true)
    .addField(`**Toplam Ping :**`, `\`${ping} \` ${pingmesajtr}` , true)
    .addField(` Restart : ${besbes}\``, true)
  .setThumbnail(client.user.avatarURL())
  .setFooter(client.user.tag , client.user.avatarURL())
  msg.edit(yaz)
  }) 
  
 }, 60000); // https://convertlive.com/tr/u/dönüştürmek/milisaniye/a/saniye 
})

//


//* ALTA EKLE NE -BOK- EKLEYECEKSEN *//