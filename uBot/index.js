/* eslint-disable linebreak-style */
const { Client } = require("discord.js-commando");
const path = require("path");
var { readdir } = require("fs");
console.log("Loading .env file for token");
require("dotenv").config({path:"./.env"});
console.log("Loading uBot client...");
var client = new Client({
  owner: process.env.OWNER_ID,
  commandPrefix: process.env.PREFIX,
  unknownCommandResponse: false,
  disableEveryone: true,
  autoReconnect: true,
  disabledEvents: ["TYPING_START", "TYPING_STOP"]
});
client.login(process.env.TOKEN);
console.log("Connecting to the MySQL database...")
require("./util/database.js")
console.log("Connected!")
console.log("loading commands");
client.registry.registerGroups([
  ["moderation", "Moderation"],
  ["fun", "Funny"],
  ["test", "Testing"],
  ["misc", "Misc"],
  ["social", "Social"],
  ["roleplaying", "Roleplaying"]
]).registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands({"help": false, "prefix": false})
  .registerCommandsIn(path.join(__dirname, "commands"));
console.log ("loading SQLITE database");
console.log("loading events");
readdir("./events", function(e, files) {
  files.forEach(event => {
    var eventName = event.split(".");
    if (eventName[1] == "js") {
      var eventR = require("./events/"+ event);
      if (eventName[0] == "ready") {
        client.on("ready", () => eventR.run(client));
      } else {
        client.on(eventName[0], (...args) => eventR.run(...args));
      }
      delete require.cache[require.resolve("./events/"+ event)];
    }
  });
  process.on('SIGINT', function() {
    require("util/shutdown.js")
    global.shutdown()
  });
});
