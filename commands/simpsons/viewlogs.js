const db = require("quick.db");
const { prefix } = require(`../../config.json`);

exports.run = async (bot, message, args, functions) => {
    
if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send('This Command must be used by an \`ADMINISTRATOR\`');

let logsChannel = message.guild.channels.cache.find(c => c.id === db.get(`logs_${message.guild.id}`));
if(!logsChannel){
    return message.channel.send(`A Logs Channel has not been Configured for this Server :x:. Please use \`${prefix}.setlogs\` to configure a **Logs Channel**`);
} 
message.channel.send(`\`${logsChannel.name}\` is the Currently Configured Logs Channel for this guild!`)
}

exports.help = {
    name: "viewlogs",
    aliases: ['vlogs', 'vlog', 'viewlog']
}