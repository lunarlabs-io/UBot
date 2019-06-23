var Discord = require("discord.js");
module.exports = (client, message) => {
  // eslint-disable-next-line no-unused-vars
  const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
      return text;
  };
  // Ignore all bots
  if (message.author.bot) return;
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
  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(guildConf.prefix) !== 0) return;
    
  // Ignore all DMs
  if (message.channel instanceof Discord.DMChannel) return message.channel.send({embed: {
    color: 3447003,
    title: ":x:",
    description: "UBot does not accept DMs! Please go to a server that has UBot to execute commands."
  }});

  // Our standard argument/command name definition.
  const args = message.content.split(/\s+/g);
  const command = args.shift().slice(guildConf.prefix.length).toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};