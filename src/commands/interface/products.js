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
      .setDescription(
        "Price: <:robux:1056105131789258822> 50 Robux | <:paypal:1056105041695621160> $0.50 USD",
      )
      .setImage("https://i.postimg.cc/tCZBxZQ4/led-cubes.png");

    const strobesEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Strobes")
      .setDescription(
        "Price: <:robux:1056105131789258822> 100 Robux | <:paypal:1056105041695621160> $1.00 USD",
      )
      .setImage("https://i.postimg.cc/mkcyCqn5/strobes.png");

    const washesEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Washes")
      .setDescription(
        "Price: <:robux:1056105131789258822> 200 Robux | <:paypal:1056105041695621160> $2.00 USD",
      )
      .setImage("https://i.postimg.cc/nV5kpFjb/washes.png");

    const magicPanelsEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Magic Panels")
      .setDescription(
        "Price: <:robux:1056105131789258822> 175 Robux | <:paypal:1056105041695621160> $1.75 USD",
      )
      .setImage("https://i.postimg.cc/m2v8NLBN/magic-panels.png");

    const blindersEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Blinders")
      .setDescription(
        "Price: <:robux:1056105131789258822> 75 Robux | <:paypal:1056105041695621160> $0.75 USD",
      )
      .setImage("https://i.postimg.cc/ZR4QPTPD/blinders.png");

    const jdc1Embed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("JDC1")
      .setDescription(
        "Price: <:robux:1056105131789258822> 175 Robux | <:paypal:1056105041695621160> $1.75 USD",
      )
      .setImage("https://i.postimg.cc/XJssw9Yp/jdc1.png");

    const ledBarsEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("LED Bars")
      .setDescription(
        "Price: <:robux:1056105131789258822> 175 Robux | <:paypal:1056105041695621160> $1.75 USD",
      )
      .setImage("https://i.postimg.cc/pr7kSx8v/led-bars.png");

    const followSpotlightsEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Follow Spotlights")
      .setDescription(
        "Price: <:robux:1056105131789258822> 50 Robux | <:paypal:1056105041695621160> $0.50 USD",
      )
      .setImage("https://i.postimg.cc/sx00R7kt/follow-spotlights.png");

    const profileFixturesEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Profile Fixtures")
      .setDescription(
        "Price: <:robux:1056105131789258822> 250 Robux | <:paypal:1056105041695621160> $2.50 USD",
      )
      .setImage("https://i.postimg.cc/SKrdhc8D/profile-fixtures.png");

    const pyrotechnicsEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Pyrotechnics")
      .setDescription(
        "Price: <:robux:1056105131789258822> 100 Robux | <:paypal:1056105041695621160> $1.00 USD",
      )
      .setImage("https://i.postimg.cc/Wbk74BgD/pyrotechnics.png");

    const parsEmbed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setTitle("Pars")
      .setDescription(
        "Price: <:robux:1056105131789258822> 75 Robux | <:paypal:1056105041695621160> $0.75 USD",
      )
      .setImage("https://i.postimg.cc/4NnrD2JQ/pars.png");

    await channel.send({
      embeds: [
        profileFixturesEmbed,
        ledCubesEmbed,
        strobesEmbed,
        washesEmbed,
        magicPanelsEmbed,
        blindersEmbed,
        jdc1Embed,
        ledBarsEmbed,
        parsEmbed,
        followSpotlightsEmbed,
        pyrotechnicsEmbed,
      ],
    });
    await interaction.reply({
      content: `Successfully sent the products embed. ${channel}`,
    });
  },
};
