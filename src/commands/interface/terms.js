const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("terms")
    .setDescription("Returns the terms embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.termsID);

    const embed = new EmbedBuilder()
      .setTitle("Terms of Service")
      .setDescription(
        "Make sure to review our terms of service before purchasing and/or using any of our products and check them occasionally as they may change with or without notice.\n\n**1. Product Terms**1.1 Refunds will not be given in accordance with Roblox's [Terms of Use](https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use).\n1.2 We have full rights to revoke access to a product if you remove credits.\n1.3 You are only allowed to transfer your product license once.\n1.4 You are not allowed to modify any of our products.\n1.5 You may not distribute our products to other people. Leaking our products will result in a blacklist from Jxsou's Lighting."
      )
      .setImage("https://i.postimg.cc/T2z9JbLF/terms-of-service.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Last updated: 01/01/2023 - Subject to change anytime",
      });

    await channel.send({
      embeds: [embed],
    });
    await interaction.reply({
      content: `Successfully sent the terms embed. ${channel}`,
    });
  },
};
