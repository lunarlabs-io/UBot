const Discord = require("discord.js");
const { Command } = require("discord.js-commando");

class InviteCommand extends Command {
  constructor(client) {
    super(client, {
      name: "invite",
      aliases: ["add"],
      group: "misc",
      memberName: "invite",
      description: "Use this command to get an invite link for the bot.",
      ownerOnly: false,
      guildOnly: false

    });
  }
  async run(msg) {
    const embed = new Discord.RichEmbed()
      .setColor("#000FFF")
      .addField(":information_source:", "To invite the bot, go to https://discordapp.com/api/oauth2/authorize?client_id=486225577330868254&permissions=124934&scope=bot");
    msg.channel.send(embed);
  }}
module.export = InviteCommand;
