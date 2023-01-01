const { EmbedBuilder } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  name: "messageCreate",
  async execute(message) {
    let suggestionChannel = message.guild.channels.cache.get(ids.channels.suggestionsID);
    if (message.author.bot) return;
    if (message.content.length === 0) return;
    if (message.member.roles.cache.has(ids.roles.staffID)) return;
    if (message.channel.id == suggestionChannel) {
      const suggestionMessage = await suggestionChannel.send({
        embeds: [
          new EmbedBuilder()
            .setAuthor({
              name: `${message.member.user.tag}`,
              iconURL: `${message.member.user.displayAvatarURL({ forceStatic: false })}`,
            })
            .setDescription(message.content)
            .setTimestamp(Date.now()),
        ],
      });

      await suggestionMessage.react("<:Union1_nmap:1002120921261297754>");
      await suggestionMessage.react("<:Untitled:1002120903305482331>");

      await message.delete();
    }
  },
};
