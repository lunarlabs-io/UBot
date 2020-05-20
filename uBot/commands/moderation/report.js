

const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
class ReportCommand extends Command {
  constructor(client) {
    super (client, {
      name: "report",
      aliases: ["tellmods"],
      group: "moderation",
      memberName: "report",
      description: "Report a user in the guild.",
      guildOnly: true,
      args: [{
        key: "member",
        label: "user",
        type: "member",
        prompt: "Who do you want to report?"
      },
      {
        key: "reason",
        type: "string",
        prompt: "Why do you want to report this user?"
      }]
    });
  }
  async run(msg, { member, reason }) {
    
    /*  let info;
  if (message.mentions.members.size === 1) {
    info = message.mentions.members.first().user;
  } if (message.mentions.members.size === 0) {
    info = message.author;
  } */
    /*  const rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!rUser) return message.channel.send({embed: {
    color: 3447003,
    description: "Couldn't find specific user!"
  }}); */
    //  const rreason = args.join(" ").slice(22);

    const reportEmbed = new Discord.RichEmbed()
      .setDescription("A user was reported!")
      .setThumbnail(member.avatarURL)
      .setColor("#15f153")
      .addField("User who was reported", `${member} with ID: ${member.id}`)
      .addField("Reported by user", `${msg.author} with ID: ${msg.author.id}`)
      .addField("Channel the user was reported in", msg.channel)
      .addField("Time the user was reported at", msg.createdAt)
      .addField("Reason of report", reason);

    const reportschannel = msg.guild.channels.find(c => c.name === "ubot-logs");
    if (!reportschannel) return msg.channel.send("Couldn't find ubot-logs channel.");


    msg.delete().catch(()=>{});
    reportschannel.send(reportEmbed);

  }}
module.exports = ReportCommand;
