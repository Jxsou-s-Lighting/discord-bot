const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Returns the bot's ping."),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const embed = new EmbedBuilder().addFields(
            {
                name: "API Latency:",
                value: `${client.ws.ping}ms`,
                inline: true,
            },
            {
                name: "Client Ping:",
                value: `${message.createdTimestamp - interaction.createdTimestamp}ms`,
                inline: true,
            }
        );

        await interaction.editReply({
            embeds: [embed],
        });
    },
};
