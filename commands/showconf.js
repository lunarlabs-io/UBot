exports.run = async (client, message) => {
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
  const guildConf = client.settings.ensure(message.guild.id, serverDefault);
  const configProps = Object.keys(guildConf).map(prop => {
    return `${prop}  :  ${guildConf[prop]}\n`;
  });
  message.channel.send(`The following are the server's current configuration:
  \`\`\`${configProps}\`\`\``);
};
