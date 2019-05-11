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
                value: "ubot!ban - Lets you ban a user. \n ubot!kick - lets you kick a user. \n ubot!report - Report a user."
            },
                {
                    name: "Misc",
                    value: "ubot!ping - Lets you check the bot's latency. \n ubot!sinfo - Check server information. \n ubot!uinfo - Shows info about the sender"
                },
                {
                    name: "Message Manipulation",
                    value: "ubot!purge - Lets you purge messages."
                },
                {
                    name: "Images",
                    value: "ubot!avatar - This command shows the sender's avatar."
                },
                {
                    name: "Furry",
                    value: "ubot!yiff - Coming soon. \n ubot!awoo - DON'T DO THAT! WHATEVER YOU DO!"
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "UBot"
            }
        }
    })};