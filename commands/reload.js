exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  if (message.author.id === "251788826232619008") {
    if (!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    const commandName = args[0];
    // Check if the command exists and is valid
    if (!client.commands.has(commandName)) {
      return message.reply("That command does not exist");
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    const embed = new Discord.RichEmbed()
      .setThumbnail(client.user.avatarURL)
      .setColor("#00000")
      .addField("Command has been reloaded", commandName);
    message.reply(embed);
  }};