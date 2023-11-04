const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionsBitField,
  ChannelType,
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

      const ticketChannel = await guild.channels.create({
        name: `ticket-${id}`,
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
      });

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(`close-${ticketChannel.id}-${member.id}`)
          .setLabel("Close Ticket")
          .setStyle(ButtonStyle.Secondary)
      );

      let ticketMessage, ticketType;
      switch (customId) {
        case "support":
          ticketType = "Product Support";
          ticketMessage =
            "Please respond to the following questions:\n```1. What product(s) are you having issue(s) with?\n2. Did you enable HTTP Requests?\n3. Did you read the README inside the product(s)?\n4. Do you own the game?\n5. Describe your issue(s) in detail.```\nSupport representatives will respond shortly.";
          break;
        case "ordering":
          ticketType = "Product Ordering";
          ticketMessage =
            "You can try out our products at: https://jxsou.lighting/demo\n```Our products can be purchased via our product hub and then be obtained using the /retrieve [Product] command. To order via PayPal, tell us which product(s) you would like to purchase.```\nSupport representatives will respond shortly";
          break;
        case "question":
          ticketType = "Question";
          ticketMessage = "`Please describe your question with as much information as possible.`";
          break;
      }

      const ticketEmbed = new EmbedBuilder()
        .setAuthor({
          name: "Jxsou's Lighting | Support System",
          iconURL: client.user.displayAvatarURL(),
        })
        .setTitle(ticketType)
        .setDescription(ticketMessage)
        .setFooter({
          text: `Ticket created by: ${member.user.tag}`,
        });

      ticketChannel.send({
        content: `${member}`,
        embeds: [ticketEmbed],
        components: [row],
      });

      interaction.reply({
        content: `Your ticket has been created: ${ticketChannel}`,
        ephemeral: true,
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

      const [channelId, memberId] = customId.split("-").slice(1);
      const ticketChannel = guild.channels.cache.get(channelId);
      ticketChannel.permissionOverwrites.edit(memberId, { ViewChannel: false });
      ticketChannel.setName(`closed-${ticketChannel.name.split("-")[1]}`);
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

      const channelId = customId.split("-")[1];
      setTimeout(() => {
        const ticketChannel = guild.channels.cache.get(channelId);
        if (ticketChannel) {
          ticketChannel.delete();
        }
      }, 7500);
    }
  },
};
