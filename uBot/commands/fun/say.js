const { Command } = require("discord.js-commando");

class SayCommand extends Command {
  constructor(client) {
    super(client, {
      name: "say",
      aliases: ["parrot"],
      group: "fun",
      memberName: "say",
      throttling: {
        usages: 2,
        duration: 5
      },
      description: "Make me say something",
      userPermissions: ["ADMINISTRATOR"],
      examples: ["say I'm kawaii!", "say Hey, master!", "say Hello World"],
      guildOnly: true,
      args: [
        {
          key: "text",
          label: "text",
          prompt: "Please enter what I should say!",
          type: "string"
        }
      ]
    });
  }
  async run(msg, args) {
    msg.say({
      embed: {
        title: "I've been told to say something for a user...",
        color: 3447003,
        description: args.text,
        footer: {
          text: "Initiated by " + msg.author.username + "#" + msg.author.discriminator + " | Command handled by UBot"
        }
      }
    });
  }
}
module.exports = SayCommand;

