const { Command } = require("discord-akairo");

class BanCommand extends Command {
  constructor () {
    super("ban", {
      aliases: ["ban"],
      args: [
        {
          id: "member",
          type: "member"
        }
      ],
      clientPermissions: ["BAN_MEMBERS"],
      userPermissions: ["BAN_MEMBERS"],
      channel: "guild"
    });
  }

  async exec (message, args) {
    if (!args.member) {
      return message.reply("No member found with that name.");    
    }

    await args.member.ban();
    return message.reply(`${args.member} was banned!`);
  }
}

module.exports = BanCommand;