exports.run = (client, message, args) => {
    var Discord = require('discord.js');
    if(message.mentions.members.size === 1){
        info = message.mentions.members.first().user
    }if(message.mentions.members.size === 0){
        info = message.author
    }
    let roles = message.guild.members.get(info.id).roles.map(r => r.toString()).slice(1).join(' **|** ');
    if(roles === ''){
        roles = 'None'
    }
    let nitro = info.premium
    if(message.author.id === '251788826232619008'){
        botown = 'Yes.'
    }if(message.author.id =! '251788826232619008'){
        botown = 'No.'
    }
    let embed = new Discord.RichEmbed()
        .setColor("#000FFF")
        .setThumbnail(info.avatarURL)
        .addField("Username", info.username)
        .addField("Discriminator", info.discriminator)
        .addField("ID", info.id)
        .addField("Nickname", info.displayName)
        .addField('Roles', roles, false)
        .addField('Is UBot owner', botown)
        .setFooter("Command handled by UBot.");
    message.channel.send(embed);
}