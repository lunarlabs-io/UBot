const { Command } = require("discord-akairo");

class KickCommand extends Command {
  constructor () {
    super("kick", {
      aliases: ["kick"],
      args: [
        {
          id: "member",
          type: "member"
        }
      ],
      clientPermissions: ["KICK_MEMBERS"],
      userPermissions: ["KICK_MEMBERS"],
      channel: "guild"
    });
  }

  async exec (message, args) {
    if (!args.member) {
      return message.reply("No member found with that name.");    
    }

    await args.member.kick();
    return message.reply(`${args.member} was Kicked!`);
  }
}

module.exports = KickCommand;