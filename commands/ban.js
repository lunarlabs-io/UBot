exports.run = async (client, message, args) => {
    var Discord = require('discord.js');
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    let msgsender = message.author;
    let perms = msgsender.permissions;
    let member = message.mentions.users.first();

    // Check if a member has a specific permission on the guild!
    let has_ban = message.member.roles.some(role => role.name === "UBot Staff");
    let mentionedmember = message.mentions.members.first();

    if (has_ban === false) return message.channel.send({embed: {
            title: ":x:",
            color: 3447003,
            description: "Sorry, you don\'t have permission to use this!"
        }});

    if (has_ban === true)
        if (!message.mentions.members.first)
        return message.channel.send({embed: {
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
        }})}}}