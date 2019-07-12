<<<<<<< HEAD
exports.run = async (msg) => {
 

  //log to console
  console.log("[" + msg.guild.name + "][#" + msg.channel.name + "][DELMSG] " + msg.author.username +
            "#" + msg.author.discriminator + ": " + formatConsoleMessage(msg));

  //post in the guild's log channel
  var log = msg.guild.channels.find(c => c.name === "ubot-logs");
  if (log != null)
    log.send("**[Message Deleted]** " + msg.author + ": " + msg.content);
  function formatConsoleMessage(msg) {
    // eslint-disable-next-line no-control-regex
    return msg.content.replace(new RegExp("\n", "g"), "\n\t");
  }
};
=======
exports.run = async (msg) => {
 

  //log to console
  console.log("[" + msg.guild.name + "][#" + msg.channel.name + "][DELMSG] " + msg.author.username +
            "#" + msg.author.discriminator + ": " + formatConsoleMessage(msg));

  //post in the guild's log channel
  var log = msg.guild.channels.find(c => c.name === "ubot-logs");
  if (log != null)
    log.send({embed: {
      title: ":information_source: | Message by " + msg.author.username + "#" + msg.author.discriminator + " has been deleted",
      color: 3447003,
      description: "Message: " + msg.content + "\n" + "\n" + "*Channel*: " + "#" + msg.channel.name + " *with ID*: " + msg.channel.id + "\n*User ID*: " + msg.author.id + "\n*Message ID*: " + msg.id
    }});
  function formatConsoleMessage(msg) {
    // eslint-disable-next-line no-control-regex
    return msg.content.replace(new RegExp("\n", "g"), "\n\t");
  }
};
>>>>>>> af2055e89ce5909747e9d30d899e252272890119
