const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder().setName("paypal").setDescription("Returns the PayPal link."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | PayPal",
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription(`Please open an [ordering ticket](${ids.links.supportLink}) before purchasing.`)
      .setTimestamp(Date.now());

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setURL("https://paypal.me/josou10")
        .setLabel("PayPal Link")
        .setStyle(ButtonStyle.Link)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};
