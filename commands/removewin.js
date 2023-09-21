const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'removewin',
    description: 'removewins',
    execute: async function (client, message, args){
        const executor = await message.guild.members.cache.get(message.author.id);
        
        if (!executor.roles.cache.has('767444346441170946') && !executor.roles.cache.has('767444346441170945') && !executor.roles.cache.has('767444346441170944') && !executor.roles.cache.has('711115904666042399')) {
            return message.reply('You cannot run this command.')
          
          

            
       } else {
            const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {
                const removedd = new Discord.MessageEmbed()
                    .setAuthor(`Successful`)
                    .setDescription( `**1** host was removed.  `)
                    .setColor("#00c2ff");
                await message.channel.send(removedd);

                const getGuild = await client.guilds.cache.get('469577199519924234');
                const getChannel = await getGuild.channels.cache.get('729925066808229929');

                await getChannel.send(`<@${executor.id}> removed \`1\` host from <@${mentioned.id}>`);

                db.subtract(`money_${message.guild.id}_${mentioned.id}`, 1);
                console.log(`remove host cmd was ran`)
            } else {
                return message.reply('**Error:** You need to @ a user :warning:');
            }
        }
    }
};