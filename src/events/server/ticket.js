const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionsBitField,
  ChannelType,
  MessageButton,
} = require("discord.js");

const { ids } = require("../../../config.json");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isButton()) return;

    const { guild, member, customId } = interaction;

    let CategoryID = ids.other.ticketID;
    let EveryoneID = ids.other.everyoneID;

    if (["support", "ordering", "question"].includes(customId)) {
      const id = Math.floor(Math.random() * 9000) + 1000;

      await guild.channels
        .create({
          name: `${"ticket" + "-" + id}`,
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
          const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId(`close-${channel.id}-${member.id}`)
              .setLabel("Close Ticket")
              .setStyle(ButtonStyle.Secondary)
          );

          switch (customId) {
            case "support":
              const productEmbed = new EmbedBuilder()
                .setAuthor({
                  name: "Jxsou's Lighting | Support System",
                  iconURL: client.user.displayAvatarURL(),
                })
                .setTitle("Product Support")
                .setDescription(
                  "Please respond to the following questions:\n```1. What product(s) are you having issue(s) with?\n2. Did you enable HTTP Requests?\n3. Did you read the README inside the product(s)?\n4. Do you own the game?\n5. Describe your issue(s) in detail.```\nSupport representatives will respond shortly."
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
                  "You can try out our products at: https://jxsou.lighting/demo\n```Our products can be purchased via our product hub and then be obtained using the /retrieve [Product] command. To order via PayPal, tell us which product(s) you would like to purchase.```\nSupport representatives will respond shortly."
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
                .setDescription("`Please describe your question with as much information as possible.`")
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

    if (customId.startsWith(`close`)) {
      await interaction.update({
        components: [
          new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId(`closed`)
              .setLabel("Closed")
              .setDisabled(true)
              .setStyle(ButtonStyle.Secondary)
          ),
        ],
      });

      await interaction.followUp({
        embeds: [
          new EmbedBuilder().setTitle("The ticket has been closed.").setFooter({
            text: `Closed by: ${member.user.tag}`,
          }),
        ],
        components: [
          new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId(`delete-${customId.split("-")[1]}`)
              .setLabel("Delete Ticket")
              .setStyle(ButtonStyle.Danger)
          ),
        ],
      });

      const channelId = guild.channels.cache.get(customId.split("-")[1]);
      const memberId = customId.split("-")[2];

      channelId.permissionOverwrites.edit(memberId, { ViewChannel: false });

      let channelName = channelId.name.split("-")[1];
      channelId.setName(`${"closed" + "-" + channelName}`);
    }

    if (customId.startsWith(`delete`)) {
      await interaction.update({
        components: [
          new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId(`deleted`)
              .setLabel("Deleted")
              .setDisabled(true)
              .setStyle(ButtonStyle.Danger)
          ),
        ],
      });

      await interaction.followUp({
        embeds: [
          new EmbedBuilder().setTitle("The ticket has been deleted.").setFooter({
            text: `Deleted by: ${member.user.tag}`,
          }),
        ],
      });

      setTimeout(() => {
        const channelId = guild.channels.cache.get(customId.split("-")[1]);
        channelId.delete();
      }, 7500);
    }
  },
};
