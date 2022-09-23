const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "guildMemberUpdate",
  async execute(oldMember, newMember) {
    let channel = newMember.guild.channels.cache.get("885392997611601933");

    const embed = new EmbedBuilder()
      .setAuthor({
        name: `${newMember.user.tag}`,
        iconURL: newMember.user.displayAvatarURL({ dynamic: true }),
      })
      .setTitle(`${newMember.user.tag} has boosted the server!`)
      .setDescription(
        "Thanks for boosting the server! You can get the perks at the [Boosting Perks](https://discord.com/channels/885392997162823681/989484691130298428) channel."
      )
      .setImage("https://i.postimg.cc/YCJDW3H7/jxbooster.png");

    const oldStatus = oldMember.premiumSince;
    const newStatus = newMember.premiumSince;

    if (!oldStatus && newStatus) {
      await channel.send({
        content: `${newMember}`,
        embeds: [embed],
      });
    }
  },
};
