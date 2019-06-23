module.exports = (client, member) => {
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
  client.settings.ensure(member.guild.id, serverDefault);
  if (client.settings.get(member.guild.id, "welcomeEn") === false) return;
  let welcomeMessage = client.settings.get(member.guild.id, "welcomeMessage");
  welcomeMessage = welcomeMessage.replace("{{user}}", member.user.tag);
  member.guild.channels
    .find("name", client.settings.get(member.guild.id, "welcomeChannel"))
    .send(welcomeMessage)
  // eslint-disable-next-line no-console
    .catch(console.error);
};
