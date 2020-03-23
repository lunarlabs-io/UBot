const commando  = require('discord.js-commando');

module.exports = class stats extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'stats',
			group: 'util',
			memberName: 'stats',
			description: 'Gets the stats of the bot',
			examples: ['stats']

			
		});
	}

	async run(msg) {
        const promises = [
            this.client.shard.fetchClientValues('guilds.size'),
            this.client.shard.broadcastEval('this.guilds.reduce((prev, guild) => prev + guild.memberCount, 0)'),
        ];
        
        Promise.all(promises)
            .then(results => {
                const totalGuilds = results[0].reduce((prev, guildCount) => prev + guildCount, 0);
                const totalMembers = results[1].reduce((prev, memberCount) => prev + memberCount, 0);
                return msg.channel.send(`Server count: ${totalGuilds}\nMember count: ${totalMembers}`);
            })
            .catch(console.error);
        }
};