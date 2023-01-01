const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("partners")
    .setDescription("Returns the partners embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.partnersID);

    const embed = new EmbedBuilder()
      .setColor(0x2f3136)
      .setURL("https://native.lighting")
      .setTitle("Native Lighting")
      .setDescription("**Founder**: <@283399729776164864> | **Invite**: https://discord.gg/native")
      .setImage("https://i.postimg.cc/ZY3brGLK/native.png");

    await channel.send({
      embeds: [embed],
    });
    await channel.send({
      content: "https://discord.gg/native",
    });
    await interaction.reply({
      content: `Successfully sent the partners embed. ${channel}`,
    });
  },
};
