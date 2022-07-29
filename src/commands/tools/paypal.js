const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("paypal")
        .setDescription("Returns the PayPal link."),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: "Jxsou's Lighting | PayPal",
                iconURL: client.user.displayAvatarURL(),
            })
            .setDescription(
                `Click the button below to purchase our lights with your currency. Please open an ordering ticket at ${interaction.guild.channels.cache.get(
                    "1002067643672580117"
                )} after purchasing.`
            )
            .setTimestamp(Date.now());

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setURL("https://paypal.me/josou10")
                .setLabel("PayPal Link")
                .setStyle(ButtonStyle.Link)
        );

        await interaction.reply({
            embeds: [embed],
            components: [row],
        });
    },
};
