
const { Command } = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class DiceCommand extends Command {
    constructor(client) {
        super(client, {
            name:"dice",
            aliases: ["roll"],
            group: 'fun',
            memberName: 'dice',
            description: 'roll a dice',
            args: [
                {
                    type:"integer",
                    prompt:"how many sides does the dice have??",
                    key:"sides",
                    min: 2
                }
            ]
        })
    }
    run(msg, { sides }) {
        let dice = Math.floor(Math.random() * sides) + 1;
        const avatar = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`You rolled a:  ${dice}`)
        .setFooter("Command handled by UBot");
        msg.channel.send(avatar);
    
    }
}