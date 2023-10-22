const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("demo").setDescription("Returns the testing place link."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | Testing Place",
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription("Click the button below to try out our products.")
      .setTimestamp(Date.now());

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setURL("https://jxsou.lighting/demo").setLabel("Testing Place").setStyle(ButtonStyle.Link)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};
