exports.run = async (msg) => {

  if(msg.guild) { /*
  var sql1 = `INSERT INTO serversettings (serverID, prefix, logID) VALUES ('${msg.guild.id}', 'u!', 'ubot-logs') WHERE NOT EXISTS (SELECT serverID FROM serversettings WHERE serverID = ${msg.guild.id}) LIMIT 1;`
  global.con.query(sql1, function (err, result) {
  if (err) throw err;
  console.log("[DB] Guild Added")
}); */
  var sql = `SELECT prefix FROM serversettings WHERE serverID = ${msg.guild.id};`
  global.con.query(sql, function (err, result) {
    if (err) throw err;
    msg.guild.commandPrefix = result[0].prefix
});
}

  if (msg.author.bot) return;

  if (msg.content.startsWith("<@"+ msg.client.user.id +">") && !msg.content.split(" ").slice(1).join(" ") || (msg.content.startsWith("<@!"+ msg.client.user.id +">") && !msg.content.split(" ").slice(1).join(" "))) {
    msg.channel.send(":wave: | Heya, my name is UBot.\nFor help, use `@UBot help`\nFor info, use `@UBot info`");
  }
}
