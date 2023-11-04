const { EmbedBuilder } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || message.content.trim() === "") {
      return;
    }

    const suggestionChannel = message.guild.channels.cache.get(ids.channels.suggestionsID);
    if (message.channel.id !== suggestionChannel.id) {
      return;
    }

    const suggestionEmbed = new EmbedBuilder()
      .setAuthor({
        name: message.member.user.tag,
        iconURL: message.member.user.displayAvatarURL({ dynamic: true }),
      })
      .setDescription(message.content)
      .setTimestamp();

    const suggestionMessage = await suggestionChannel.send({ embeds: [suggestionEmbed] });

    await suggestionMessage.react("<:CheckMark:989487792994254879>");
    await suggestionMessage.react("<:WrongMark:989487827987333170>");

    await message.delete();
  },
};
