const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'addwin',
    description: 'addes win',
    execute: async function (client, message, args){
        const executor = await message.guild.members.cache.get(message.author.id);
        
        if (!executor.roles.cache.has('767444346441170946') && !executor.roles.cache.has('767444346441170945') && !executor.roles.cache.has('767444346441170944') && !executor.roles.cache.has('711115904666042399')) {
            return message.reply('You cannot run this command.')
          
          

            
       } else {
            
            const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {
                const added = new Discord.MessageEmbed()
                    .setAuthor(`Successful`)
                    .setDescription( `**1** win was added. `)
                    .setColor("#00c2ff");
                await message.channel.send(added);

                db.add(`money_${message.guild.id}_${mentioned.id}`, 1);
                console.log(`add host cmd was ran`)

                const getGuild = await client.guilds.cache.get('469577199519924234');
                const getChannel = await getGuild.channels.cache.get('729925066808229929');

                await getChannel.send(`<@${executor.id}> gave \`1\` host to <@${mentioned.id}>`);

            
            } else {
                const added = new Discord.MessageEmbed()
                    .setAuthor(`Error`)
                    .setDescription( `You need to @ a user `)
                    .setColor("#00c2ff");
                return message.channel.send(added);
            }
        }
    }
};