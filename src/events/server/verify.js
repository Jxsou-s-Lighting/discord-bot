const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isButton()) return;

    if (interaction.customId === "verification") {
      const member = interaction.member;
      const guild = interaction.guild;

      if (member.roles.cache.has(ids.roles.unverifiedID)) {
        await member.roles.remove(ids.roles.unverifiedID);
      }

      await member.roles.add(ids.roles.memberID);

      await interaction.reply({ content: "You have been verified.", ephemeral: true });

      const channel = guild.channels.cache.get(ids.channels.welcomeID);
      if (channel) {
        const embed = new EmbedBuilder()
          .setAuthor({
            name: interaction.user.tag,
            iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
          })
          .setTitle("Welcome to Jxsou's Lighting!")
          .setDescription(
            `Please check out our [Rules and Info](${ids.links.rulesLink}) as well as our [Product List](${ids.links.productLink}).`
          )
          .setImage("https://i.postimg.cc/T3X5sYQk/welcome.png");

        const row = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setURL("https://jxsou.lighting/roblox")
            .setLabel("Roblox Group")
            .setStyle(ButtonStyle.Link),
          new ButtonBuilder().setURL("https://jxsou.lighting/hub").setLabel("Product Hub").setStyle(ButtonStyle.Link)
        );

        await channel.send({ content: member.toString(), embeds: [embed], components: [row] });
      } else {
        console.log("Verification channel not found or not a text channel.");
      }
    }
  },
};
