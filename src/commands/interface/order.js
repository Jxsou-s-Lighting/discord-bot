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
    .setName("order")
    .setDescription("Returns the order embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.orderID);

    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | Ordering",
        iconURL: client.user.displayAvatarURL(),
      })
      .setTitle("Purchasing")
      .setDescription(
        "You can purchase a product via our [Product Hub](https://jxsou.lighting/hub). If you wish to order via [PayPal](https://paypal.me/josou10), create an ordering ticket."
      )
      .addFields([
        {
          name: "How do I use the product that I purchased?",
          value:
            "- Download the file sent by Vendr.\n- Drag and drop the file in Roblox Studio.\n- Follow the instructions inside the product's README file.",
        },
      ])
      .setImage("https://i.postimg.cc/fyx47nS0/ordering.png")
      .setFooter({
        text: "Feel free to contact support if you have any questions about our products.",
      });

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setURL("https://jxsou.lighting/hub")
        .setLabel("Product Hub")
        .setStyle(ButtonStyle.Link),
      new ButtonBuilder()
        .setURL("https://jxsou.lighting/roblox")
        .setLabel("Roblox Group")
        .setStyle(ButtonStyle.Link),
      new ButtonBuilder().setURL(ids.links.supportLink).setLabel("Support").setStyle(ButtonStyle.Link),
      new ButtonBuilder().setURL("https://paypal.me/josou10").setLabel("PayPal").setStyle(ButtonStyle.Link)
    );

    await channel.send({
      embeds: [embed],
      components: [row],
    });
    await interaction.reply({
      content: `Successfully sent the order embed. ${channel}`,
    });
  },
};
