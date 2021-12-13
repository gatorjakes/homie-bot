const { tenorAPI } = require('../../config.json');
const fetch = require('node-fetch');

exports.run = async (bot, message, args, functions) => {
    
  fetch(`https://api.tenor.com/v1/random?key=${tenorAPI}&q=mona+simpson&limit=1`)
  .then((res) => res.json())
  .then((json) => {
    message.channel.send(
      `${json.results[0].url}\n\`Requested By: ${message.author.tag}\``
    );
    return;
  })
  .catch((e) => {
    const promt = new MessageEmbed()
      .setDescription(`**Error** Ocurred while Searching :x:`)
      .setColor(colorset());
    message.channel
      .send(promt)
      .then((message) => message.delete({ timeout: 5000 }));
    console.error(e);
    return;
  });
}

exports.help = {
    name: "mona",
    aliases: []
}