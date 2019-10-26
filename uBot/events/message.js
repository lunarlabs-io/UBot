exports.run = async (msg) => {

  if (msg.author.bot) return;

  if (msg.content.startsWith("<@"+ msg.client.user.id +">") && !msg.content.split(" ").slice(1).join(" ") || (msg.content.startsWith("<@!"+ msg.client.user.id +">") && !msg.content.split(" ").slice(1).join(" "))) {
    msg.channel.send(":wave: | Heya, my name is UBot.\nFor help, use `@UBot help`\nFor info, use `@UBot info`");
  }
}
