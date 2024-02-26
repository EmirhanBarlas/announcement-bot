const { Client, Intents, MessageActionRow, MessageButton } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES] });

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', async message => {
    if (message.content.toLowerCase() === '!duyuru') {
        const guildMembers = message.guild.members.cache.filter(member => !member.user.bot);
        guildMembers.forEach(async member => {
            try {
                await member.send('Bu bir duyurudur!');
            } catch (error) {
                console.error(`DM gönderilemedi: ${error}`);
            }
        });
    }
});

client.login('TOKENI_BURAYA_GIRCEN');
