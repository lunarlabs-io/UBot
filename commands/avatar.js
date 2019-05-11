exports.run = async (client, message, args) => {
    var Discord = require('discord.js');
    var member = message.mentions.users.first()
    let embed = new Discord.RichEmbed()
    if (member) {
        let embed = new Discord.RichEmbed()
            .setImage(member.avatarURL)
            .setColor('#000FFF')
            .addField('Here is the mentioned user\'s profile picture,', message.member)
            .setFooter('Command handled by UBot')
        message.channel.send(embed)
    }
    if (!member) {
        let embed = new Discord.RichEmbed()
            .setImage(message.author.avatarURL)
            .setColor('#000FFF')
            .addField('Here is your profile picture', message.author)
            .setFooter('Command handled by UBot.')
        message.channel.send(embed)
    }};