exports.run = (client, message) => {
  var Discord = require("discord.js");
  const sicon = message.guild.iconURL;
  //const member = message.author;
  const serverembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server name", message.guild.name)
    .addField("Server ID", message.guild.id)
    .addField("Server Owner", message.guild.owner)
    .addField("Server Owner ID", message.guild.owner.id)
    .addField("Server was made on", message.guild.createdAt)
    .addField("Server Region", message.guild.region)
    .addField("You joined on", message.member.joinedAt)
    .addField("Total members of the guild", message.guild.memberCount);

  message.channel.send(serverembed);
};