const { CronJob         } = require("cron");
const { Client, Intents } = require("discord.js");
const Channel             = require("./models/channel");

const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Field Boss
new CronJob("50 4,10,16,22 * * *",
	async () => {
    const result = await Channel.find({ type: "field" });
    await Promise.all(result.map(async ({ identifier, message }) => (
      await (bot.channels.cache.get(identifier)).send(message)
    )));
	},
	null,	true, "Europe/Paris"
);

// World Boss
new CronJob("20 4,10,16,22 * * *",
	async () => {
    const result = await Channel.find({ type: "world" });
    await Promise.all(result.map(async ({ identifier, message }) => (
      await (bot.channels.cache.get(identifier)).send(message)
    )));
	},
	null,	true,	"Europe/Paris"
);

bot.login(process.env?.DISCORD_TOKEN);
