exports.run = async (guild) => {
  const now = Date.now();
  console.log(`uBot has joined ${guild.name}` );
  this.client.guilds.get("555894246717259797").channels.get("594557392541188096").send(`uBot has Joined ${guild.name} at ${now}`);
};
  