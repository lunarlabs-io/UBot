exports.run = (client, message, args) => {
    var Discord = require('discord.js');
    let sicon = message.guild.iconURL;
    let member = message.author;
    let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Server name", message.guild.name)
        .addField("Server was made on", message.guild.createdAt)
        .addField("You joined on", message.author.joinedAt)
        .addField("Total members of the guild", message.guild.memberCount);

    message.channel.send(serverembed);
}