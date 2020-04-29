const { Command } = require("discord-akairo");

class ModlogCommand extends Command {
  constructor () {
    super("modlog", {
      aliases: ["mod"],
      category: "stuff",
      args: [
        {
          id: "prefix",
          default: "!"
        }
      ],
      channel: "guild"
    });
  }

  // eslint-disable-next-line no-unused-vars
  async exec (message, args) {
    // The third param is the default.
    const oldchannel = this.client.settings.get(message.guild.id, "modlog", "!");
    // eslint-disable-next-line no-unused-vars
    const modenabled = this.client.settings.get(message.guild.id, "modlog-enabled", "false");
    if (message.mentions.channels.first()) {
      const channel = message.mentions.channels.first();
      await this.client.settings.set(message.guild.id, "modlog", channel.id);
      await this.client.settings.set(message.guild.id, "modlog-enabled", "true");
      return message.reply(`Modlog changed from <#${oldchannel}> to <#${channel.id}> and modlog has been enabled`);
    }
    else {
      message.reply("Please Mention a Channel");
    }
    
    // const stringdata = channel.name;
    // const newChannel = this.client.channels.cache.get(args.prefix);
    // console.log(stringdata);
    
   
  }
}

module.exports = ModlogCommand;