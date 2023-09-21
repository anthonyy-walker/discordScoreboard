const { timeStamp } = require('console');
const Discord = require('discord.js');
const fs = require('fs');
const Message = [];
const db = require('quick.db');
const prefix = '!r';
module.exports = {
    name: 'set',
    description: 'starts modmail',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);

        if (!executor.roles.cache.has('767444346441170946') && !executor.roles.cache.has('767444346441170945') && !executor.roles.cache.has('767444346441170944') && !executor.roles.cache.has('711115904666042399')) {
            return message.reply('Nope')
        } else {
            let status = args.join(" ");

            client.user.setPresence({ activity: { name: `${status}` }, status: 'online' })
            let e7 = new Discord.MessageEmbed()
            .setDescription(`Updated the status to  **${status}** `)

            .setTimestamp()
            message.channel.send(e7);
        }
    }
}