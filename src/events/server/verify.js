const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.customId === "verification") {
      const verified = await interaction.guild.roles.cache.get(ids.roles.memberID);
      interaction.member.roles.add(verified);

      const unverified = await interaction.guild.roles.cache.get(ids.roles.unverifiedID);
      interaction.member.roles.remove(unverified);

      await interaction.reply({ content: "You have been verified.", ephemeral: true });

      const channel = await interaction.member.guild.channels.cache.get(ids.channels.welcomeID);

      const embed = new EmbedBuilder()
        .setAuthor({
          name: interaction.member.user.tag,
          iconURL: interaction.member.user.displayAvatarURL({ dynamic: true }),
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
        new ButtonBuilder()
          .setURL("https://jxsou.lighting/hub")
          .setLabel("Product Hub")
          .setStyle(ButtonStyle.Link)
      );

      channel.send({
        content: interaction.member.toString(),
        embeds: [embed],
        components: [row],
      });
    }
  },
};
