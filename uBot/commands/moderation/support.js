    const Discord = require("discord.js");
    const { Command } = require("discord.js-commando");
    const { RichEmbed } = require("discord.js");

    class SupportCommand extends Command {
    constructor(client) {
        super(client, {
        name: "support",
        aliases: ['server'],
        group: "misc",
        memberName: "support",
        description: "Use this command to get an invite link for the support server.",
        ownerOnly: false,
        guildOnly: false

        });
    }
    async run(msg) {
    const embed = new Discord.RichEmbed()
        .setColor("#000FFF")
        .addField(":information_source:", "To join the support server, go to https://discord.gg/ABDxVtF");
    msg.channel.send(embed);
    }}
    
    module.export = SupportCommand;