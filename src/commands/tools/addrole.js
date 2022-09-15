const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("add")
        .setDescription("Add a role to a user.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addUserOption((member) =>
            member.setName("member").setDescription("member to mention").setRequired(true)
        )
        .addRoleOption((role) =>
            role.setName("role").setDescription("role to add").setRequired(true)
        ),
    async execute(interaction, client) {
        const user = interaction.options.getUser("member");
        const product = interaction.options.getRole("role");

        interaction.guild.members.cache.get(user.id).roles.add(product);
        interaction.guild.members.cache
            .get(user.id)
            .roles.add(interaction.guild.roles.cache.get("992430449949429771"));

        const embed = new EmbedBuilder()
            .setAuthor({
                name: "Jxsou's Lighting | Roles System",
                iconURL: client.user.displayAvatarURL(),
            })
            .setDescription(`Successfully added the **${product}** role.`)
            .setTimestamp(Date.now());

        await interaction.reply({
            embeds: [embed],
        });
    },
};
