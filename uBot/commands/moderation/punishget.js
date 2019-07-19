var r = require("rethinkdbdash")({
  port: 28015,
  host: "localhost",
  db: "punishments"
});
const { Command } = require("discord.js-commando");
var Discord = require("discord.js");

class PGetCommand extends Command {
  constructor(client) {
    super (client, {
      name: "punishget",
      aliases: [],
      group: "moderation",
      memberName: "punishget",
      description: "Get a user's punishments.",
      userPermissions: ["ADMINISTRATOR"],
      guildOnly: true,
      args: [{
        key: "member",
        label: "user",
        type: "member",
        prompt: "Mention who you want to see the punishments of."
      },
        {
          key: "ptype",
          label: "ptype",
          type: "string",
          prompt: "Do you want to see all their punishments or a specific type?"
        }]
    });
  }
  async run(msg, { member, ptype }) {
    if (ptype === "All") {
    r.table(msg.guild.id).filter(r.row('userID').eq(member.id))
        .run()
        .then(function(response){
          console.log(response);
          msg.channel.send("```\n" + JSON.stringify(response, null, 2) + "```\n");
        })
        .error(function(err){
          msg.channel.send(err);
        })
  }
  if (ptype === "Bans") {
    r.table(msg.guild.id).filter(r.row('userID').eq(member.id) && r.row('type').eq('ban'))
        .run()
        .then(function (response) {
          console.log(response);
          msg.channel.send("```\n" + JSON.stringify(response, null, 2) + "```\n");
        })
        .error(function (err) {
          msg.channel.send(err);
        })
  }
    if (ptype === "Warns") {
      r.table(msg.guild.id).filter(r.row('userID').eq(member.id) && r.row('type').eq('warn'))
          .run()
          .then(function (response) {
            console.log(response);
            msg.channel.send("```\n" + JSON.stringify(response, null, 2) + "```\n");
          })
          .error(function (err) {
            msg.channel.send(err);
          })
    }
      if (ptype === "Kicks") {
        r.table(msg.guild.id).filter(r.row('userID').eq(member.id) && r.row('type').eq('kick'))
            .run()
            .then(function (response) {
              console.log(response);
              msg.channel.send("```\n" + JSON.stringify(response, null, 2) + "```\n");
            })
            .error(function (err) {
              msg.channel.send(err);
            })
      }
      }
  }
module.exports = PGetCommand;
