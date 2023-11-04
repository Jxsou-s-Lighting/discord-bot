const { ids } = require("../../../config.json");

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    const { member, customId } = interaction;
    const rolesData = {
      1: { roleID: ids.roles.giveawaysID, roleName: "Giveaways" },
      2: { roleID: ids.roles.developmentID, roleName: "Development" },
      3: { roleID: ids.roles.outagesID, roleName: "Outages" },
      4: { roleID: ids.roles.eventsID, roleName: "Events" },
    };

    if (rolesData[customId]) {
      const { roleID, roleName } = rolesData[customId];
      const hasRole = member.roles.cache.has(roleID);

      if (hasRole) {
        interaction.reply({
          content: `<@&${roleID}> has been removed.`,
          ephemeral: true,
        });
        await member.roles.remove(roleID);
      } else {
        interaction.reply({
          content: `<@&${roleID}> has been added.`,
          ephemeral: true,
        });
        await member.roles.add(roleID);
      }
    }
  },
};
