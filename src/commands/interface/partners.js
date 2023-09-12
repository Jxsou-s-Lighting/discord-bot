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
      .setURL("https://discord.gg/saturnlive")
      .setTitle("Saturn Live")
      .setDescription(
        "**Founder**: <@284064014420672513>\nSaturn Live is a Roblox concert event group hosting your favorite artist and festivals.\n**Invite**: https://discord.gg/saturnlive"
      )
      .setImage("https://i.postimg.cc/QNwKTCqH/saturn-live.png");

    const xrave = new EmbedBuilder()
      .setURL("https://discord.gg/pB242dxYzp")
      .setTitle("X-Rave Productions")
      .setDescription(
        "**Founder**: <@781148506919796767>\nWe love to help out the community by giving back! We offer high end products, free of cost.\n**Invite**: https://discord.gg/pB242dxYzp"
      )
      .setImage("https://i.postimg.cc/DyG5N8fX/x-raves-productions.png");

    await channel.send({
      embeds: [saturn, xrave],
    });
    await interaction.reply({
      content: `Successfully sent the partners embed. ${channel}`,
    });
  },
};
