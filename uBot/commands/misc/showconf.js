const { Command } = require("discord.js-commando");
class ShowConfCommand extends Command {
  constructor(client) {
    super(client, {
      name: "showconf",
      aliases: [],
      group: "misc",
      memberName: "showconf",
      description: "Look up the servers configuration",
      ownerOnly: false,
      guildOnly: true

    });
  }
  async run(msg) {
    const serverDefault = {
      prefix: "u!",
      modlogChannel: "mod-log",
      modRole: "Moderator",
      adminRole: "Administrator",
      ownerRole: "Owner",
      welcomeChannel: "welcome",
      welcomeEn: "false",
      welcomeMessage: "Welcome to the server {{user}}, We hope you enjoy your stay here!"
    };
    const guildConf = this.client.settings.ensure(msg.guild.id, serverDefault);
    const configProps = Object.keys(guildConf).map(prop => {
      return `${prop}  :  ${guildConf[prop]}\n`;
    });
    msg.channel.send(`The following are the server's current configuration:
  \`\`\`${configProps}\`\`\``);
  }
}
module.exports = ShowConfCommand;