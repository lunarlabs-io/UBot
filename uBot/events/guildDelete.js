exports.run = async (guild) => {
  const now = Date.now();
  console.log(`uBot has left ${guild.name}` );
  this.client.guilds.get("460268770758492170").channels.get("592473392888676373").send(`uBot has left ${guild.name} at ${now}`);
};
