const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("products")
    .setDescription("Returns the products embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get("989497487859531826");

    const ledBarsEmbed = new EmbedBuilder()
      .setTitle("Product | LED Bars")
      .addFields({
        name: "Description",
        value:
          "The GLP Impression X4 Bar 20 is a powerful light that provides multiple lighting effects. The LED Bar has 20 LEDs, multiple types of colors, adjustable beam length and is able to tilt.",
      })
      .setImage("https://i.postimg.cc/MTv0S3zS/led-bars.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Price: 150 Robux | $2.00 USD",
      });

    const blindersEmbed = new EmbedBuilder()
      .setTitle("Product | Blinders")
      .addFields({
        name: "Description",
        value:
          "The Elation CUEPIX Blinder WW2 and WW4 fixtures are used to illuminate both big indoor or outdoor open spaces by using a high intensity light with controllable brightness.",
      })
      .setImage("https://i.postimg.cc/fRWnz7wp/blinders.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Price: 75 Robux | $1.00 USD",
      });
    const magicPanelsEmbed = new EmbedBuilder()
      .setTitle("Product | Magic Panels")
      .addFields({
        name: "Description",
        value:
          "The Ayrton MagicPanel FX is comprised of a 5 x 5 array of squared lenses with adjustable beams that can do multiple effects for your events.",
      })
      .setImage("https://i.postimg.cc/JzSq6mdx/magicpanels.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Price: 175 Robux | $2.25 USD",
      });
    const strobesEmbed = new EmbedBuilder()
      .setTitle("Product | Strobes")
      .addFields({
        name: "Description",
        value:
          "Jxsou's Lighting Strobes, with multiple types of colors and effects, are specifically designed for large stages, nightclubs and live events.",
      })
      .setImage("https://i.postimg.cc/K8jqp0cG/strobes.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Price: 100 Robux | $1.25 USD",
      });
    const saiLightEmbed = new EmbedBuilder()
      .setTitle("Product | SAI Light")
      .addFields({
        name: "Description",
        value: "Light that has the shape of a SAI.",
      })
      .setImage("https://i.postimg.cc/Bn7yJd7P/sailight.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Price: 25 Robux | $0.25 USD",
      });
    const ledCubesEmbed = new EmbedBuilder()
      .setTitle("Product | LED Cubes")
      .addFields({
        name: "Description",
        value:
          "Jxsou's Lighting LED Cubes, perfectly designed to bring life to concerts, provide multiple lighting effects.",
      })
      .setImage("https://i.postimg.cc/FsWGS0y2/ledcubes.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Price: 50 Robux | $0.75 USD",
      });
    const washesEmbed = new EmbedBuilder()
      .setTitle("Product | Washes")
      .addFields({
        name: "Description",
        value:
          "Bring life to your stage with Jxsou's Lighting Washes which are perfect for evenly lighting up large areas like stages or nightclubs.",
      })
      .setImage("https://i.postimg.cc/T1HmKqz0/washes.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Price: 200 Robux | $2.50 USD",
      });
    const jdc1Embed = new EmbedBuilder()
      .setTitle("Product | JDC1")
      .addFields({
        name: "Description",
        value:
          "The JDC1 contains a traditional single tube element with an incredible clear, bright white output with a surrounding full face of RGB power.",
      })
      .setImage("https://i.postimg.cc/MTgSMvp8/jdc1s.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Price: 175 Robux | $2.25 USD",
      });

    await channel.send({
      embeds: [
        ledCubesEmbed,
        saiLightEmbed,
        magicPanelsEmbed,
        washesEmbed,
        strobesEmbed,
        jdc1Embed,
        blindersEmbed,
        ledBarsEmbed,
      ],
    });
    await interaction.reply({
      content: `Successfully sent the products embed. ${channel}`,
    });
  },
};
