exports.run = (client, message, args) => {
    var Discord = require('discord.js');
    let member = message.author;
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
    } else {
        botown = 'No.'
    }
    let member_id = message.member.id;

    let embed = new Discord.RichEmbed()
        .setColor("#000FFF")
        .setThumbnail(info.avatarURL)
        .addField("Username", message.author.username)
        .addField("Discriminator", info.discriminator)
        .addField("ID", member.id)
        .addField("Nickname", message.member.displayName)
        .addField('Roles', roles, false)
        .addField('Is UBot owner', botown)
        .setFooter("Command handled by UBot.");
    message.channel.send(embed);
}