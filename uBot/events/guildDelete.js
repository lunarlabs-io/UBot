exports.run = async (guild) => {
  var r = require("rethinkdbdash")({
    port: process.env.RETHINK_PORT,
    host: process.env.RETHINK_HOST,
    db: process.env.RETHINK_DB
  });
  const now = Date.now();
  r.tableDrop(guild.id);
  console.log(`uBot has left ${guild.name}` );
  this.client.guilds.get("555894246717259797").channels.get("594557392541188096").send(`uBot has left ${guild.name} at ${now}`);
}
