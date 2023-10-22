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
    .setName("support")
    .setDescription("Returns the support embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.supportID);

    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | Support",
        iconURL: client.user.displayAvatarURL(),
      })
      .setTitle("Support")
      .setDescription(
        "If you have any inquiries or issues related to our products, open a ticket and we will assist you shortly."
      )
      .addFields([
        {
          name: "What do I do after opening a ticket?",
          value: `- Make sure to use the provided format.\n- Include as much information as possible.\n- Follow our [Tickets Rules](${ids.links.rulesLink}).`,
        },
      ])
      .setImage("https://i.postimg.cc/zDCjpBCf/support.png")
      .setFooter({
        text: "Tickets will be closed after 24h of inactivity.",
      });

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("support").setLabel("General Support").setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId("ordering").setLabel("Product Ordering").setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId("question").setLabel("General Questions").setStyle(ButtonStyle.Secondary)
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
