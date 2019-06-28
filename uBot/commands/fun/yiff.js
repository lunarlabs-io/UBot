const { Command } = require("discord.js-commando");
class YiffCommand extends Command {
  constructor(client) {
    super(client, {
      name: "yiff",
      aliases: ['e621'],
      group: "fun",
      memberName: "yiff",
      description: "Coming soon...",
      ownerOnly: false,
      guildOnly: false

    });
  }
  async run(msg) {
    //var Discord = require("discord.js");
    msg.channel.send({
      embed: {
        color: 3447003,
        description: ":information_source: Coming soon ;3 - Uni#0001"
      }
    });
  }
}
module.exports = YiffCommand;
