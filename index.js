const Discord = require("discord.js");
require('dotenv').config();

const bot = new Discord.Client({
    disableEveryone: true,
    autoReconnect: true,
    disabledEvents: ["TYPING_START"],
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION']
});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.event = new Discord.Collection();

const loadCommands = require("./functions/commands.js");
const loadEvents = require("./functions/events.js");

const load = async () => {
    loadCommands.run(bot);
    loadEvents.run(bot);
}

load();
process.on('unhandledRejection', () => {
});
bot.login(process.env.token);
