var r = require("rethinkdbdash")({
  port: process.env.RETHINK_PORT,
  host: process.env.RETHINK_HOST,
  db: "serversettings"
});
r.dbList().contains("serversettings")
  .do(function(databaseExists) {
    return r.branch(
      databaseExists,
      { dbs_created: 0 },
      r.dbCreate("serversettings")
    );
  }).run();
r.tableList().contains("servers")
  .do(function(tableExists) {
    return r.branch(
      tableExists,
      { table_created: 0 },
      r.tableCreate("servers")
    );
  }).run();
exports.run = async (client) => {
  client.user.setPresence({
      game: {
          name: `${client.users.size} users 👀 | @UBot`,
          type: "WATCHING"
      },
    status: "online"
  });
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
};
