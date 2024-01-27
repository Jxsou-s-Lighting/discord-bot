const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const config = require("../../../config.json");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isButton()) return;

    if (interaction.customId === "verification") {
      const member = interaction.member;

      const { roles, channels, links } = config.ids;

      try {
        await member.roles.remove(roles.unverifiedID);

        await member.roles.add(roles.memberID);

        const welcomeChannel = await client.channels.fetch(channels.welcomeID);

        const embed = {
          author: {
            name: member.user.tag,
            icon_url: member.user.displayAvatarURL({ dynamic: true }),
          },
          title: "Welcome to Jxsou's Lighting!",
          description: `Please check out our [Rules and Info](${links.rulesLink}) as well as our [Product List](${links.productLink}).`,
          image: {
            url: "https://i.postimg.cc/T3X5sYQk/welcome.png",
          },
        };

        const row = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setURL("https://jxsou.lighting/roblox")
            .setLabel("Roblox Group")
            .setStyle(ButtonStyle.Link),
          new ButtonBuilder().setURL("https://jxsou.lighting/hub").setLabel("Product Hub").setStyle(ButtonStyle.Link)
        );

        welcomeChannel.send({
          embeds: [embed],
          components: [row],
          content: `${member}`,
        });

        interaction.reply({ content: "You have been verified.", ephemeral: true });
      } catch (error) {
        console.error("Error during verification:", error);
        interaction.reply({ content: "Error during verification process.", ephemeral: true });
      }
    }
  },
};
