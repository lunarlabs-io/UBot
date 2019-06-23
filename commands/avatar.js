const Discord = require("discord.js");
exports.run = async (client, message) => {
  const member = message.mentions.users.first();
  if (member) {
    const embed = new Discord.RichEmbed()
      .setImage(member.avatarURL)
      .setColor("#000FFF")
    // eslint-disable-next-line max-len
      .addField("Here is the mentioned user's profile picture,", message.member)
      .setFooter("Command handled by UBot");
    message.channel.send(embed);
  }
  if (!member) {
    const embed = new Discord.RichEmbed()
      .setImage(message.author.avatarURL)
      .setColor("#000FFF")
      .addField("Here is your profile picture", message.author)
      .setFooter("Command handled by UBot.");
    message.channel.send(embed);
  }
};
