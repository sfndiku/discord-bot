require('dotenv').config();
const { Client, IntentsBitField , EmbedBuilder } = require('discord.js');

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on ('ready',(c) => {
    console.log(`✅ ${c.user.tag} is ready to go `)
});

client.on('messageCreate', (message)=>{
    if(message.author.bot){
        return;
    }
    
    console.log(message.createdAt,"(",message.guildId,")","=>",message.author.username,": ",message.content," (",message.channel.name,")");
});

//INTERACTIONS PALACE----------------------------------------------------------------------------------

client.on('interactionCreate',(interaction)=> {
    
    if(!interaction.isChatInputCommand())return;

    if(interaction.commandName==='embed'){
        const embed = new EmbedBuilder()
        .setTitle('Embed title')
        .setDescription('This is an embed duh! ')
        .setColor("Random")
        .addFields(
            {
                name:'Fieldtitle',
                value:'Some random value',
                inline:true,
            },
            {
                name:'Fieldtitle',
                value:'Some random value',
                inline:true,
            }
    )

    interaction.reply({embeds: [embed]});
    };

    if(interaction.commandName==='ping'){
        interaction.reply(`Ping?  Pong to you ${interaction.user.globalName}`);
    }

});

//INTERACTION PALACE ENDSS-----------------------------------------------------------------------------


client.login(process.env.TOKEN);