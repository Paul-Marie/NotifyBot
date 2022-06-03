const { CronJob         } = require("cron");
const { Client, Intents } = require("discord.js");
const Channel             = require("./models/channel");

const bot = new Client({ intents: [ Intents.FLAGS.GUILDS ] });

// Field Boss
new CronJob("50 4,10,16,22 * * *", async () => {
  const result = await Channel.find({ type: "field", mode: true });
  await Promise.all(result.map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier)).send(message)
  )));
}, null, true, "Europe/Paris");

// World Boss
new CronJob("20 4,10,16,22 * * *", async () => {
  const result = await Channel.find({ type: "world", mode: true });
  await Promise.all(result.map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier)).send(message)
  )));
}, null, true, "Europe/Paris");

// Arena
new CronJob("50 22 * * 0,2", async () => {
  const result = await Channel.find({ type: "arena", mode: true });
  await Promise.all(result.map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier)).send(message)
  )));
}, null, true, "Europe/Paris");

// Field Boss
new CronJob("0 5,11,17,23 * * *", async () => {
  const result = await Channel.find({ type: "field", mode: false });
  await Promise.all(result.map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier)).send(message)
  )));
}, null, true, "Europe/Paris");

// World Boss
new CronJob("0 5,11,17,23 * * *", async () => {
  const result = await Channel.find({ type: "world", mode: false });
  await Promise.all(result.map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier)).send(message)
  )));
}, null, true, "Europe/Paris");

// Arena
new CronJob("0 23 * * 0,2", async () => {
  const result = await Channel.find({ type: "arena", mode: false });
  await Promise.all(result.map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier)).send(message)
  )));
}, null, true, "Europe/Paris");

bot.login(process.env?.DISCORD_TOKEN);
