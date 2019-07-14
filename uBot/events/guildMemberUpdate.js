exports.run = async (oldMember, newMember) => {
  var guild = oldMember.guild;
  //declare changes
  var Changes = {
    unknown: 0,
    addedRole: 1,
    removedRole: 2,
    username: 3,
    nickname: 4,
    avatar: 5
  };
  var change = Changes.unknown;

  //check if roles were removed
  var removedRole = "";
  oldMember.roles.every(function(value) {
    change = removedRole;
    if (newMember.roles.find("id", value.id) == null) {
      removedRole = value.name;
    }
  });

  //check if roles were added
  var addedRole = "";
  newMember.roles.every(function(value) {
    change = Changes.addedRole;
    if (oldMember.roles.find("id", value.id) == null) {
      addedRole = value.name;
    }
  });

  //check if username changed
  if (newMember.user.username != oldMember.user.username)
    change = Changes.username;

  //check if nickname changed
  if (newMember.nickname != oldMember.nickname)
    change = Changes.nickname;

  //check if avatar changed
  if (newMember.user.avatarURL != oldMember.user.avatarURL)
    change = Changes.avatar;

  //log to console
  switch (change) {
    case Changes.unknown:
      console.log("[" + guild.name + "][UPDUSR] " + newMember.user.username + "#" + newMember.user.discriminator);
      break;
    case Changes.addedRole:
      console.log("[" + guild.name + "][ADDROLE] " + newMember.user.username +"#" +  newMember.user.discriminator +
                ": " + addedRole);
      break;
    case Changes.removedRole:
      console.log("[" + guild.name + "][REMROLE] " + newMember.user.username + "#" + newMember.user.discriminator +
                ": " + removedRole);
      break;
    case Changes.username:
      console.log("[" + guild.name + "][UPDUSRNM] " + oldMember.user.username + "#" + oldMember.user.discriminator +
                " is now " + newMember.user.username + "#" + newMember.user.discriminator);
      break;
    case Changes.nickname:
      console.log("[" + guild.name + "][UPDUSRNK] " + newMember.user.username + "#" + newMember.user.discriminator +
                (oldMember.nickname != null ? " (" + oldMember.nickname + ")" : "") +
                (newMember.nickname != null ? " is now " + newMember.nickname : " no longer has a nickname."));
      break;
    case Changes.avatar:
      console.log("[" + guild.name + "][UPDAVT] " + newMember.user.username + "#" + newMember.user.discriminator);
      break;
  }


  //post in the guild's log channel
  var log = guild.channels.find(c => c.name === "ubot-logs");
  if (log != null) {
    switch (change) {
      case Changes.unknown:
        log.send({embed: {
            title: ":information_source: | User update",
            color: 3447003,
            description: newMember.user.username + "#" + newMember.user.discriminator
          }});
        break;
      case Changes.addedRole:
        return
 //       log.send({embed: {
 //           title: ":information_source: | Role added to user",
 //           color: 3447003,
 //           description: oldMember+ " now has the role " + addedRole
 //         }});
        break;
      case Changes.removedRole:
        return
 //       log.send({embed: {
 //           title: ":information_source: | Role removed from user",
 //           color: 3447003,
 //           description: oldMember+ " no longer has the role " + removedRole
 //         }});
        break;
      case Changes.username:
        log.send({embed: {
            title: ":information_source: | User username changed",
            color: 3447003,
            description: oldMember+ " changed their username from " +oldMember.username + "to " + newMember.username
          }});
        break;
      case Changes.nickname:
        if (newMember.nickname != null || oldMember.nickname != null) {
        log.send({embed: {
            title: ":information_source: | User nickname changed",
            color: 3447003,
            description: oldMember+ " changed their nickname from " +oldMember.nickname + " to " + newMember.nickname + "."
          }})};
        break;
      case Changes.avatar:
        log.send("**[User Avatar Changed]** " + newMember);
        break;
    }
  }
}
