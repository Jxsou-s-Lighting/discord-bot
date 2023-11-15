const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
} = require("discord.js");

const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verification")
    .setDescription("Returns the verification embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.verificationID);

    const embed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setAuthor({
        name: "Jxsou's Lighting | Verification",
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription("Please complete the `CAPTCHA` below to gain access to the server.")
      .setImage("https://i.postimg.cc/fLj97VGn/verification.png");

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("verification").setLabel("I'm not a robot").setStyle(ButtonStyle.Primary)
    );

    await channel.send({
      embeds: [embed],
    });
    await channel.send({
      components: [row],
    });
    await interaction.reply({
      content: `Successfully sent the verification embed. ${channel}`,
    });
  },
};
