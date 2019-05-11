exports.run = async (client, message, args) => {
    var Discord = require('discord.js');
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    let member = message.author;
    let perms = member.permissions;

    let has_kick = message.member.roles.some(role => role.name === "UBot Staff");

    if (has_kick === false) return message.channel.send({embed: {
            title: ":x:",
            color: 3447003,
            description: "Sorry, you don\'t have permission to use this!"
        }});

    if (has_kick === true) {

        let mentionedmember = message.mentions.members.first();
        // Let's first check if we have a member and if we can kick them!
        // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
        if (!message.mentions.users.first())
            return message.channel.send({embed: {
                    title: ":x:",
                    color: 3447003,
                    description: "Please mention a valid member!"
                }});

        // slice(1) removes the first part, which here should be the user mention!
        let reason = args.slice(1).join(' ');
        if (!reason)
            return message.channel.send({embed: {
                    title: ":information_source:",
                    color: 3447003,
                    description: "Please say a reason for the kick!"
                }});

        // Now, time for a swift kick in the nuts!
        await mentionedmember.kick(reason)
            .catch(error => message.channel.send({embed: {
                    color: 3447003,
                    title: ":x:",
                    description: "I couldn't kick the aforementioned user because of an error!"
                }}));
        message.channel.send({embed: {
                title: ":white_check_mark:",
                color: 3447003,
                description: "User has been kicked!"
            }})}};