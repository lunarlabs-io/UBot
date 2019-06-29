exports.run = async (oldMessage, newMessage) => {
  if (newMessage.content != oldMessage.content) {

    //log to console
    console.log("[" + newMessage.guild.name + "][#" + newMessage.channel.name + "][UPDMSG] " +
            newMessage.author.username + "#" + newMessage.author.discriminator + ":\n\tOLDMSG: " +
            formatConsoleMessage(oldMessage) + "\n\tNEWMSG: " + formatConsoleMessage(newMessage));

    //post in the guild's log channel
    var log = newMessage.guild.channels.find(c => c.name === "ubot-logs");
    if (log != null)
      log.sendMessage("**[Message Updated]** *" + newMessage.author.username + "#" + newMessage.author.discriminator + "*:\n*Old Message*: " + oldMessage.content +
                "\n*New Message*: " + newMessage.content + "\n" + "\n*User ID*: " + newMessage.author.id + "\n" + "\n*Message ID*: " + newMessage.id);
  }

  function formatConsoleMessage(newMessage) {
    // eslint-disable-next-line no-control-regex
    return newMessage.content.replace(new RegExp("\n", "g"), "\n\t");
  }
};
