var r = require("rethinkdbdash")({
  port: 28015,
  host: "localhost",
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
      name: `${client.users.size} users in ${client.guilds.size} servers.`,
      type: "STREAMING"
    },
    status: "online"
  });
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
};
