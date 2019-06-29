exports.run = async (guild) => {
  const now = Date.now();
  console.log(`uBot has joined ${guild.name}` );
  this.client.guilds.get("460268770758492170").channels.get("592473392888676373").send(`uBot has Joined ${guild.name} at ${now}`);
};
  