/* eslint-disable linebreak-style */
const { Client } = require("discord.js-commando");
const path = require("path");
var { readdir } = require("fs");
require("dotenv").config({path:"./.env"});
const sql = require("sqlite");
sql.open("./database.sqlite"); // Create the database!!
console.log("Loading uBot client...");
var client = new Client({
  owner: "251788826232619008",
  commandPrefix: "u!",
  unknownCommandResponse: false,
  disableEveryone: true,
  autoReconnect: true,
  disabledEvents: ["TYPING_START", "TYPING_STOP"]
});
client.login(process.env.TOKEN);
const Enmap = require("enmap");

// I attach settings to client to allow for modular bot setups
// In this example we'll leverage fetchAll:false and autoFetch:true for
// best efficiency in memory usage. We also have to use cloneLevel:'deep'
// to avoid our values to be "reference" to the default settings.
// The explanation for why is complex - just go with it.
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: "deep"
});
// Just setting up a default configuration object here, to have somethign to insert.
// eslint-disable-next-line no-unused-vars
const serverDefault = {
  prefix: "u!",
  modlogChannel: "mod-log",
  modRole: "Moderator",
  adminRole: "Administrator",
  ownerRole: "Owner",
  welcomeChannel: "welcome",
  welcomeEn: "false",
  welcomeMessage: "Welcome to the server {{user}}, We hope you enjoy your stay here!"
};
client.registry.registerGroups([
  ["moderation", "Moderation"],
  ["fun", "Funny"],
  ["test", "Testing"],
  ["misc", "Misc"],
  ["social", "Social"],
  ["roleplaying", "Roleplaying"]
]).registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands({"help": false})
  .registerCommandsIn(path.join(__dirname, "commands"));
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
});
