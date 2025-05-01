const { ids } = require("../../../config.json");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  async execute(member) {
    const welcomeChannel = member.guild.channels.cache.get(ids.channels.welcomeID);

    try {
      const welcomeEmbed = new EmbedBuilder()
        .setAuthor({
          name: member.user.tag,
          iconURL: member.user.displayAvatarURL({ dynamic: true }),
        })
        .setTitle("Welcome to Jxsou's Lighting!")
        .setDescription(
          `Please check out our [Rules and Info](${ids.links.rulesLink}) as well as our [Product List](${ids.links.productLink}).`
        )
        .setImage("https://i.postimg.cc/T3X5sYQk/welcome.png");

      const actionRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setURL("https://jxsou.lighting/roblox")
          .setLabel("Roblox Group")
          .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
          .setURL("https://jxsou.lighting/hub")
          .setLabel("Product Hub")
          .setStyle(ButtonStyle.Link)
      );

      await welcomeChannel.send({
        content: `${member}`,
        embeds: [welcomeEmbed],
        components: [actionRow],
      });
    } catch (error) {
      console.error(`Failed to send welcome embed from member: ${member.user.tag}:`, error);
    }
  },
};
