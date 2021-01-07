const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
var prefix = ayarlar.prefix
 message.channel.send(new Discord.RichEmbed()
.setTitle(`Yardım Menüsü`)
.setDescription(`
• ${prefix}yardım-eğlence: Eğlence Komutları
• ${prefix}yardım-nsfw: NSFW komutlarını Gösterir

• ${prefix}ban: Etiketlenen Kullanıcıya ban Atar
• ${prefix}unban: Id si girilen kişinin banını açar
• ${prefix}ban-limit: Ban limitini Ayarlarsınız
• ${prefix}banliste: banlananları Gösterir
• ${prefix}unbanall: herkesin banını 

• ${prefix}bot-koruma: Sunucuya Gelen Botları Banlar
• ${prefix}kanal-koruma: silinen kanalları tekrar kurar 
• ${prefix}rol-k: silinen Rolleri Tekrar Kurar

• ${prefix}reklam-engel: Reklamı Engellersuccess: psst, Glitch autosaves 八(＾□＾*)

• ${prefix}capslock-engel: Büyük harfli Mesajları Engeller 
• ${prefix}küfür-engel: küfürleri engeller

• ${prefix}sohbet-kapat: Belirlenen Süreyle Mesaj Göndermeyi Engeller 
• ${prefix}sohbet-aç: Sohbeti açarsınız

• ${prefix}perm: Etiketlenen Kişinin İzinlerini Gösterir

• ${prefix}sil: 1-100 arasında rakamlar giriniz

• ${prefix}uyarı ekle: etiket sebeb 

• ${prefix}uyarı sil: etiket silinecek miktar

• ${prefix}uyarı say: etiket  
`)//// Kendinize göre komutları arttırabilirsiniz
.setColor("RANDOM")
  
.setFooter(`Venüs Guard Tüm Hakları Saklıdır.`))

//// Basit Yardım Menusu İstek Üzerine Yapılmıştır
 
  

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'

}