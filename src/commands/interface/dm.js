const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dmuser")
    .setDescription("Sends a serious DM to a user about a copyright violation.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((option) =>
      option.setName("userid").setDescription("The Discord ID of the user to DM").setRequired(true)
    ),
  async execute(interaction, client) {
    const userId = interaction.options.getString("userid");

    try {
      // Fetch the user
      const user = await client.users.fetch(userId);

      // Create the embed message
      const embed = new EmbedBuilder()
        .setTitle("Official Notice of Ban – Jxsou Lighting")
        .setDescription(
          `This is to formally notify that you, **${user.tag}**, are permanently banned from all **Jxsou Lighting** services and servers.`
        )
        .addFields([
          {
            name: "Reason",
            value:
              "Unauthorized use of assets stolen from **Trash Entertainment**. This constitutes a DMCA violation and intellectual property infringement.",
          },
          {
            name: "Action Taken",
            value:
              "Effective immediately, you are no longer welcome in any Jxsou Lighting environments. Further legal action may be pursued.",
          },
        ])
        .setColor("Red")
        .setFooter({ text: "Jxsou Lighting Administration" });

      // Send DM
      await user.send({ embeds: [embed] });

      await interaction.reply({
        content: `✅ DM successfully sent to ${user.tag}.`,
        ephemeral: true,
      });
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "❌ Failed to send DM. The user may not allow DMs from bots.",
        ephemeral: true,
      });
    }
  },
};
