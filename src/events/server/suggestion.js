const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {
        let suggestionChannel = message.guild.channels.cache.get("1002117415972380744");

        if (message.author.bot) return;
        if (message.member.roles.cache.has("1002117534209802290")) return;

        if (message.channel.id == suggestionChannel) {
            const suggestionMessage = await suggestionChannel.send({
                embeds: [
                    new EmbedBuilder()
                        .setAuthor({
                            name: `${message.member.user.tag}`,
                            iconURL: message.member.user.displayAvatarURL({
                                dynamic: true,
                            }),
                        })
                        .setDescription(message.content),
                ],
            });

            await suggestionMessage.react("<:Union1_nmap:1002120921261297754>");
            await suggestionMessage.react("<:Untitled:1002120903305482331>");
            await message.delete();
        }
    },
};
