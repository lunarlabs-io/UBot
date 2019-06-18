exports.run = async (client, message, args) => {
    var Discord = require('discord.js');
    let mentionedmember = message.mentions.users.first();
    let has_staff = message.member.roles.some(role => role.name === "UBot Staff");
    let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if (has_staff === false) return message.channel.send({embed: {
            title: ":x:",
            color: 3447003,
            description: "Sorry, you don\'t have permission to use this!"
        }});

    if (has_staff === true)
        if (!mentionedmember)
            return message.channel.send({embed: {
                    title: ":information_source:",
                    color: 3447003,
                    description: "Please mention a valid user!"
                }});
    if (mentionedmember) {
        let reason = args.slice(1).join(' ');
        if (!reason)
            return message.channel.send({embed: {
                    title: ":information_source:",
                    color: 3447003,
                    description: "Please indicate a reason for the warn!"
                }});
        if (mentionedmember) {
            let warnembed = new Discord.RichEmbed()
                .setDescription("You have been warned!")
                .setThumbnail(mentionedmember.avatarURL)
                .setColor("#15f153")
                .addField("Server you were warned in", message.guild.name)
                .addField("Reason of warn", reason);
            await member.send(warnembed);
            message.channel.send({embed: {
                    color: 3447003,
                    title: ":white_check_mark:",
                    description: "User has been warned!",
                    footer: "Command handled by UBot | Command initiated by ${message.author}"
                }});
            let incidentschannel = message.guild.channels.find(`name`, "incidents");
            if(!incidentschannel) return message.channel.send("Couldn't find incidents channel.");
            if (incidentschannel) {
                let warnEmbed2 = new Discord.RichEmbed()
                    .setDescription("A user has been warned")
                    .setThumbnail(mentionedmember.avatarURL)
                    .setColor("#15f153")
                    .addField("User who was warned", `${mentionedmember} with ID: ${mentionedmember.id}`)
                    .addField("Warned by user", `${message.author} with ID: ${message.author.id}`)
                    .addField("Time the user was warned at", message.createdAt)
                    .addField("Reason of warn", reason);
                incidentschannel.send(warnEmbed2);
            }
        }}}