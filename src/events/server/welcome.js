const { ids } = require("../../../config.json");

module.exports = {
  name: "guildMemberAdd",
  async execute(member, client) {
    const unverified = await member.guild.roles.cache.get(ids.roles.unverifiedID);
    member.roles.add(unverified);
  },
};
