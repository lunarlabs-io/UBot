const { Command } = require("discord.js-commando");
class UniCommand extends Command {
  constructor(client) {
    super(client, {
      name: "feo",
      aliases: [],
      group: "misc",
      memberName: "feo",
      description: "Checks if your username is 'Feo'",
      ownerOnly: false,
      guildOnly: false

    });
  }
  async run(msg) {
    //var Discord = require("discord.js");
    var username = msg.author.username;
    if (username === "Feo") {
      return msg.channel.send({
        embed: {
          color: 3447003,
          title: ":white_check_mark:",
          description: "Your nickname or username is Feo!"
        }
      });
    }
    else {
      return msg.channel.send({
        embed: {
          color: 3447003,
          title: ":x:",
          description: "Your name is not Feo!"
        }
      });
    }
  }
}
module.exports = UniCommand;
