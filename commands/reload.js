const { Command } = require("discord-akairo");

class ReloadCommand extends Command {
  constructor () {
    super("reload", {
      aliases: ["reload"],
      args: [
        {
          id: "commandID"
        }
      ],
      ownerOnly: true,
      category: "owner"
    });
  }

  exec (message, args) {
    // `this` refers to the command object.
    this.handler.reload(args.commandID);
    return message.reply(`Reloaded command ${args.commandID}!`);
  }
}

module.exports = ReloadCommand;