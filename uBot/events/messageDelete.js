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
