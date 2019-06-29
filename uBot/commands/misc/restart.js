/* eslint-disable linebreak-style */
const { Command } = require("discord.js-commando");
const exec = require("child_process").exec;

class ExecCommand extends Command {
  constructor(client) {
    super (client, {
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
  async run(msg, { text }) {