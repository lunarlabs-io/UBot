exports.run = async (guild) => {
var sql1 = `INSERT INTO serversettings (serverID, prefix, logID) VALUES (${msg.guild.id}, 'u!', ''`

global.con.query(sql1, function (err, result) {
  if (err) return
  console.log("[DB] Guild Added")
});
/*  var r = require("rethinkdbdash")({
    port: process.env.RETHINK_PORT,
    host: process.env.RETHINK_HOST,
    db: process.env.RETHINK_DB
  }); */
  r.tableCreate(guild.id);
  const now = Date.now();
  console.log(`uBot has joined ${guild.name}` );
  this.client.guilds.get("555894246717259797").channels.get("594557392541188096").send(`uBot has Joined ${guild.name} at ${now}`);
}
  
