exports.run = (client, message, args) => {
    var Discord = require('discord.js');
    let sicon = message.guild.iconURL;
    let member = message.author;
    let serverembed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Server name", message.guild.name)
        .addField("Server ID", message.guild.id)
        .addField("Server Owner", message.guild.owner)
        .addField("Server Owner ID", message.guild.owner.id)
        .addField("Server was made on", message.guild.createdAt)
        .addField("You joined on", message.member.joinedAt)
        .addField("Total members of the guild", message.guild.memberCount);

    message.channel.send(serverembed);
}