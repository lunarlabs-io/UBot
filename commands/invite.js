const Discord = require("discord.js");
exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setColor("#000FFF")
    .addField(":information_source:", "To invite the bot, go to https://discordapp.com/api/oauth2/authorize?client_id=486225577330868254&permissions=124934&scope=bot");
  message.channel.send(embed);
};
