exports.run = async (msg) => {
  // eslint-disable-next-line no-unused-vars
  // Ignore all bots
  if (msg.author.bot) return;

    const serverDefault = {
        prefix: "u!",
        modlogChannel: "mod-log",
        modRole: "Moderator",
        adminRole: "Administrator",
        ownerRole: "Owner",
        welcomeChannel: "welcome",
        welcomeEn: "false",
        welcomeMessage: "Welcome to the server {{user}}, We hope you enjoy your stay here!"
      }
 const guildConf = this.client.settings.ensure(msg.guild.id, serverDefault);

  // eslint-disable-next-line no-unused-vars
  // Ignore messages not starting with the prefix (in config.json)
  if (msg.content.startsWith("<@"+ msg.client.user.id +">") && !msg.content.split(" ").slice(1).join(" ")) {
    msg.channel.send(":wave: | Heya, my name is uBot.\nFor help, use `@uBot help`\nFor info, use `@uBot info`");
  }
};
