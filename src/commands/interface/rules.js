const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { ids } = require("../../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Returns the rules embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    let channel = interaction.guild.channels.cache.get(ids.channels.rulesID);

    const welcomeEmbed = new EmbedBuilder()
      .addFields(
        {
          name: "Welcome",
          value:
            "Please ensure you read the rules below as you must follow them at all times and also make sure to review our Terms of Service when using any of our products.",
        },
        {
          name: "About Us",
          value:
            "Jxsou's Lighting is a reliable lighting company. Our focus is to provide stage lighting at an affordable price. We always strive to update our products and add more features to provide a better experience to our customers.",
        },
        {
          name: "Purchasing",
          value:
            "All of our products can be purchased from our [Product Hub](https://jxsou.lighting/hub) using robux and then be obtained using the /retrieve [Product] command. We also accept [PayPal](https://paypal.me/josou10) transactions. To order via PayPal, create an ordering ticket.",
        }
      )
      .setImage("https://i.postimg.cc/T3X5sYQk/welcome.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Jxsou's Lighting - https://jxsou.lighting",
      });

    const rulesEmbed = new EmbedBuilder()
      .setTitle("Rules")
      .setDescription(
        "Please read these rules and check on them occasionally as they may change with or without notice. Keep in mind that these are just general rules so please make sure to also use common sense.\n\n**1. General Rules**\n1. You must follow Discord's [Terms of Service](https://discord.com/terms).\n2. Be respectful to everyone.\n3. DMs advertising is forbidden.\n4. Do not send any suspicious links or files.\n5. NSFW content is forbidden.\n6. Swearing is allowed but keep it to a minimum.\n7. English language only.\n8. Do not ping staff to check your ticket."
      )
      .setImage("https://i.postimg.cc/1tTKTnWg/rules.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Consequences for breaking the rules will vary based on your actions.",
      });

    const termsEmbed = new EmbedBuilder()
      .setTitle("Terms of Service")
      .setDescription(
        "Make sure to review our terms of service before purchasing and/or using any of our products and check them occasionally as they may change with or without notice.\n\n**1. Product Terms**1.1 Refunds will not be given in accordance with Roblox's [Terms of Use](https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use).\n1.2 We have full rights to revoke access to a product at any time if you remove credits.\n1.3 You are only allowed to transfer your product license once.\n1.4 You are not allowed to modify any of our products.\n1.5 You may not distribute our products to other people. Leaking our products will result in a blacklist from Jxsou's Lighting."
      )
      .setImage("https://i.postimg.cc/T2z9JbLF/terms-of-service.png")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Last updated: 01/01/2023 - Subject to change anytime",
      });

    await channel.send({
      embeds: [welcomeEmbed, rulesEmbed, termsEmbed],
    });
    await interaction.reply({
      content: `Successfully sent the rules embed. ${channel}`,
    });
  },
};
