const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("remove")
    .setDescription("Remove a role to a user.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addUserOption((member) =>
      member.setName("member").setDescription("member to mention").setRequired(true)
    )
    .addRoleOption((role) =>
      role.setName("role").setDescription("role to remove").setRequired(true)
    ),
  async execute(interaction, client) {
    const user = interaction.options.getUser("member");
    const product = interaction.options.getRole("role");

    interaction.guild.members.cache.get(user.id).roles.remove(product);

    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Jxsou's Lighting | Roles System",
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription(`Successfully removed the **${product}** role.`)
      .setTimestamp(Date.now());

    await interaction.reply({
      embeds: [embed],
    });
  },
};
