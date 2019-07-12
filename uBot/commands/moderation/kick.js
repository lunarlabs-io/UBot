<<<<<<< HEAD

const { Command } = require("discord.js-commando");
var Discord = require("discord.js");
class KickCommand extends Command {
  constructor(client) {
    super (client, {
      name: "kick",
      aliases: ["boot"],
      group: "moderation",
      memberName: "kick",
      description: "Kick a user from the guild.",
      userPermissions: ["KICK_MEMBERS"],
      guildOnly: true,
      args: [{
        key: "member",
        label: "user",
        type: "member",
        prompt: "Who do you want me to kick?"
      },
      {
        key: "reason",
        label: "reason",
        type: "string",
        prompt: "Why do you want me to kick this member?"
      }]
    });
  }
  async run(msg, { member, reason }) {
    let executo = msg.author.id;
    let execut = msg.guild.members.get(executo);
    let highrolea = execut.highestRole.position;
    let highrolem = member.highestRole.position;
    if (highrolea < highrolem) return msg.reply("You Are Trying To Kick Someone with a Higher Role");
    await member.kick(reason);
    msg.channel.send({embed: {
      title: ":white_check_mark:",
      color: 3447003,
      description: "User has been kicked!"
    }});
    const incidentschannel = msg.guild.channels.find(c => c.name === "ubot-logs");
    if (!incidentschannel) return msg.channel.send("Couldn't find ubot-logs channel.");
    if (incidentschannel) {
      const kickEmbed = new Discord.RichEmbed()
        .setDescription("A user has been kicked")
        .setThumbnail(member.avatarURL)
        .setColor("#15f153")
        .addField("User who was kicked", `${member} with ID: ${member.id}`)
        .addField("Kicked by user", `${msg.author} with ID: ${msg.author.id}`)
        .addField("Time the user was kicked at", msg.createdAt)
        .addField("Reason of kick", reason);
      incidentschannel.send(kickEmbed)
        .catch(() => msg.channel.send({embed: {
          color: 3447003,
          title: ":x:",
          description: "I couldn't kick the aforementioned user because of an error!"
        }}));
    }}}
module.exports = KickCommand;
=======

const { Command } = require("discord.js-commando");
var Discord = require("discord.js");
class KickCommand extends Command {
  constructor(client) {
    super (client, {
      name: "kick",
      aliases: ["boot"],
      group: "moderation",
      memberName: "kick",
      throttling: {
        usages: 2,
        duration: 10
      },
      description: "Kick a user from the guild.",
      userPermissions: ["KICK_MEMBERS"],
      guildOnly: true,
      args: [{
        key: "member",
        label: "user",
        type: "member",
        prompt: "Who do you want me to kick?"
      },
      {
        key: "reason",
        label: "reason",
        type: "string",
        prompt: "Why do you want me to kick this member?"
      }]
    });
  }
  async run(msg, { member, reason }) {
   
 
    //const guildConf = this.client.settings.get(msg.guild.id);

    /*  const has_kick = message.member.roles.some(role => role.name === guildConf.modRole);

  if (has_kick === false) return message.channel.send({embed: {
    title: ":x:",
    color: 3447003,
    description: "Sorry, you don't have permission to use this!"
  }});

  if (has_kick === true) {

    const mentionedmember = message.mentions.members.first();
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    if (!message.mentions.users.first())
      return message.channel.send({embed: {
        title: ":x:",
        color: 3447003,
        description: "Please mention a valid member!"
      }});
*/
    // slice(1) removes the first part, which here should be the user mention!
    //    const reason = args.slice(1).join(" ");
    /*    if (!reason)
      return message.channel.send({embed: {
        title: ":information_source:",
        color: 3447003,
        description: "Please say a reason for the kick!"
      }});
*/
    await member.kick(reason);
    msg.channel.send({embed: {
      title: ":white_check_mark:",
      color: 3447003,
      description: "User has been kicked!"
    }});
    const incidentschannel = msg.guild.channels.find(c => c.name === "ubot-logs");
    if (!incidentschannel) return msg.channel.send("Couldn't find ubot-logs channel.");
    if (incidentschannel) {
      const kickEmbed = new Discord.RichEmbed()
        .setDescription("A user has been kicked")
        .setThumbnail(member.avatarURL)
        .setColor("#15f153")
        .addField("User who was kicked", `${member} with ID: ${member.id}`)
        .addField("Kicked by user", `${msg.author} with ID: ${msg.author.id}`)
        .addField("Time the user was kicked at", msg.createdAt)
        .addField("Reason of kick", reason);
      incidentschannel.send(kickEmbed)
        .catch(() => msg.channel.send({embed: {
          color: 3447003,
          title: ":x:",
          description: "I couldn't kick the aforementioned user because of an error!"
        }}));
    }}}
module.exports = KickCommand;
>>>>>>> af2055e89ce5909747e9d30d899e252272890119
