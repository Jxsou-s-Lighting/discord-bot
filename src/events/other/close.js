const {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require("discord.js");

const database = require("../../database/ticket");

module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
        if (!interaction.isButton()) return;

        const { guild, channel, customId, member } = interaction;

        if (["close"].includes(customId)) {
            database.findOne({ ChannelID: channel.id }, async (err, docs) => {
                if (!docs)
                    return interaction.reply({
                        embeds: [
                            new EmbedBuilder().setTitle(
                                "No data was found related to this ticket. Please delete manual."
                            ),
                        ],
                    });
                if (docs.Closed == true)
                    return interaction.reply({
                        embeds: [
                            new EmbedBuilder().setTitle("The ticket is already closed."),
                        ],
                    });

                await database.updateOne({ ChannelID: channel.id }, { Closed: true });

                const memberId = guild.members.cache.get(docs.MemberID);

                await interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle("The ticket has been closed.")
                            .setFooter({
                                text: `Closed by: ${member.user.tag}`,
                            }),
                    ],
                    components: [
                        new ActionRowBuilder().addComponents(
                            new ButtonBuilder()
                                .setCustomId("delete")
                                .setLabel("Delete Ticket")
                                .setStyle(ButtonStyle.Secondary)
                        ),
                    ],
                });

                channel.permissionOverwrites.edit(memberId.id, { ViewChannel: false });
            });
        }
    },
};
