const Discord = require("discord.js");
/* eslint-disable linebreak-style */
const { Command } = require("discord.js-commando");
class AvatarCommand extends Command {
  constructor(client) {
    super (client, {
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
    const member = msg.mentions.users.first();
    if (member) {
      const embed = new Discord.RichEmbed()
        .setImage(member.avatarURL)
        .setColor("#000FFF")
      // eslint-disable-next-line max-len
        .addField("Here is the mentioned user's profile picture,", member)
        .setFooter("Command handled by UBot");
      msg.channel.send(embed);
    }
    if (!member) {
      const embed = new Discord.RichEmbed()
        .setImage(msg.author.avatarURL)
        .setColor("#000FFF")
        .addField("Here is your profile picture", msg.author)
        .setFooter("Command handled by UBot.");
      msg.channel.send(embed);
    }
  }
}
module.exports = AvatarCommand;
