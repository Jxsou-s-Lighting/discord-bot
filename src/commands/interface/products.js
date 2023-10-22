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
      .setColor(0x2b2d31)
      .setTitle("LED Cubes")
      .setDescription("Price: <:robux:1056105131789258822> 50 Robux | <:paypal:1056105041695621160> $0.75 USD")
      .setImage("https://i.postimg.cc/DywQ7cX9/led-cubes.png");

    const strobesEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Strobes")
      .setDescription("Price: <:robux:1056105131789258822> 100 Robux | <:paypal:1056105041695621160> $1.25 USD")
      .setImage("https://i.postimg.cc/PxHZ9bHF/strobes.png");

    const washesEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Washes")
      .setDescription("Price: <:robux:1056105131789258822> 200 Robux | <:paypal:1056105041695621160> $2.50 USD")
      .setImage("https://i.postimg.cc/76N7kCYP/washes.png");

    const magicPanelsEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Magic Panels")
      .setDescription("Price: <:robux:1056105131789258822> 175 Robux | <:paypal:1056105041695621160> $2.25 USD")
      .setImage("https://i.postimg.cc/52HwCNpp/magic-panels.png");

    const blindersEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Blinders")
      .setDescription("Price: <:robux:1056105131789258822> 75 Robux | <:paypal:1056105041695621160> $1.00 USD")
      .setImage("https://i.postimg.cc/tTGtyQ3k/blinders.png");

    const jdc1Embed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("JDC1")
      .setDescription("Price: <:robux:1056105131789258822> 175 Robux | <:paypal:1056105041695621160> $2.25 USD")
      .setImage("https://i.postimg.cc/HnpwcwP7/jdc1.png");

    const ledBarsEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("LED Bars")
      .setDescription("Price: <:robux:1056105131789258822> 150 Robux | <:paypal:1056105041695621160> $2.00 USD")
      .setImage("https://i.postimg.cc/RhXccWjp/led-bars.png");

    const followSpotlightsEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Follow Spotlights")
      .setDescription("Price: <:robux:1056105131789258822> 50 Robux | <:paypal:1056105041695621160> $0.75 USD")
      .setImage("https://i.postimg.cc/W3mm1WSv/follow-spotlights.png");

    await channel.send({
      embeds: [
        ledCubesEmbed,
        strobesEmbed,
        washesEmbed,
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
