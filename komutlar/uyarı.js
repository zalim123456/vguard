const Discord = require('discord.js')

const db = require('quick.db')

exports.run = async (client, message, args) => {


if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Yetkin yok.:x:`)

if(!args[0]) return message.channel.send(`Kullanım: .uyarı ekle .uyarı sil .uyarı sayi`)

if(args[0] === 'ekle') {

let kullanıcı = message.mentions.users.first()

if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)

if(kullanıcı.id === message.author.id) return message.channel.send(`Kendini uyaramazsın.`)

let reason = args.slice(2).join(' ')

db.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)

const sayı = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!reason) {

await message.channel.send(new Discord.RichEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('Başarılı')

    .setDescription(`${kullanıcı} uyarıldı. Toplam uyarıları: **${sayı}**`)
    .setFooter(`Octopus Bot Uyarı Sistemi`))

await kullanıcı.send(new Discord.RichEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('Hey Dikkat et')

    .setDescription(`${message.guild.name} sunucusunda uyarıldın. Toplam uyarıların: **${sayı}**`)
    .setFooter(`Venüs Bot Uyarı Sistemi`)) 

return}

if(reason) {

await message.channel.send(new Discord.RichEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('Başarılı')

    .setDescription(`${kullanıcı} uyarıldı. Toplam uyarıları: **${sayı}**\nSebep: ${reason}`)
    .setFooter(`Venüs Bot Uyarı Sistemi`))

await kullanıcı.send(new Discord.RichEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('Hey Dikkatli ol')

    .setDescription(`${message.guild.name} sunucusunda ${reason} sebeiyle uyarıldın. Toplam uyarıların: **${sayı}**`)
    .setFooter(`Venüs  Bot Uyarı Sistemi`)) 

return} }

if(args[0] === 'sil') {

let kullanıcı = message.mentions.users.first()

if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)

if(kullanıcı.id === message.author.id) return message.channel.send(`Kendini uyaramazsın.`)

let sayı = args[2]

if(!sayı) return message.channel.send(`Silinecek uyarı sayısını yazmadın!`)

if(sayı === '0') return message.channel.send(`0 geçerli bir değer değildir.`)

const sayı2 = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(sayı2 < sayı) return message.channel.send(new Discord.RichEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('Dikkat')

    .setDescription(`${kullanıcı}'nın uyarı sayısı: **${sayı2}**.Bundan daha fazla uyarı silemessin.`)
    .setFooter(`Venüs  Bot Uyarı Sistemi`))

db.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)

const sayı3 = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

await message.channel.send(new Discord.RichEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('Başarılı')

    .setDescription(`${kullanıcı}'nın uyarısı silindi!\nToplam uyarı sayısı: **${sayı3 ? sayı3 : '0'}** `)
    .setFooter(`Venüs Bot Uyarı Sistemi`))

await kullanıcı.send(new Discord.RichEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('Hey Dikkat Et')

    .setDescription(`${message.guild.name} sunucusunda uyarın silindi bundan sonra daha dikkatli olmalısın.`)
    .setFooter(`Octopus Bot Uyarı Sistemi`)) }

if(args[0] === 'sicil') {

let kullanıcı = message.mentions.users.first()

if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)


const sayı2 = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!sayı2) return message.channel.send(new Discord.RichEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('Bir Sorun Var')

    .setDescription(`${kullanıcı}'nın hiç uyarısı bulunamadı.`)
    .setFooter(`Octopus Bot Uyarı Sistemi`))
  

await message.channel.send(new Discord.RichEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('Başarılı')

    .setDescription(`${kullanıcı}:\nToplam uyarı sayısı: **${sayı2 ? sayı2 : '0'}** `))
    .setFooter(`Octopus Bot Uyarı Sistemi`)}
    
};
/////////FİBER BOTLİST & CODE
exports.conf = {

enabled: true,

guildOnly: false,

aliases: [],

permLevel: 0,

}

exports.help = {

name: 'uyarı',

description: 'Uyarı sistemi',

usage: 'uyarı ekle uyarı sil uyarı say',

}