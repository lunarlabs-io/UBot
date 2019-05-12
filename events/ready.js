module.exports = (client, message) => {
    client.user.setPresence({
        game: {
            name: '100+ users in 8+ servers.',
            type: 'WATCHING'
        },
        status: 'online'
    });
    console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
};