console.log('Android')

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login('MTAxNDY1NzA4NjQ1MTM1OTgxNA.GUrCTA.zfrxy_i_juh9LPpSA6zVlazcuTopvVL4Chq_DE');

// creating a callback to know when it is successfully authenticated
client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('its okay!')
}

// another event handler, event being message, that happens anytime anyone sends a message to the discord

client.on('message', gotMessage);

function gotMessage(msg) {
  console.log(msg.content);
  if (msg.content == 'hello') {
    msg.reply('how you doing!');
  }
}
