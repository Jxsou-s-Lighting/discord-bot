const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("booster")
    .setDescription("Returns the booster embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.boosterID);

    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | Booster Perks",
        iconURL: client.user.displayAvatarURL(),
      })
      .setTitle("Booster Perks")
      .setDescription("All of the rewards that you will get when boosting are listed below.")
      .setImage("https://i.postimg.cc/sXv7PHD7/booster-perks.png")
      .setFooter({
        text: "Note: all of these perks are not going to be revoked if your boost expires.",
      });

    await channel.send({
      embeds: [embed],
    });
    await interaction.reply({
      content: `Successfully sent the booster embed. ${channel}`,
    });
  },
};
