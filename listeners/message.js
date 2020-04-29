const { Listener } = require("discord-akairo");

class MessageListener extends Listener {
  constructor () {
    super("message", {
      emitter: "client",
      event: "message",
      category: "client"
    });
  }

  // eslint-disable-next-line no-unused-vars
  exec (msg) {
    //console.log(msg.content);
  }
}

module.exports = MessageListener;