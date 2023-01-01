const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
} = require("discord.js");

const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roles")
    .setDescription("Returns the roles embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.rolesID);

    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | Roles System",
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription("You can select the role(s) that you want to be notified about.")
      .addFields(
        {
          name: "1 - Giveaway Announcements",
          value: "Be notified about giveaways that we host sometimes.",
        },
        {
          name: "2 - Development Announcements",
          value: "Be notified about development of upcoming products.",
        },
        {
          name: "3 - Outage Announcements",
          value: "Be notified about ongoing outages of our services.",
        },
        {
          name: "4 - Event Announcements",
          value: "Be notified about events that we or our partners host.",
        }
      )
      .setImage("https://i.postimg.cc/xTzs5Sx8/roles.png");

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("1").setLabel("1").setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId("2").setLabel("2").setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId("3").setLabel("3").setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId("4").setLabel("4").setStyle(ButtonStyle.Secondary)
    );

    await channel.send({
      embeds: [embed],
      components: [row],
    });
    await interaction.reply({
      content: `Successfully sent the roles embed. ${channel}`,
    });
  },
};
