const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rules")
        .setDescription("Returns the rules embed.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        let channel = interaction.guild.channels.cache.get("989470133728731166");

        const welcomeEmbed = new EmbedBuilder()
            .setTitle("Welcome to Jxsou's Lighting!")
            .setDescription(
                "Here you can find everything you will need to know about Jxsou's Lighting. Please ensure you read the rules below as you must follow them at all times and also ensure you check our Terms of Service when using any of our products."
            )
            .setImage("https://i.postimg.cc/PrMdKCq0/jxwelcome.png")
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: "Founded: December 1st 2021",
            });

        const rulesEmbed = new EmbedBuilder()
            .setTitle("Rules")
            .setDescription(
                "Please read these rules and check on them occasionally as they may change with or without notice. Keep in mind that these are just general rules so please make sure to also use common sense.\n\n**1. General Rules**\n1. You must follow Discord's [Terms of Service](https://discord.com/terms).\n2. Be respectful to everyone.\n3. Do not spam or raid.\n4. Do not send any malicious links or files.\n5. Do not DMs advertising.\n6. Do not send NSFW content anywhere in our server.\n7. Swearing is allowed but keep it to a minimum.\n8. Do not ping staff to check or answer your ticket.\n9. Do not create tickets to spam or ask non-sense questions."
            )
            .setImage("https://i.postimg.cc/PrSBPYJf/jxrules.png")
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: "Consequences for breaking the rules will vary based on the severity of your actions - Subject to change anytime",
            });

        const termsEmbed = new EmbedBuilder()
            .setTitle("Terms of Service")
            .setDescription(
                "Please read these Terms of Service before purchasing and/or using any of our products and check on them occasionally as they may change with or without notice.\n\n1. Refunds will not be given in accordance with Roblox's [Terms of Use](https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use).\n2. We have full rights to revoke access to a product at any time if you remove any credits.\n3. You are only allowed to transfer your product license once.\n4. You are not allowed to modify any of our products.\n5. You may not distribute our products to other people. Leaking our products will result in a blacklist from Jxsou's Lighting and it's services."
            )
            .setImage("https://i.postimg.cc/g0Z5S7Dr/jxterms.png")
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: "Last updated: 01/08/2022 - Subject to change anytime",
            });

        const linksEmbed = new EmbedBuilder()
            .setTitle("Links")
            .setDescription(
                "The link to our discord server, product hub and roblox group as well as other important things can be found here."
            )
            .addFields(
                {
                    name: "Discord Server",
                    value: "https://jxsou.lighting/discord",
                },
                {
                    name: "Product Hub",
                    value: "https://jxsou.lighting/hub",
                },
                {
                    name: "Roblox Group",
                    value: "https://jxsou.lighting/roblox",
                },
                {
                    name: "PayPal",
                    value: "https://paypal.me/josou10",
                }
            )
            .setImage("https://i.postimg.cc/7hxWLZyT/jxlinks.png")
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: "Jxsou's Lighting - https://jxsou.lighting",
            });

        await channel.send({
            embeds: [welcomeEmbed, rulesEmbed, termsEmbed, linksEmbed],
        });
        await interaction.reply({
            content: `Successfully sent the rules embed. ${channel}`,
        });
    },
};
