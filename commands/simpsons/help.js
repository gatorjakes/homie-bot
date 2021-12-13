const { MessageEmbed } = require("discord.js");
const {prefix} = require('../../config.json');

exports.run = async (bot, message) => {

let helpEmbed = new MessageEmbed()
.setTitle(`${bot.user.tag} Help Commands`)
.addField('Simpson Family', 'abe, bart, homer, lisa, ,maggie, marge, mona')
.addField('GIF Search', 'gif')
.addField('prefix', prefix)
.setThumbnail(bot.user.displayAvatarURL({format: 'png', dynamic: true}))
.setTimestamp()
.setColor("RANDOM");
message.channel.send(helpEmbed);
}
exports.help = {
    name: "help",
    aliases: ['h']
}