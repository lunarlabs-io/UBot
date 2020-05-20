exports.run  = async (member) => {
  var guild = member.guild

  // let welcomeMessage = client.settings.get(member.guild.id, "welcomeMessage");
  // welcomeMessage = welcomeMessage.replace("{{user}}", member.user.tag);
  // member.guild.channels
  //   .find("name", client.settings.get(member.guild.id, "welcomeChannel"))
  //   .send(welcomeMessage)
  // // eslint-disable-next-line no-console
  //   .catch(console.error);
//  console.log("[" + member.guild.name + "][LEAVE] " + member.user.username + "#" + member.user.discriminator);

  //post in the guild's log channel
  var log = member.guild.channels.find(c => c.name === "ubot-logs");
  if (log != null) {
    log.send({embed: {
        title: ":information_source: | User left",
        color: 3447003,
        description: member+ " has left the guild" + "\n" + "\n *User ID*: " + member.id
      }});
  }
};

