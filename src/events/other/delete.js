const { EmbedBuilder } = require("discord.js");
const database = require("../../database/ticket");

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    if (!interaction.isButton()) return;

    const { channel, customId, member } = interaction;

    if (["delete"].includes(customId)) {
      database.findOne({ ChannelID: channel.id }, async (err, docs) => {
        if (!docs)
          return interaction.reply({
            embeds: [
              new EmbedBuilder().setTitle(
                "No data was found related to this ticket. Please delete manual."
              ),
            ],
          });
        if (docs.Deleted == true)
          return interaction.reply({
            embeds: [new EmbedBuilder().setTitle("You can't do that.")],
          });

        await database.updateOne({ ChannelID: channel.id }, { Deleted: true });

        await interaction.reply({
          embeds: [
            new EmbedBuilder().setTitle("The ticket has been deleted.").setFooter({
              text: `Delete by: ${member.user.tag}`,
            }),
          ],
        });

        setTimeout(() => {
          channel.delete();
        }, 7500);
      });
    }
  },
};
