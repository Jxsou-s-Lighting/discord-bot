const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("notice")
    .setDescription("Returns the notice embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.boosterID);

    const embed = new EmbedBuilder().setDescription(
      "Booster perks are not available at the moment. Please come back later."
    );

    await channel.send({
      embeds: [embed],
    });
    await interaction.reply({
      content: `Successfully sent the notice embed. ${channel}`,
    });
  },
};
