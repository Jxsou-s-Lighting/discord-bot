const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("help").setDescription("Returns a list of commands that you can use."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | Help",
        iconURL: client.user.displayAvatarURL(),
      })
      .addFields({
        name: "General Commands",
        value: "/help\n/hub\n/website\n/ping\n/demo\n/paypal\n/membercount",
      })
      .setTimestamp(Date.now());
    await interaction.reply({
      embeds: [embed],
    });
  },
};
