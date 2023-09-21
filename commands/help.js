module.exports = {
	name: 'help',
    description: 'shows the help commands',
    execute: async function (client, message, args){
        const Discord = require('discord.js');

            const exampleEmbed = {

            color: "#00c2ff",
                title: '**Help**',
            
        
                thumbnail: {
                    url: 'https://cdn.discordapp.com/avatars/276902270774542346/5c836366888dd67f68e7cae425bc1124.webp?size=128',
                },
                fields: [
                    {
                        name: '**!ADDWIN @user** ',
                        value: 'Will add a win to a user.',
                    },
                    {
                        name: '**!REMOVEWIN @user** ',
                        value: 'Will remove a win from a user.',
                               
                    },
                    {
                        name: '**!RESET** ',
                        value: 'Will reset the leaderboard.',
                               
                    },
                    {
                        name: '**!LB**',
                        value: 'Will display the leaderboard.',
                    },
                    
           
                ],
              
             
                timestamp: new Date(),
                footer: {
                    text: 'Developed by: Ezy Est#0001',
                    icon_url: 'https://cdn.discordapp.com/avatars/593911112286601236/a_967046cfea71ef627e2eb4dc87aafeb0.gif?size=128',
        
                },
            };
            
            await message.channel.send({ embed: exampleEmbed });
             
        }}