<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Bwuno" src="https://pbs.twimg.com/profile_images/1508950960592211973/_eooqgBH_400x400.jpg"/>

# NotifyBot

[![](https://img.shields.io/badge/Ajouter-NotifyBot-0199FE.svg?style=flat)](https://discord.com/api/oauth2/authorize?client_id=981840577794543666&permissions=277025655872&scope=bot%20applications.commands)
[![](https://img.shields.io/badge/discord.js-v13.6.0-blue.svg?logo=npm)](https://github.com/discordjs)

> Simple Ni No Kuni Discord bot notifying boss' arrival.

NotifyBot is a simple Discord bot which will remind your users of the upcoming arrival of **Field Boss**, **World Boss** and **Arena** (Lava Valley) of the game [Ni No Kuni](https://play.google.com/store/apps/details?id=com.netmarble.enngb&hl=fr&gl=US).


## Commands

This bot use Discord' slash commands, in order to use it you need to invite it on your Discord server with permissions to create **application commands**.

🔸 `/help` -> Display the help menu

🔸 `/add <channel> <type={FieldBoss,WorldBoss,Arena} [mode={before,now}] [message]` -> Add a reminder on a TextChannel (multiple on the same channel supported)

🔸 `/remove <channel>` -> Delete all reminder on a TextChannel

🔸 `/show` -> Display all reminders on this Discord server

In order to make more reliable notifications, you can choose whether the bot publishes 10 min before the boss arrives or on time

|                                 | Notification schedule (mode: before) | Notification schedule (mode: now) |
|---------------------------------|--------------------------------------|-----------------------------------|
| Field Boss (Everyday)           | `4:50`, `10:50`, `16:50`, `22:50`    | `5:00`, `11:00`, `17:00`, `23:00` |
| World Boss (Everyday)           | `4:50`, `10:50`, `16:50`, `22:50`    | `5:00`, `11:00`, `17:00`, `23:00` |
| Arena (Each Tuesday and Sunday) | `22:50`                              | `23:00`                           |

## Installation

⚠️ This part is reserved to developers wanting to make their own bot only, if you don't master Discord applications creation, just install the already made one by [clicking here](https://discord.com/api/oauth2/authorize?client_id=981840577794543666&permissions=277025655872&scope=bot%20applications.commands)

```sh
git clone https://github.com/Paul-Marie/NotifyBot;
cd NotifyBot/
```
Open `.env.dist` file and fill up `DISCORD_TOKEN` and `MONGODB_URI` (optionnal) in a new file nammed `.env`
> basic `MONGODB_URI` value can be `mongodb://localhost/notifybot`

Make sure to use [Node.JS](https://nodejs.org/fr/download/) v17 or higher, then start your bot using [yarn](https://classic.yarnpkg.com/fr/docs/install/#debian-stable) or [npm](https://nodejs.org/fr/download/) (here with yarn)
```sh
yarn;				# Install all dependencies
yarn start 			# Start the bot
```

Feel free to use [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) or [screen](https://www.gnu.org/software/screen/screen.html) in order to keep your Discord bot running.
