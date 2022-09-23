const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionsBitField,
  ChannelType,
} = require("discord.js");

const database = require("../../database/ticket");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isButton()) return;

    const { guild, member, customId } = interaction;

    let CategoryID = "989499794990960680";
    let EveryoneID = "885392997162823681";
    let StaffID = "989445012997673000";

    if (["product", "ordering", "question"].includes(customId)) {
      const ID = Math.floor(Math.random() * 9000) + 1000;

      await guild.channels
        .create({
          name: `${"ticket" + "-" + ID}`,
          type: ChannelType.GuildText,
          parent: CategoryID,
          permissionOverwrites: [
            {
              id: member.id,
              allow: [
                PermissionsBitField.Flags.SendMessages,
                PermissionsBitField.Flags.ViewChannel,
                PermissionsBitField.Flags.ReadMessageHistory,
              ],
            },
            {
              id: StaffID,
              allow: [
                PermissionsBitField.Flags.SendMessages,
                PermissionsBitField.Flags.ViewChannel,
                PermissionsBitField.Flags.ReadMessageHistory,
              ],
            },
            {
              id: EveryoneID,
              deny: [
                PermissionsBitField.Flags.SendMessages,
                PermissionsBitField.Flags.ViewChannel,
                PermissionsBitField.Flags.ReadMessageHistory,
              ],
            },
          ],
        })
        .then(async (channel) => {
          await database.create({
            GuildID: guild.id,
            MemberID: member.id,
            TicketID: ID,
            ChannelID: channel.id,
            Closed: false,
            Deleted: false,
            Type: customId,
          });
          const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId("close")
              .setLabel("Close Ticket")
              .setStyle(ButtonStyle.Secondary)
          );

          switch (customId) {
            case "product":
              const productEmbed = new EmbedBuilder()
                .setAuthor({
                  name: "Jxsou's Lighting | Support System",
                  iconURL: client.user.displayAvatarURL(),
                })
                .setTitle("Product Support")
                .setDescription(
                  "Please answer the following questions for the support team to resolve your problem quickly:\n\n> 1. What product(s) are you having issues with?\n> 2. Did you publish your game?\n> 3. Did you enable HTTP Requests?\n> 4. Do you own the game?\n> 5. What are you having issues with?\n\nSupport representatives will respond shortly."
                )
                .setFooter({
                  text: `Ticket created by: ${member.user.tag}`,
                });

              channel.send({
                content: `${member}`,
                embeds: [productEmbed],
                components: [row],
              });

              break;
            case "ordering":
              const orderingEmbed = new EmbedBuilder()
                .setAuthor({
                  name: "Jxsou's Lighting | Support System",
                  iconURL: client.user.displayAvatarURL(),
                })
                .setTitle("Product Ordering")
                .setDescription(
                  "You can try out our products at: https://dev.jxsou.lighting/demo \n\n**Payment Methods**\nRobux: https://dev.jxsou.lighting/store \nPayPal: https://paypal.me/josou10 \n\nSupport representatives will respond shortly."
                )
                .setFooter({
                  text: `Ticket created by: ${member.user.tag}`,
                });

              channel.send({
                content: `${member}`,
                embeds: [orderingEmbed],
                components: [row],
              });

              break;
            case "question":
              const questionEmbed = new EmbedBuilder()
                .setAuthor({
                  name: "Jxsou's Lighting | Support System",
                  iconURL: client.user.displayAvatarURL(),
                })
                .setTitle("General Questions")
                .setDescription(
                  "Please describe your question with as much information as possible. Support representatives will respond shortly."
                )
                .setFooter({
                  text: `Ticket created by: ${member.user.tag}`,
                });

              channel.send({
                content: `${member}`,
                embeds: [questionEmbed],
                components: [row],
              });

              break;
          }

          interaction.reply({
            content: `Your ticket has been created: ${channel}`,
            ephemeral: true,
          });
        });
    }
  },
};
