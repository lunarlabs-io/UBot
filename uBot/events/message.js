exports.run = async (msg) => {

  if (msg.author.bot) return;

  if (msg.content.startsWith("<@"+ msg.client.user.id +">") && !msg.content.split(" ").slice(1).join(" ")) {
    msg.channel.send(":wave: | Heya, my name is uBot.\nFor help, use `@uBot help`\nFor info, use `@uBot info`");
  }
};
