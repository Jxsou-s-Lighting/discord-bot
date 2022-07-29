const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("membercount")
        .setDescription("Returns the amount of members in the server."),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: "Jxsou's Lighting | Members",
                iconURL: client.user.displayAvatarURL(),
            })
            .addFields({
                name: "Members",
                value: `${interaction.guild.memberCount}`,
            })
            .setTimestamp(Date.now());
        await interaction.reply({
            embeds: [embed],
        });
    },
};
