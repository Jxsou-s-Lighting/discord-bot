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
        .setName("order")
        .setDescription("Returns the order embed.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        let channel = interaction.guild.channels.cache.get("989497528892420106");

        const embed = new EmbedBuilder()
            .setTitle("Ordering")
            .setDescription(
                "You can purchase a product via our [Product Hub](https://jxsou.lighting/hub) or via [PayPal](https://paypal.me/josou10). You can try out our products via our [Testing Place](https://jxsou.lighting/demo)."
            )
            .addFields([
                {
                    name: "How do I use the product that I purchased?",
                    value: "- Download the file sent by Vendr.\n- Drag and drop the file in Roblox Studio.\n- Follow the instructions inside the product's README file.",
                },
            ])
            .setImage("https://i.postimg.cc/3R3BXffs/jxordering.png")
            .setFooter({
                text: "Feel free to contact support if you have any questions about our products.",
                iconURL: client.user.displayAvatarURL(),
            });

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setURL("https://jxsou.lighting/hub")
                .setLabel("Product Hub")
                .setStyle(ButtonStyle.Link),
            new ButtonBuilder()
                .setURL("https://jxsou.lighting/roblox")
                .setLabel("Roblox Group")
                .setStyle(ButtonStyle.Link),
            new ButtonBuilder()
                .setURL("https://discord.com/channels/885392997162823681/989497510341005373")
                .setLabel("Support")
                .setStyle(ButtonStyle.Link),
            new ButtonBuilder()
                .setURL("https://paypal.me/josou10")
                .setLabel("PayPal")
                .setStyle(ButtonStyle.Link)
        );

        await channel.send({
            embeds: [embed],
            components: [row],
        });
        await interaction.reply({
            content: `Successfully sent the order embed. ${channel}`,
        });
    },
};
