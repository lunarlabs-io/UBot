exports.run = (client, message, args) => {

  // To get the "message" itself we join the `args` back into a string with spaces:
  const guildConf = client.settings.get(message.guild.id);


  const is_staff = message.member.roles.some(role => role.name === guildConf.ownerRole);

  if (is_staff === false) return message.channel.send({embed: {
    title: ":x:",
    color: 3447003,
    description: "Sorry, you don't have permission to use this!"
  }});


  const sayMessage = args.join(" ");

  if (!sayMessage)
    return message.channel.send({embed: {
      title: ":information_source:",
      color: 3447003,
      description: "Please enter a message for the bot to say!"
    }});


  // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.

  // message.delete().catch(O_o => {});

  // And we get the bot to say the thing:
  message.channel.send({embed: {
    color: 3447003,
    description: sayMessage
  }});};