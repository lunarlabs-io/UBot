
const { Command } = require("discord.js-commando");
var Discord = require("discord.js");
class BanCommand extends Command {
  constructor(client) {
    super (client, {
      name: "ban",
      aliases: ["userbegone"],
      group: "moderation",
      memberName: "ban",
      description: "Ban a user from the guild.",
      userPermissions: ["BAN_MEMBERS"],
      guildOnly: true,
      args: [{
        key: "member",
        label: "user",
        type: "member",
        prompt: "Who do you want me to ban?"
      },
      {
        key: "reason",
        label: "reason",
        type: "string",
        prompt: "Why do you want me to ban them?"
      }]
    });
  }
  async run(msg, { member, reason }) {
    let executo = msg.author.id;
    let execut = msg.guild.members.get(executo);
    let highrolea = execut.highestRole.position;
    let highrolem = member.highestRole.position;
    if (highrolea < highrolem) return msg.reply("You can't ban someone with a higher role than yours...");
    if (member.bannable) {
      if (member) {
        await member.ban(reason)
          .catch(error => msg.reply(`Sorry ${msg.author} I couldn't ban because of : ${error}`));
        msg.channel.send({embed: {
          color: 3447003,
          title: ":white_check_mark:",
          description: "User has been banned!",
          footer: "Command handled by UBot | Command initiated by ${msg.author}"
        }});
        const incidentschannel = msg.guild.channels.find(c => c.name === "ubot-logs");
        if (!incidentschannel) return msg.channel.send("Couldn't find ubot-logs channel.");
        if (incidentschannel) {
          const banEmbed = new Discord.RichEmbed()
            .setDescription("A user has been banned")
            .setThumbnail(member.avatarURL)
            .setColor("#15f153")
            .addField("User who was banned", `${member} with ID: ${member.id}`)
            .addField("Banned by user", `${msg.author} with ID: ${msg.author.id}`)
            .addField("Time the user was banned at", msg.createdAt)
            .addField("Reason of ban", reason);
          incidentschannel.send(banEmbed);
        }
      }}}}
module.exports = BanCommand;