module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
        const { member, customId } = interaction;

        let GiveawaysRole = "989487073310421092";
        let DevelopmentRole = "989486785254002759";
        let OutagesRole = "989486845018656780";
        let EventsRole = "989485877954772992";

        if (["1", "2", "3", "4"].includes(customId)) {
            switch (customId) {
                case "1":
                    if (member.roles.cache.has(`${GiveawaysRole}`))
                        return (
                            interaction.reply({
                                content: "Giveaways has been removed.",
                                ephemeral: true,
                            }),
                            member.roles.remove(`${GiveawaysRole}`)
                        );
                    if (!member.roles.cache.has(`${GiveawaysRole}`))
                        return (
                            interaction.reply({
                                content: "Giveaways has been added.",
                                ephemeral: true,
                            }),
                            member.roles.add(`${GiveawaysRole}`)
                        );
                case "2":
                    if (member.roles.cache.has(`${DevelopmentRole}`))
                        return (
                            interaction.reply({
                                content: "Development has been removed.",
                                ephemeral: true,
                            }),
                            member.roles.remove(`${DevelopmentRole}`)
                        );
                    if (!member.roles.cache.has(`${DevelopmentRole}`))
                        return (
                            interaction.reply({
                                content: "Development has been added.",
                                ephemeral: true,
                            }),
                            member.roles.add(`${DevelopmentRole}`)
                        );
                case "3":
                    if (member.roles.cache.has(`${OutagesRole}`))
                        return (
                            interaction.reply({
                                content: "Outages has been removed.",
                                ephemeral: true,
                            }),
                            member.roles.remove(`${OutagesRole}`)
                        );
                    if (!member.roles.cache.has(`${OutagesRole}`))
                        return (
                            interaction.reply({
                                content: "Outages has been added.",
                                ephemeral: true,
                            }),
                            member.roles.add(`${OutagesRole}`)
                        );
                case "4":
                    if (member.roles.cache.has(`${EventsRole}`))
                        return (
                            interaction.reply({
                                content: "Events has been removed.",
                                ephemeral: true,
                            }),
                            member.roles.remove(`${EventsRole}`)
                        );
                    if (!member.roles.cache.has(`${EventsRole}`))
                        return (
                            interaction.reply({
                                content: "Events has been added.",
                                ephemeral: true,
                            }),
                            member.roles.add(`${EventsRole}`)
                        );
            }
        }
    },
};
