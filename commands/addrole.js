const { Command } = require("discord-akairo");

class AddRoleCommand extends Command {
  constructor () {
    super("addrole", {
      aliases: ["addrole"],
      args: [
        {
          id: "member",
          type: "member",
          unordered: true
        },
        {
          id: "role",
          type: "role",
          unordered: true
        }
      ],
      userPermissions: ["ADMINISTRATOR"],
      channel: "guild"
    });
  }

  async exec (message, args) {
    await args.member.addRole(args.role);
    return message.reply("Done!");
  }
}

module.exports = AddRoleCommand;