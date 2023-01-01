const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("hub").setDescription("Returns the product hub link."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | Product Hub",
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription("Click the button below to purchase our products.")
      .setTimestamp(Date.now());

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setURL("https://jxsou.lighting/hub")
        .setLabel("Product Hub")
        .setStyle(ButtonStyle.Link)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};
