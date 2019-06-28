exports.run  = async (guild, member) => {

  // let welcomeMessage = client.settings.get(member.guild.id, "welcomeMessage");
  // welcomeMessage = welcomeMessage.replace("{{user}}", member.user.tag);
  // member.guild.channels
  //   .find("name", client.settings.get(member.guild.id, "welcomeChannel"))
  //   .send(welcomeMessage)
  // // eslint-disable-next-line no-console
  //   .catch(console.error);
  console.log("[" + guild.name + "][BANNED] " + member.username + "#" + member.discriminator);
  
  //post in the guild's log channel
  var log = guild.channels.find(c => c.name === "ubot-logs");
  if (log != null) {
    log.send("**[BANNED]** " + member);
  }
  
};
  