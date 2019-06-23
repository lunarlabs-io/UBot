exports.run = (client, message, args) => {
    var Discord = require('discord.js');
    const clean = text => {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
    // To get the "message" itself we join the `args` back into a string with spaces:
    let member = message.author;
    let perms = member.permissions;

    const serverDefault = {
        prefix: "u!",
        modlogChannel: "mod-log",
        modRole: "Moderator",
        adminRole: "Administrator",
        ownerRole: "Owner",
        welcomeChannel: "welcome",
        welcomeEn: "false",
        welcomeMessage: "Welcome to the server {{user}}, We hope you enjoy your stay here!"
      }
    const guildConf = client.settings.ensure(message.guild.id, serverDefault);


    let is_staff = message.member.roles.some(role => role.name === ownerRole);

   if (is_staff === false) return message.channel.send({embed: {
            title: ":x:",
            color: 3447003,
            description: "Sorry, you don\'t have permission to use this!"
        }});


    const sayMessage = args.join(' ');

    if (!sayMessage)
        return message.channel.send({embed: {
                title: ":information_source:",
                color: 3447003,
                description: "Please enter a message for the bot to say!"
            }});


    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.

   // message.delete().catch(O_o => {});

    // And we get the bot to say the thing:
    message.channel.send({embed: {
            color: 3447003,
            description: sayMessage
}})};