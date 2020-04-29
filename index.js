const UbotClient = require("./bot");
const client = new UbotClient();

const { token } = require("./config.json");
client.start(token);

process.on("unhandledRejection", err => console.error(err)); // eslint-disable-line no-console