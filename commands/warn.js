exports.run = (client, message, args) => {
    var Discord = require('discord.js');
    return message.channel.send({embed: {
            color: 3447003,
            description: ":x: Command is disabled due to being a work in progress!"
}})};