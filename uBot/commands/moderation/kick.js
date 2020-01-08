require("dotenv").config({path:"./.env"});
var r = require("rethinkdbdash")({
  port: process.env.RETHINK_PORT,
  host: process.env.RETHINK_HOST,
  db: process.env.RETHINK_DB
});
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
    if (highrolea < highrolem) return msg.reply("You can't kick someone with a higher role than yours...");
    await member.kick(reason);
    msg.channel.send({embed: {
      title: ":white_check_mark:",
      color: 3447003,
      description: "User has been kicked!"
    }});
    r.tableList().contains(msg.guild.id)
        .do(function(tableExists) {
          return r.branch(
              tableExists,
              { table_created: 0 },
              r.tableCreate(msg.guild.id)
          )});
    r.table(msg.guild.id)
        .insert({
          type: "kick",
            userID: member.id + " (" + member.user.username + "#" + member.user.discriminator + ")",
            moderator: msg.author.id + " (" + msg.author.username + "#" + msg.author.discriminator + ")",
          reason: reason,
          date: Date()
        })
        .run()
        .then(function(response){
          console.log('Success ',response);
        })
        .error(function(err){
          console.log('error occurred ',err);
        });
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
        .addField("Reason of kick", reason)
          .addField("This user's previous punishments in this server", '[link to the API](https://api.ubot.protogen.dev/punish?server_id=' + msg.guild.id + "&" + "user_id=" + member.id + ")");
      incidentschannel.send(kickEmbed)
        .catch(() => msg.channel.send({embed: {
          color: 3447003,
          title: ":x:",
          description: "I couldn't kick the aforementioned user because of an error!"
        }}));
    }}}
module.exports = KickCommand;
