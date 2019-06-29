exports.run = async (guild) => {
  const now = Date.now();
  console.log(`uBot has left ${guild.name}` );
  this.client.guilds.get("555894246717259797").channels.get("594557392541188096").send(`uBot has left ${guild.name} at ${now}`);
};
