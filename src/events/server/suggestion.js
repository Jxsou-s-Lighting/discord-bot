const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "messageCreate",
  async execute(message) {
    let suggestionChannel = message.guild.channels.cache.get("989493730660720700");

    if (message.author.bot) return;
    if (message.content.length === 0) return;
    if (message.member.roles.cache.has("989436080073891860")) return;

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

      await suggestionMessage.react("<:CheckMark:989487792994254879>");
      await suggestionMessage.react("<:WrongMark:989487827987333170>");
      await message.delete();
    }
  },
};
