const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("support")
    .setDescription("Returns the support embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get("989497510341005373");

    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | Support System",
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription(
        "Any questions or issues regarding our products? Select one of the following categories below."
      )
      .addFields([
        {
          name: "What do I do after opening a ticket?",
          value:
            "- Make sure to use the provided format.\n- Include as much information as possible.\n- Follow our [Tickets Rules](https://discord.com/channels/885392997162823681/989470133728731166).",
        },
      ])
      .setImage("https://i.postimg.cc/7ZVbCB7G/jxsupport.png")
      .setFooter({
        text: "Note: tickets will be closed after 24h of inactivity.",
      });

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("product")
        .setLabel("General Support")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("ordering")
        .setLabel("Product Ordering")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("question")
        .setLabel("General Questions")
        .setStyle(ButtonStyle.Secondary)
    );

    await channel.send({
      embeds: [embed],
      components: [row],
    });
    await interaction.reply({
      content: `Successfully sent the support embed. ${channel}`,
    });
  },
};
