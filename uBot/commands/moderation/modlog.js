const { stripIndents, oneLine } = require('common-tags');
const { Command } = require("discord.js-commando");

module.exports = class LogCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'modlog',
			group: 'moderation',
			memberName: 'modlog',
			description: 'Shows or sets the command prefix.',
			args: [
				{
					key: 'log',
					prompt: 'What would you like to set the logging channel to? You must begin it with a # and directly mention it.',
					type: 'channel',
					max: 15,
					default: ''
				}
			]
		});
	}

	async run(msg, args) {
		// Just output the prefix
		if(!args.log) {
			var sql = `SELECT logID FROM serversettings WHERE serverID = ${msg.guild.id};`
			global.con.query(sql, function (err, result) {
				if (err) throw err;
				console.log();
			const logChan = result[0].logID
			return msg.reply("The modlog channel is: " + logChan)
		});
		}

		// Check the user's permission before changing anything
		if(msg.guild || args.log != null) {
			if(!msg.member.hasPermission('ADMINISTRATOR') && !this.client.isOwner(msg.author)) {
				return msg.reply('Only administrators may change the logging channel.');
			}
		}

		// Save the log channel
		let response;
		if(!args.log) {
		if(args.log === 'default') {
			var sql_def = `UPDATE serversettings SET log = '' WHERE serverID = '${msg.guild.id}';`
		} 
	} else {
			if(args.log || msg.guild) {
				var chan = msg.guild.channels.find(c => c.name === args.log.name)
				var channel_name = chan.name
				console.log(channel_name)
                var sql_upd = `UPDATE serversettings SET logID = '${channel_name}' WHERE serverID = '${msg.guild.id}';`
                global.con.query(sql_upd, function (err, result) {
                    if (err) throw err;
                    console.log("[Logs] Server logchannel changed!");
				  });
				  msg.channel.send("Channel set to: " + args.log)
            }
		}
	}
};
