const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("remove-role")
    .setDescription("Removes the configured role from a user.")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user to remove the role from.").setRequired(true)
    ),

  async execute(interaction) {
    const targetUser = interaction.options.getUser("user");
    const member = interaction.guild.members.cache.get(targetUser.id);
    const roleId = ids.roles.notableID;
    const role = interaction.guild.roles.cache.get(roleId);

    if (!role) {
      return interaction.reply({
        content: "❌ Role not found in this server.",
        ephemeral: true,
      });
    }

    if (!member) {
      return interaction.reply({
        content: "❌ Could not find that user in the server.",
        ephemeral: true,
      });
    }

    try {
      await member.roles.add(role);
      await interaction.reply({
        content: `✅ Removed **${role.name}** from <@${member.id}>.`,
      });
    } catch (error) {
      console.error("Failed to remove role:", error);
      await interaction.reply({
        content:
          "❌ Failed to remove the role. I might not have permission or the role is above my top role.",
        ephemeral: true,
      });
    }
  },
};
