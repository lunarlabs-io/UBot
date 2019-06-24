const Discord = require("discord.js");
/* eslint-disable linebreak-style */
const { Command } = require("discord.js-commando");
class ServerInfoCommand extends Command {
  constructor(client) {
    super (client, {
      name: "sinfo",
      aliases: [],
      group: "fun",
      memberName: "sinfo",
      description: "Look up the servers info",
      ownerOnly: false,
      guildOnly: false
      
    });
  }
  async run(msg) {
    const sicon = msg.guild.iconURL;
    //const member = message.author;
    const serverembed = new Discord.RichEmbed()
      .setColor("#15f153")
      .setThumbnail(sicon)
      .addField("Server name", msg.guild.name)
      .addField("Server ID", msg.guild.id)
      .addField("Server Owner", msg.guild.owner)
      .addField("Server Owner ID", msg.guild.owner.id)
      .addField("Server was made on", msg.guild.createdAt)
      .addField("Server Region", msg.guild.region)
      .addField("You joined on", msg.member.joinedAt)
      .addField("Total members of the guild", msg.guild.memberCount);

    msg.channel.send(serverembed);
  }
}
module.exports = ServerInfoCommand;
