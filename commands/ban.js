exports.run = async (client, message, args) => {
    var Discord = require('discord.js');
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    let msgsender = message.author;
    let perms = msgsender.permissions;
    let member = message.mentions.users.first();

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

    // Check if a member has a specific permission on the guild!
    let has_ban = message.member.roles.some(role => role.name === guildConf.adminRole);
    let mentionedmember = message.mentions.members.first();

    if (has_ban === false) return message.channel.send({embed: {
            title: ":x:",
            color: 3447003,
            description: "Sorry, you don\'t have permission to use this!"
        }});

    if (has_ban === true)
        if (!mentionedmember)
        return message.channel.send({embed: {
                title: ":information_source:",
                color: 3447003,
                description: "Please mention a valid user!"
            }});
    if (mentionedmember.bannable) {
    let reason = args.slice(1).join(' ');
    if (!reason)
        return message.channel.send({embed: {
                color: 3447003,
                description: "Please indicate a reason for the ban!"
            }});
    if (mentionedmember) {
        await mentionedmember.ban(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.channel.send({embed: {
                color: 3447003,
                title: ":white_check_mark:",
                description: "User has been banned!",
                footer: "Command handled by UBot | Command initiated by ${message.author}"
        }});
        let incidentschannel = message.guild.channels.find(`name`, "incidents");
        if(!incidentschannel) return message.channel.send("Couldn't find incidents channel.");
        if (incidentschannel) {
            let banEmbed = new Discord.RichEmbed()
                .setDescription("A user has been banned")
                .setThumbnail(mentionedmember.avatarURL)
                .setColor("#15f153")
                .addField("User who was banned", `${mentionedmember} with ID: ${mentionedmember.id}`)
                .addField("Banned by user", `${message.author} with ID: ${message.author.id}`)
                .addField("Time the user was banned at", message.createdAt)
                .addField("Reason of ban", reason);
                incidentschannel.send(banEmbed);
        }
    }}}