exports.run = async (guild) => {
  var r = require("rethinkdbdash")({
    port: 28015,
    host: "localhost",
    db: "punishments"
  });
  const now = Date.now();
  r.tableDrop(guild.id);
  console.log(`uBot has left ${guild.name}` );
  this.client.guilds.get("555894246717259797").channels.get("594557392541188096").send(`uBot has left ${guild.name} at ${now}`);
}
