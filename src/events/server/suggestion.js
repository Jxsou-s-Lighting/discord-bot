const { EmbedBuilder } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  name: "messageCreate",
  async execute(message) {
    const suggestionChannelId = ids.channels.suggestionsID;
    const staffRoleId = ids.roles.staffID;

    if (message.channel.id !== suggestionChannelId) return;

    if (message.author.bot) return;

    if (message.member.roles.cache.has(staffRoleId)) return;

    if (!message.content.trim()) {
      await message.delete();
      return;
    }

    const embed = new EmbedBuilder()
      .setColor(0x2b2d31)
      .setAuthor({
        name: `${message.author.tag}`,
        iconURL: message.author.displayAvatarURL({ dynamic: true }),
      })
      .setDescription(message.content.trim())
      .setTimestamp();

    const sentMessage = await message.channel.send({ embeds: [embed] });

    await sentMessage.react("<:CheckMark:989487792994254879>");
    await sentMessage.react("<:WrongMark:989487827987333170>");

    await message.delete();
  },
};
