const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("partners")
    .setDescription("Returns the partners embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get("1032055037762994270");

    const nativeEmbed = new EmbedBuilder()
      .setURL("https://native.lighting")
      .setTitle("Partner | Native Lighting")
      .setDescription("**Server Owner**: <@283399729776164864>\n**Invite**: https://discord.gg/native")
      .setThumbnail("https://i.postimg.cc/mr62w6PR/Png-3.png")
      .setImage("https://i.postimg.cc/fyYzMzBT/image-goes-here.png")
      .setFooter({
        text: "discord.gg/native - https://native.lighting",
      });

    await channel.send({
      embeds: [nativeEmbed],
    });
    await interaction.reply({
      content: `Successfully sent the partenrs embed. ${channel}`,
    });
  },
};
