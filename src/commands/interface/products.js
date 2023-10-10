const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("products")
    .setDescription("Returns the products embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.productsID);

    const ledCubesEmbed = new EmbedBuilder()
      .setTitle("Product | LED Cubes")
      .setDescription(
        "Price: <:robux:1056105131789258822> 50 Robux | <:paypal:1056105041695621160> $0.75 USD"
      )
      .setImage("https://i.postimg.cc/025xJY72/led-cubes.png");

    const washesEmbed = new EmbedBuilder()
      .setTitle("Product | Washes")
      .setDescription(
        "Price: <:robux:1056105131789258822> 200 Robux | <:paypal:1056105041695621160> $2.25 USD"
      )
      .setImage("https://i.postimg.cc/cHMyvCHn/washes.png");

    const strobesEmbed = new EmbedBuilder()
      .setTitle("Product | Strobes")
      .setDescription(
        "Price: <:robux:1056105131789258822> 100 Robux | <:paypal:1056105041695621160> $1.25 USD"
      )
      .setImage("https://i.postimg.cc/jqcYKDBV/strobes.png");

    const magicPanelsEmbed = new EmbedBuilder()
      .setTitle("Product | Magic Panels")
      .setDescription(
        "Price: <:robux:1056105131789258822> 175 Robux | <:paypal:1056105041695621160> $2.00 USD"
      )
      .setImage("https://i.postimg.cc/zG61M46V/magic-panels.png");

    const blindersEmbed = new EmbedBuilder()
      .setTitle("Product | Blinders")
      .setDescription(
        "Price: <:robux:1056105131789258822> 75 Robux | <:paypal:1056105041695621160> $1.00 USD"
      )
      .setImage("https://i.postimg.cc/G3yT51fs/blinders.png");

    const jdc1Embed = new EmbedBuilder()
      .setTitle("Product | JDC1")
      .setDescription(
        "Price: <:robux:1056105131789258822> 175 Robux | <:paypal:1056105041695621160> $2.00 USD"
      )
      .setImage("https://i.postimg.cc/yYWv2274/jdc1.png");

    const ledBarsEmbed = new EmbedBuilder()
      .setTitle("Product | LED Bars")
      .setDescription(
        "Price: <:robux:1056105131789258822> 150 Robux | <:paypal:1056105041695621160> $1.75 USD"
      )
      .setImage("https://i.postimg.cc/sXk78Hmy/led-bars.png");

    const followSpotlightsEmbed = new EmbedBuilder()
      .setTitle("Product | Follow Spotlights")
      .setDescription(
        "Price: <:robux:1056105131789258822> 50 Robux | <:paypal:1056105041695621160> $0.75 USD"
      )
      .setImage("https://i.postimg.cc/gkC4yB8L/follow-spotlights.png");

    await channel.send({
      embeds: [
        ledCubesEmbed,
        washesEmbed,
        strobesEmbed,
        magicPanelsEmbed,
        blindersEmbed,
        jdc1Embed,
        ledBarsEmbed,
        followSpotlightsEmbed,
      ],
    });
    await interaction.reply({
      content: `Successfully sent the products embed. ${channel}`,
    });
  },
};
