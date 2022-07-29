const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("terms")
        .setDescription("Returns the terms embed.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        let channel = interaction.guild.channels.cache.get("1002067643672580117");

        const embed = new EmbedBuilder()
            .setTitle("Terms of Service")
            .setDescription(
                "Please read these Terms of Service before purchasing and/or using any of our products and check on them occasionally as they may change with or without notice.\n\n1. Refunds will not be given in accordance with Roblox's [Terms of Use](https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use).\n2. We have full rights to revoke access to a product at any time if you remove any credits.\n3. You are only allowed to transfer your product license once.\n4. You are not allowed to modify any of our products.\n5. You may not distribute our products to other people. Leaking our products will result in a blacklist from Jxsou's Lighting and it's services."
            )
            .setImage("https://i.postimg.cc/g0Z5S7Dr/jxterms.png")
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: "Last updated: 01/08/2022 - Subject to change anytime",
            });

        await channel.send({
            embeds: [embed],
        });
        await interaction.reply({
            content: `Successfully sent the terms embed. ${channel}`,
        });
    },
};
