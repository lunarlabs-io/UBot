const Discord = require("discord.js");
exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setImage("https://i.kym-cdn.com/photos/images/newsfeed/000/910/542/1e8.jpg")
    .setColor("#000FFF")
    .addField(":x:", "You have been fined $350.");
  message.channel.send(embed);
};
