const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    const arrayOfStatus = ["https://jxsou.lighting", "/help"];

    let index = 0;

    setInterval(() => {
      if (index === arrayOfStatus.length) index = 0;
      const status = arrayOfStatus[index];
      client.user.setActivity(status, {
        type: ActivityType.Watching,
      });
      index++;
    }, 7500);

    console.log(`Jxsou's Lighting is ready.`);
  },
};
