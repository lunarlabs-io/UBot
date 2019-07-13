const { Command } = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");

class StatsCommand extends Command {
  constructor(client) {
    super (client, {
      name: "stats",
      aliases: ["botinfo"],
      group: "misc",
      memberName: "stats",
      description: "Get stats about the bot.",
      guildOnly: false,
    });
  }
  async run(msg) {
    var embed = new RichEmbed()
      .setTitle("UBot Stats")
      .setThumbnail(this.client.user.avatarURL)
      .setColor(0xFF0090)
      .addField("Server amount", this.client.guilds.size)
      .addField("User amount", this.client.users.size)
      .addField("Discord.JS Version", Discord.version)
      .addField("NodeJS Version", process.versions.node)
      .addField("Bot Owner", "Uni#0001");
    return msg.channel.send(embed);
  }
}

module.exports = StatsCommand;