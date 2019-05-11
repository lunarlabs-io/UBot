exports.run = (client, message, args) => {
    var Discord = require('discord.js');
    let embed = new Discord.RichEmbed()
        .setImage('https://i.kym-cdn.com/photos/images/newsfeed/000/910/542/1e8.jpg')
        .setColor('#000FFF')
        .addField(':x:', 'You have been fined $350.')
    message.channel.send(embed)
};