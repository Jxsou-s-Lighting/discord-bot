const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("website").setDescription("Returns the website link."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | Website",
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription("Click the button below to visit our website.")
      .setTimestamp(Date.now());

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setURL("https://jxsou.lighting").setLabel("Website").setStyle(ButtonStyle.Link)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};
