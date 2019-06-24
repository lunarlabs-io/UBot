/* eslint-disable linebreak-style */
const { Command } = require("discord.js-commando");
const exec = require("child_process").exec;

class ExecCommand extends Command {
  constructor(client) {
    super (client, {
      name: "eval",
      aliases: ["bash"],
      group: "misc",
      memberName: "eval",
      description: "Run something on terminal",
      ownerOnly: true,
      guildOnly: false,
      args: [{
        key: "text",
        label: "text",
        prompt: "NO COMMAND! Enter the command to run",
        type: "string"
      }]
    });
  }
  async run(msg, { text }) {
    var message = await msg.channel.send("Running... Keep calm and wait.");
    exec(text, (error, stdout, stderr) => {
      if (error || stderr) {
        if (stderr.length > 1980) return console.log(stderr), message.edit("Error! The error message is too big, so check your console.");
        message.edit("Error!\n```"+ stderr +"```");
      } else {
        if (stdout.length > 1980) return console.log(stdout), message.edit("Success! The result is too big, so check your console.");
        message.edit("Success!\n```"+ stdout +"```");
      }
    });
  }
}

module.exports = ExecCommand;