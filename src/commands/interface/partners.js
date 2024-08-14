const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("partners")
    .setDescription("Returns the partners embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.partnersID);

    const saturn = new EmbedBuilder()
      .setURL("https://discord.gg/saturn-live-1023640084442005614")
      .setTitle("Saturn Live")
      .setDescription(
        "**Founder**: <@284064014420672513>\nSaturn Live is an event group hosting your favorite artists and festivals on Roblox.\n**[Server Link](https://discord.gg/saturn-live-1023640084442005614)**"
      )
      .setImage("https://i.postimg.cc/1z93Z8kz/saturn-live.png");

    const xtreme = new EmbedBuilder()
      .setURL("https://discord.gg/h8YUqsSMcg")
      .setTitle("XtremeFX")
      .setDescription(
        "**Founder**: <@886733621417873428>\nWe love to help out the community by giving back! We offer high end products, free of cost.\n**[Server Link](https://discord.gg/h8YUqsSMcg)**"
      )
      .setImage("https://i.postimg.cc/8kMDMyPT/xtremefx.png");

    await channel.send({
      embeds: [saturn, xtreme],
    });
    await interaction.reply({
      content: `Successfully sent the partners embed. ${channel}`,
    });
  },
};
