exports.run = (client, message, args) => {
    var Discord = require('discord.js');
    if(message.mentions.members.size === 1){
        info = message.mentions.members.first().user
    }if(message.mentions.members.size === 0){
        info = message.author
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send({embed: {
            color: 3447003,
            description: "Couldn\'t find specific user!"
        }});
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setThumbnail(info.avatarURL)
        .setColor("#15f153")
        .addField("User who was reported", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported by user", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel the user was reported in", message.channel)
        .addField("Time the user was reported at", message.createdAt)
        .addField("Reason of report", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

};