require("dotenv").config({path:"./.env"});
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
    
    // get the executor's ID
    let executo = msg.author.id;
    // get the executor as a member in the server
    let execut = msg.guild.members.get(executo);
    // get executor's highest role's position
    let highrolea = execut.highestRole.position;
    // get mentioned user's highest role's position
    let highrolem = member.highestRole.position;
    if (highrolea < highrolem) return msg.reply("You can't kick someone with a higher role than yours...");
    await member.kick(reason);
    // Replies with an embed saying that the command was executed
    msg.channel.send({embed: {
      title: ":white_check_mark:",
      color: 3447003,
      description: "User has been kicked!"
    }});
    // add the punishment to the MySQL database
    var sql = "INSERT INTO kicks (userID, serverID, moderator, reason, date) VALUES (" + `'${member.id}'`+ "," + `'${msg.guild.id}'` + ',' +  `'${msg.author.id}'`+ "," + `'${reason}'` + ', ' + `'${Date()}'` + ")";
    global.con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("[Kick] 1 record inserted");
    })
    // get the ubot-logs channel
    global.con.query(sql1, function (err, result) {
      if (err) throw err;
   // msg.channel.send(result[0].logID)
    const chan = result[0].logID
    const incidentschannel = msg.guild.channels.find(c => c.id === chan);
    // if the incidents channel (#ubot-logs) does not exist, return "couldn't find ubot-logs channel"
    if (!incidentschannel) return msg.channel.send("Couldn't find ubot-logs channel.");
    // if it does exist, make the embed then send the punishment log to the channel
    if (incidentschannel) {
      const kickEmbed = new Discord.RichEmbed()
        .setDescription("A user has been kicked")
        .setThumbnail(member.avatarURL)
        .setColor("#15f153")
        .addField("User who was kicked", `${member} with ID: ${member.id}`)
        .addField("Kicked by user", `${msg.author} with ID: ${msg.author.id}`)
        .addField("Time the user was kicked at", msg.createdAt)
        .addField("Reason of kick", reason)
        if(process.env.API_ENDPOINT != undefined) {
        kickEmbed.addField("This user's previous punishments in this server", '[link to the API](' + process.env.API_ENDPOINT + '/punish?server_id=' + msg.guild.id + "&" + "user_id=" + member.id + ")");  
        }    
      incidentschannel.send(kickEmbed)
      // if an error occurs, send an embed to the user saying that the attempt to kick failed
        .catch(() => msg.channel.send({embed: {
          color: 3447003,
          title: ":x:",
          description: "I couldn't kick the aforementioned user because of an error!"
        }}));
    };
    })
    // export it to be used in the bot
module.exports = KickCommand;
  }
}
