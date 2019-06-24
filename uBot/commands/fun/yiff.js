const { Command } = require("discord.js-commando");
class AwooCommand extends Command {
  constructor(client) {
    super(client, {
      name: "avatar",
      aliases: [],
      group: "fun",
      memberName: "avatar",
      description: "Look up a users Avatar",
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
module.exports = AwooCommand;