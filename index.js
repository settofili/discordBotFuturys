// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');

// I am supposed to make use of .env but this app will be deleted after the interview
const { token } = require('./config.json');


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run thos code (only once)
client.once('ready', () => {
    console.log('Ready!');
});


// Checking if an interaction is a chat input command and replying
// There is a better way to do it rather than using the if statement as this will not be good for large projects

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});


// Login to Discord with your client's token
client.login(token);