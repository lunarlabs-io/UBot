
const { Command } = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name:"avatar",
            aliases: [""],
            group: 'misc',
            memberName: 'avatar',
            description: 'Sends the avatar of a user ',
            args: [
                {
                    type:"user",
                    prompt:"Which user would you like to get the avatar of?",
                    key:"user",
                    default: msg => msg.author
                }
            ]
        })
    }
    run(msg, { user }) {

        const avatar = new Discord.MessageEmbed()
        .setImage(user.avatarURL({ dynamic: true, size: 4096 }))
        .setColor("RANDOM")
        .addField("Here is the mentioned user's profile picture,", user)
        .setFooter("Command handled by UBot");
        msg.channel.send(avatar);
    
    }
}