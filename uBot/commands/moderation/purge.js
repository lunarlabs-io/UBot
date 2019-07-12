<<<<<<< HEAD
const { Command } = require("discord.js-commando");

class PurgeCommand extends Command {
  constructor(client) {
    super (client, {
      name: "purge",
      aliases: ["msgclean"],
      group: "misc",
      memberName: "purge",
      userPermissions: ["MANAGE_MESSAGES"],
      description: "purge messages",
      guildOnly: true
      
    });
  }
  async run(msg) {    
    const user = msg.mentions.users.first();
    // Parse Amount
    const amount = parseInt(msg.content.split(" ")[1]) ? parseInt(msg.content.split(" ")[1]) : parseInt(msg.content.split(" ")[2]);
    if (!amount) return msg.reply("Must specify an amount to delete!");
    if (!amount && !user) return msg.reply("Must specify a user and amount, or just an amount, of messages to purge!");
    // Fetch 100 messages (will be filtered and lowered up to max amount requested)
    msg.channel.fetchMessages({
      limit: 100,
    }).then((messages) => {
      if (user) {
        const filterBy = user ? user.id : msg.client.user.id;
        messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
      }
      msg.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });
  }
}

=======
const { Command } = require("discord.js-commando");

class PurgeCommand extends Command {
  constructor(client) {
    super (client, {
      name: "purge",
      aliases: ["msgclean"],
      group: "misc",
      memberName: "purge",
      throttling: {
        usages: 2,
        duration: 10
      },
      userPermissions: ["MANAGE_MESSAGES"],
      description: "purge messages",
      guildOnly: true
      
    });
  }
  async run(msg) {    
    const user = msg.mentions.users.first();
    // Parse Amount
    const amount = parseInt(msg.content.split(" ")[1]) ? parseInt(msg.content.split(" ")[1]) : parseInt(msg.content.split(" ")[2]);
    if (!amount) return msg.reply("Must specify an amount to delete!");
    if (!amount && !user) return msg.reply("Must specify a user and amount, or just an amount, of messages to purge!");
    // Fetch 100 messages (will be filtered and lowered up to max amount requested)
    msg.channel.fetchMessages({
      limit: 100,
    }).then((messages) => {
      if (user) {
        const filterBy = user ? user.id : msg.client.user.id;
        messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
      }
      msg.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });
  }
}

>>>>>>> af2055e89ce5909747e9d30d899e252272890119
module.exports = PurgeCommand;