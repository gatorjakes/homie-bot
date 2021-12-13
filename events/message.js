const functions = require("../functions/functions.js");
const config = require('../config.json');

module.exports = async (bot, message) => {

    let prefix = config.prefix.toLowerCase();

    const args = message.content.split(/ +/g);
    const command = args.shift().slice(prefix.length).toLowerCase();
    const cmd = bot.commands.get(command) || bot.aliases.get(command);

    if(!message.content.toLowerCase().startsWith(prefix) || !message.guild || message.author.bot || !cmd) return;

    cmd.run(bot, message, args, functions).catch(e => {return console.log(e)});

} 
