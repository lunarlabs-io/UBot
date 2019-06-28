
const { Command } = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

class KickCommand extends Command {
  constructor(client) {
    super (client, {
      name: "kick",
      aliases: ["boot"],
      group: "moderation",
      memberName: "kick",
      description: "Kick a user from the guild.",
      userPermissions: ['KICK_MEMBERS'],
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
  var Discord = require("discord.js");
 
  const guildConf = this.client.settings.get(msg.guild.id);

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
    const incidentschannel = msg.guild.channels.find("name", guildConf.modlogChannel);
    if (!incidentschannel) return msg.channel.send("Couldn't find mod-log channel.");
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
    }}};
module.exports = KickCommand;
