exports.run = async (guild, oldMember, newMember) => {
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
    if (newMember.roles.find("id", value.id) == null) {
      change = Changes.removedRole;
      removedRole = value.name;
    }
  });

  //check if roles were added
  var addedRole = "";
  newMember.roles.every(function(value) {
    if (oldMember.roles.find("id", value.id) == null) {
      change = Changes.addedRole;
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
        log.send("**[User Update]** " + newMember);
        break;
      case Changes.addedRole:
        log.send("**[User Role Added]** " + newMember + ": " + addedRole);
        break;
      case Changes.removedRole:
        log.send("**[User Role Removed]** " + newMember + ": " + removedRole);
        break;
      case Changes.username:
        log.send("**[User Username Changed]** " + newMember + ": Username changed from " +
                    oldMember.user.username + "#" + oldMember.user.discriminator + " to " +
                    newMember.user.username + "#" + newMember.user.discriminator);
        break;
      case Changes.nickname:
        log.send("**[User Nickname Changed]** " + newMember + ": " +
                    (oldMember.nickname != null ? "Changed nickname from " + oldMember.nickname +
                        + newMember.nickname : "Set nickname") + " to " +
                    (newMember.nickname != null ? newMember.nickname + "." : "original username."));
        break;
      case Changes.avatar:
        log.send("**[User Avatar Changed]** " + newMember);
        break;
    }
  }
}
  