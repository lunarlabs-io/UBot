exports.run = async (guild) => {
/*  var r = require("rethinkdbdash")({
    port: process.env.RETHINK_PORT,
    host: process.env.RETHINK_HOST,
    db: process.env.RETHINK_DB
  }); */
  var sql1 = `DELETE FROM serversettings WHERE serverID = ${msg.guild.id}`

global.con.query(sql1, function (err, result) {
  if (err) return
  console.log("[DB] Guild Removed")
});
  const now = Date.now();
  r.tableDrop(guild.id);
  console.log(`uBot has left ${guild.name}` );
  this.client.guilds.get("555894246717259797").channels.get("594557392541188096").send(`uBot has left ${guild.name} at ${now}`);
}
