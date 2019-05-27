exports.run = (client, message, args) => {
    return message.channel.send({embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "This is the help command for UBot",
            description: "Here you will be able to see all the commands and what they do.",
            fields: [{
                name: "Moderation",
                value: "u!ban - Lets you ban a user. \n u!kick - lets you kick a user. \n u!report - Report a user."
            },
                {
                    name: "Misc",
                    value: "u!ping - Lets you check the bot's latency. \n u!sinfo - Check server information. \n u!uinfo - Shows info about the sender"
                },
                {
                    name: "Message Manipulation",
                    value: "u!purge - Lets you purge messages."
                },
                {
                    name: "Images",
                    value: "u!avatar - This command shows the sender's avatar."
                },
                {
                    name: "Furry",
                    value: "u!yiff - Coming soon. \n u!awoo - DON'T DO THAT! WHATEVER YOU DO!"
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "Command handled by UBot"
            }
        }
    })};