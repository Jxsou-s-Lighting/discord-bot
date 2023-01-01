const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    if (interaction.customId == "verification") {
      let channel = interaction.guild.channels.cache.get(ids.channels.welcomeID);

      await interaction.member.roles.remove(ids.roles.unverifiedID);
      await interaction.member.roles.add(ids.roles.memberID);

      interaction.reply({
        content: "You have been verified.",
        ephemeral: true,
      });

      const embed = new EmbedBuilder()
        .setAuthor({
          name: `${interaction.member.user.tag}`,
          iconURL: `${interaction.member.user.displayAvatarURL({ forceStatic: false })}`,
        })
        .setTitle("Welcome to Jxsou's Lighting!")
        .setDescription(
          `Please check out our [Rules and Info](${ids.links.rulesLink}) as well as our [Product List](${ids.links.productLink}).`
        )
        .setImage("https://i.postimg.cc/xdwpgQ3x/welcome.png");

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

      await channel.send({ content: `${interaction.member}`, embeds: [embed], components: [row] });
    }
  },
};
