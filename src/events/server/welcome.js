const {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
        let channel = member.guild.channels.cache.get("989484630795239454");

        await member.roles.add(member.guild.roles.cache.get("989437129618759681"));

        const embed = new EmbedBuilder()
            .setAuthor({
                name: `${member.user.tag}`,
                iconURL: member.user.displayAvatarURL({ dynamic: true }),
            })
            .setTitle("Welcome to Jxsou's Lighting!")
            .setDescription(
                "> Please check our [Rules and Info](https://discord.com/channels/885392997162823681/989470133728731166).\n> Look at our [Products List](https://discord.com/channels/885392997162823681/989497487859531826).\n> We also provide a [Support Service](https://discord.com/channels/885392997162823681/989497510341005373)."
            )
            .setImage("https://i.postimg.cc/PrMdKCq0/jxwelcome.png");

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setURL("https://jxsou.lighting/roblox")
                .setLabel("Roblox Group")
                .setStyle(ButtonStyle.Link),
            new ButtonBuilder()
                .setURL("https://jxsou.lighting/hub")
                .setLabel("Product Hub")
                .setStyle(ButtonStyle.Link)
        );

        await channel.send({ content: `${member}`, embeds: [embed], components: [row] });
    },
};
