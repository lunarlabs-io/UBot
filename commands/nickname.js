const { Command } = require("discord-akairo");

class NicknameCommand extends Command {
  constructor () {
    super("nickname", {
      aliases: ["nickname"],
      channel: "guild"
    });
  }

  exec (message) {
    return message.reply(`Your nickname is ${message.member.nickname}.`);
  }
}

module.exports = NicknameCommand;