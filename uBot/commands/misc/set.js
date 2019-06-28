const { Command } = require("discord.js-commando");
class SetCommand extends Command {
  constructor(client) {
    super(client, {
      name: "set",
      aliases: [],
      group: "misc",
      memberName: "set",
      description: "Set the guild configuration.",
      userPermissions: ["ADMINISTRATOR"],
      ownerOnly: false,
      guildOnly: true,
      args:[{
        key: "text",
        prompt: "What would you like to change?",
        type: "string"
      }]
    });
  }
  async run(msg, {text}) {
    // const serverDefault = {
    //   prefix: "u!",
    //   modlogChannel: "mod-log",
    //   modRole: "Moderator",
    //   adminRole: "Administrator",
    //   ownerRole: "Owner",
    //   welcomeChannel: "welcome",
    //   welcomeEn: "false",
    //   welcomeMessage: "Welcome to the server {{user}}, We hope you enjoy your stay here!"
    // };
    const guildConf = this.client.settings.get(msg.guild.id);
    // Command is admin only, let's grab the admin value: 
    const adminRole = msg.guild.roles.find("name", guildConf.adminRole);
    if (!adminRole) return msg.reply("Administrator Role Not Found");

    // Then we'll exit if the user is not admin
    if (!msg.member.roles.has(adminRole.id)) {
      return msg.reply("You're not an admin, sorry!");
    }

    // Let's get our key and value from the arguments. 
    // This is array destructuring, by the way. 
    const [prop, ...value] = text;
    // Example: 
    // prop: "prefix"
    // value: ["+"]
    // (yes it's an array, we join it further down!)

    // We can check that the key exists to avoid having multiple useless, 
    // unused keys in the config:
    if (!this.client.settings.has(msg.guild.id, prop)) {
      return msg.reply("This key is not in the configuration.");
    }

    // Now we can finally change the value. Here we only have strings for values 
    // so we won't bother trying to make sure it's the right type and such. 
    this.client.settings.set(msg.guild.id, value.join(" "), prop);

    // We can confirm everything's done to the client.
    msg.channel.send(`Guild configuration item ${prop} has been changed to:\n\`${value.join(" ")}\``);
  }
}
module.exports = SetCommand;
