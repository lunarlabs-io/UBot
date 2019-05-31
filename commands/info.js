exports.run = (client, message, args) => {
    message.channel.send({embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "What is UBot?",
            description: "UBot is a bot that has mostly moderation commands.",
            fields: [{
                name: "Who made UBot?",
                value: "Uni#0001 is the creator of UBot. DM them if you have any questions or concerns"
            },
                {
                    name: "What are the commands?",
                    value: "Use the command u!help for the commands."
                },
                {
                    name: "What is UBot's coding library?",
                    value: "UBot was coded using discord.js."
                },
                {
                    name: "Why does the bot have so few commands? (Old FAQ)",
                    value: "UBot was just recently created as of now (9/6/2018), but Uni is constantly improving it and adding new commands every so often."
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "Command handled by UBot"
            }
        }
    })};