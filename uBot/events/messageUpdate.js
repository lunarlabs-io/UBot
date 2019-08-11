exports.run = async (oldMessage, newMessage) => {
  if (newMessage.content != oldMessage.content) {

    //log to console
//    console.log("[" + newMessage.guild.name + "][#" + newMessage.channel.name + "][UPDMSG] " +
//            newMessage.author.username + "#" + newMessage.author.discriminator + ":\n\tOLDMSG: " +
//            formatConsoleMessage(oldMessage) + "\n\tNEWMSG: " + formatConsoleMessage(newMessage));

    //post in the guild's log channel
    var log = newMessage.guild.channels.find(c => c.name === "ubot-logs");
    if (log != null)
      log.send({embed: {
        title: ":information_source: | Message by " + newMessage.author.username + "#" + newMessage.author.discriminator + " has been edited",
        color: 3447003,
        description: "\n*Old Message*: " + oldMessage.content + "\n*New Message*: " + newMessage.content + "\n" + "\n" + "*Channel*: " + "#" + newMessage.channel.name + " *with ID*: " + newMessage.channel.id + "\n*User ID*: " + newMessage.author.id + "\n*Message ID*: " + newMessage.id
      }});
  }
  function formatConsoleMessage(newMessage) {
    // eslint-disable-next-line no-control-regex
    return newMessage.content.replace(new RegExp("\n", "g"), "\n\t");
  }
};
