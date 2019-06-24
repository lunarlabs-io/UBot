const Discord = require("discord.js");
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
    const embed = new Discord.RichEmbed()
      .setImage("https://i.kym-cdn.com/photos/images/newsfeed/000/910/542/1e8.jpg")
      .setColor("#000FFF")
      .addField(":x:", "You have been fined $350.");
    msg.channel.send(embed);
  }
}
module.exports = AwooCommand;