exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  let info;
  if (message.mentions.members.size === 1) {
    info = message.mentions.members.first().user;
  } if (message.mentions.members.size === 0) {
    info = message.author;
  }
  const rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!rUser) return message.channel.send({embed: {
    color: 3447003,
    description: "Couldn't find specific user!"
  }});
  const rreason = args.join(" ").slice(22);

  const reportEmbed = new Discord.RichEmbed()
    .setDescription("A user was reported!")
    .setThumbnail(info.avatarURL)
    .setColor("#15f153")
    .addField("User who was reported", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported by user", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel the user was reported in", message.channel)
    .addField("Time the user was reported at", message.createdAt)
    .addField("Reason of report", rreason);

  const reportschannel = message.guild.channels.find("name", guildConf.modlogChannel);
  if (!reportschannel) return message.channel.send("Couldn't find mod-log channel.");


  message.delete().catch(()=>{});
  reportschannel.send(reportEmbed);

};