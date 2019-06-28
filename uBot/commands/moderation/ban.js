
const { Command } = require("discord.js-commando");

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
    var Discord = require("discord.js");
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    //   const msgsender = message.author;
    //   const perms = msgsender.permissions;
    //   const member = message.mentions.users.first();

  
    //  const guildConf = this.client.settings.get(msg.guild.id);

    // Check if a member has a specific permission on the guild!
    //  const has_ban = msg.member.roles.some(role => role.name === guildConf.adminRole);
    //  const mentionedmember = msg.mentions.members.first();

    /*  if (has_ban === false) return msg.channel.send({embed: {
    title: ":x:",
    color: 3447003,
    description: "Sorry, you don't have permission to use this!"
  }}); */

    //  if (has_ban === true)
    /*    if (!mentionedmember)
      return msg.channel.send({embed: {
        title: ":information_source:",
        color: 3447003,
        description: "Please mention a valid user!"
      }}); */
    if (member.bannable) {
      /*    const reason = args.reason.slice(1).join(" ");
    if (!reason)
      return msg.channel.send({embed: {
        color: 3447003,
        description: "Please indicate a reason for the ban!"
      }}); */
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
