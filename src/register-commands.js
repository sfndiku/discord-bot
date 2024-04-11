require('dotenv').config();
const { REST , Routes , ApplicationCommandOptionType } = require('discord.js');



const commands = [
    {
        name: 'embed',
        description: 'sends and embed!'
    },
];



const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commmands...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            {body: commands}
        );

        console.log('slash commands were registered succesfully');
    } catch (error){
        console.error(`There was an error: ${error}`);
    }
})();