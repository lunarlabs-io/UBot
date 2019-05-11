exports.run = async (client, message, args) => {
    // This command removes all messages from all users in the channel, up to 100.

    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
        message.channel.send({embed: {
                color: 3447003,
                description: "Please provide a number between 2 and 100 for the number of messages to delete!"
            }});
    return message.reply('');

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({
        count: deleteCount,
    });
    message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
};