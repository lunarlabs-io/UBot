exports.run = async (client, guild) => {
    client.settings.delete(guild.id);
}
