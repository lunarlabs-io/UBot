/* eslint-disable linebreak-style */
const { Command } = require("discord.js-commando");
const exec = require("child_process").exec;

class ExecCommand extends Command {
  constructor(client) {
    super(client, {
      name: "exec",
      aliases: ["bash"],
      group: "misc",
      memberName: "exec",
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

  async run(msg, {text}) {
    if (text.includes(['""'])) {
      msg.channel.send(
          {
            embed: {
              title: ":x: Error",
              color: 3447003,
              description: "The command is invalid.",
              footer: {
                text: "Initiated by " + msg.author.username + "#" + msg.author.discriminator + " | Command handled by UBot"
              }
            }
          }
      );
    } else {
      var message = await msg.channel.send("Running... Keep calm and wait.");
      exec(text, (error, stdout, stderr) => {
        if (error || stderr) {
          if (stderr.length > 1980) return console.log(stderr), message.edit(
              {
                embed: {
                  title: ":warning: Warning",
                  color: 3447003,
                  description: "The output is longer than 2,000 characters, so check your console.",
                  footer: {
                    text: "Initiated by " + msg.author.username + "#" + msg.author.discriminator + " | Command handled by UBot"
                  }
                }
              });
          message.edit(
              {
                embed: {
                  title: ":x: Error",
                  color: 3447003,
                  description: "\n```" + stderr + "```",
                  footer: {
                    text: "Initiated by " + msg.author.username + "#" + msg.author.discriminator + " | Command handled by UBot"
                  }
                }
              });
        } else {
          if (stdout.length > 1980) return console.log(stdout), message.edit("Success! The result is too big, so check your console.");
          message.edit(
              {
                embed: {
                  title: ":white_check_mark: Success",
                  color: 3447003,
                  description: "\n```" + stdout + "```",
                  footer: {
                    text: "Initiated by " + msg.author.username + "#" + msg.author.discriminator + " | Command handled by UBot"
                  }
                }
              });
        }
      });
    }
  }
}

module.exports = ExecCommand;

