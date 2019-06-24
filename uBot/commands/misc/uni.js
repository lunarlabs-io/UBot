const { Command } = require("discord.js-commando");
class UniCommand extends Command {
  constructor(client) {
    super(client, {
      name: "uni",
      aliases: [],
      group: "misc",
      memberName: "uni",
      description: "Checks if your username is 'Uni'",
      ownerOnly: false,
      guildOnly: false

    });
  }
  async run(msg) {
    //var Discord = require("discord.js");
    var username = msg.author.username;
    if (msg.member.displayName === "Uni" || username === "Uni") {
      return msg.channel.send({
        embed: {
          color: 3447003,
          title: ":white_check_mark:",
          description: "Your nickname or username is Uni! #UniSquad"
        }
      });
    }
    else {
      return msg.channel.send({
        embed: {
          color: 3447003,
          title: ":x:",
          description: "Your name is not Uni!"
        }
      });
    }
  }
}
module.exports = UniCommand;
