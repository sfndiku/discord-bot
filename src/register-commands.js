require('dotenv').config();
const { REST , Routes , ApplicationCommandOptionType } = require('discord.js');



const commands = [
    {
        name: 'hey',
        description: 'replies with hey!',
    },
    {
        name: 'ping',
        description: 'replies with pong!',
    },
    {
        name: 'add',
        description: 'add 2 numbers',
        options: [
            {
                name:'first-num',
                description:'first num',
                type:ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name:'sec-num',
                description:'second num',
                type:ApplicationCommandOptionType.Number,
                required:true,
            },
        ]
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