const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    PermissionFlagsBits,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roles")
        .setDescription("Returns the roles embed.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        let channel = interaction.guild.channels.cache.get("1002067643672580117");

        const embed = new EmbedBuilder()
            .setAuthor({
                name: "Jxsou's Lighting | Roles System",
                iconURL: client.user.displayAvatarURL(),
            })
            .setDescription(
                "Although everyone gets pinged for important announcements, you can select all of the roles that you want to get notified about other things that not everyone may want to be pinged about.\n\n> 1 - Giveaways Announcements\n> 2 - Development Announcements\n> 3 - Outages Announcements\n> 4 - Events Announcements"
            )
            .setImage("https://i.postimg.cc/yxQvYhPw/jxroles.png");

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("1")
                .setLabel("1")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("2")
                .setLabel("2")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("3")
                .setLabel("3")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("4")
                .setLabel("4")
                .setStyle(ButtonStyle.Secondary)
        );

        await channel.send({
            embeds: [embed],
            components: [row],
        });
        await interaction.reply({
            content: `Successfully sent the roles embed. ${channel}`,
        });
    },
};
