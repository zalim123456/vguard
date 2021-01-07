const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();
exports.run = async(client, message, args) => {
let tag = args[0]
let rol = message.mentions.roles.first();
let channel = message.mentions.channels.first();
if(args[0] === "sıfırla"){
if(!db.has(`tagrol_${message.guild.id}`)) return message.channel.send("Zaten ayarlanmamış ayarlamak için `!tag-rol <tag> @rol #kanal>`")
db.delete(`tag_${message.guild.id}`)
db.delete(`tagrol_${message.guild.id}`)
db.delete(`tagkanal_${message.guild.id}`)
message.channel.send("Başarıyla sıfırlandı")
}
if(!tag) return message.channel.send("Doğru kullanım: `!tag-rol <tag> @rol #kanal>")
if(!rol) return message.channel.send("Doğru kullanım: `!tag-rol <tag> @rol #kanal>")
if(!channel) return message.channel.send("Doğru kullanım: `!tag-rol <tag> @rol #kanal>`")
if(db.has(`tagrol_${message.guild.id}`)) return message.channel.send("Zaten ayarlanmış sıfırlamak için `!tag-rol sıfırla`")
db.set(`tag_${message.guild.id}`, tag)
db.set(`tagrol_${message.guild.id}`, rol.id)
db.set(`tagkanal_${message.guild.id}`, channel.id)
message.channel.send("Başarıyla Ayarlandı")

} 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
///fiber code
exports.help = {
  name: 'tag-rol',
  description: 'bişilet',
  usage: 'yaz'
};