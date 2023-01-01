const { ids } = require("../../../config.json");

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    const { member, customId } = interaction;
    if (["1", "2", "3", "4"].includes(customId)) {
      switch (customId) {
        case "1":
          if (member.roles.cache.has(ids.roles.giveawaysID))
            return (
              interaction.reply({
                content: `<@&${ids.roles.giveawaysID}> has been removed.`,
                ephemeral: true,
              }),
              member.roles.remove(ids.roles.giveawaysID)
            );
          if (!member.roles.cache.has(ids.roles.giveawaysID))
            return (
              interaction.reply({
                content: `<@&${ids.roles.giveawaysID}> has been added.`,
                ephemeral: true,
              }),
              member.roles.add(ids.roles.giveawaysID)
            );
        case "2":
          if (member.roles.cache.has(ids.roles.developmentID))
            return (
              interaction.reply({
                content: `<@&${ids.roles.developmentID}> has been removed.`,
                ephemeral: true,
              }),
              member.roles.remove(ids.roles.developmentID)
            );
          if (!member.roles.cache.has(ids.roles.developmentID))
            return (
              interaction.reply({
                content: `<@&${ids.roles.developmentID}> has been added.`,
                ephemeral: true,
              }),
              member.roles.add(ids.roles.developmentID)
            );
        case "3":
          if (member.roles.cache.has(ids.roles.outagesID))
            return (
              interaction.reply({
                content: `<@&${ids.roles.outagesID}> has been removed.`,
                ephemeral: true,
              }),
              member.roles.remove(ids.roles.outagesID)
            );
          if (!member.roles.cache.has(ids.roles.outagesID))
            return (
              interaction.reply({
                content: `<@&${ids.roles.outagesID}> has been added.`,
                ephemeral: true,
              }),
              member.roles.add(ids.roles.outagesID)
            );
        case "4":
          if (member.roles.cache.has(ids.roles.eventsID))
            return (
              interaction.reply({
                content: `<@&${ids.roles.eventsID}> has been removed.`,
                ephemeral: true,
              }),
              member.roles.remove(ids.roles.eventsID)
            );
          if (!member.roles.cache.has(ids.roles.eventsID))
            return (
              interaction.reply({
                content: `<@&${ids.roles.eventsID}> has been added.`,
                ephemeral: true,
              }),
              member.roles.add(ids.roles.eventsID)
            );
      }
    }
  },
};
