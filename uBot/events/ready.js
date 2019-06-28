exports.run = async (client) => {
  client.user.setPresence({
    game: {
      name: `${client.users.size} users in ${client.guilds.size} servers.`,
      type: "WATCHING"
    },
    status: "online"
  });
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
};
