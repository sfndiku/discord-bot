require('dotenv').config();
const { Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on ('ready',(c) => {
    console.log(`✅ ${c.user.tag} is ready`)
});

client.on('messageCreate', (message)=>{
    if(message.author.bot){
        return;
    }
    
    console.log(message.createdAt,"=>",message.author.username,": ",message.content," (",message.channel.name,")");
});

//INTERACTIONS PALACE----------------------------------------------------------------------------------

client.on('interactionCreate',(interaction)=> {
    
    if(!interaction.isChatInputCommand())return;

    if(interaction.commandName=='hey'){
        interaction.reply('Well hello there!');
    }
    if(interaction.commandName=='ping'){
        interaction.reply('PONG!');
    }

    if(interaction.commandName=='add'){
        const num1 = interaction.options.get('first-num').value;
        const num2 = interaction.options.get('sec-num').value;
        
        interaction.reply(`Sumis ${num1+num2}`);
    }


});

//INTERACTION PALACE ENDSS-----------------------------------------------------------------------------


client.login(process.env.TOKEN);