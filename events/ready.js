module.exports = (client) => {
  client.user.setPresence({
    game: {
      name: `${client.guilds.size} users in ${client.users.size} servers.`,
      type: "WATCHING"
    },
    status: "online"
  });
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
};