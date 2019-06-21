exports.run = async (client, message, args) => {
    var Discord = require('discord.js');
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

        await mentionedmember.kick(reason)
        message.channel.send({embed: {
                title: ":white_check_mark:",
                color: 3447003,
                description: "User has been kicked!"
            }});
        let incidentschannel = message.guild.channels.find(`name`, "incidents");
        if(!incidentschannel) return message.channel.send("Couldn't find incidents channel.");
        if (incidentschannel) {
            let kickEmbed = new Discord.RichEmbed()
                .setDescription("A user has been kicked")
                .setThumbnail(mentionedmember.avatarURL)
                .setColor("#15f153")
                .addField("User who was kicked", `${mentionedmember} with ID: ${mentionedmember.id}`)
                .addField("Kicked by user", `${message.author} with ID: ${message.author.id}`)
                .addField("Time the user was kicked at", message.createdAt)
                .addField("Reason of kick", reason);
            incidentschannel.send(kickEmbed)
            .catch(error => message.channel.send({embed: {
                    color: 3447003,
                    title: ":x:",
                    description: "I couldn't kick the aforementioned user because of an error!"
                }}));
        }}};