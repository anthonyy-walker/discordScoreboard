module.exports = {
	name: 'reset',
	description: 'resets the lb',
    execute: async function (client, message, args){
    const Discord = require('discord.js');
    const db = require('quick.db')
    const executor = await message.guild.members.cache.get(message.author.id);
    const getGuild = await client.guilds.cache.get('469577199519924234');
    const getChannel = await getGuild.channels.cache.get('729925066808229929');

    if (!executor.roles.cache.has('767444346441170946') && !executor.roles.cache.has('767444346441170945') && !executor.roles.cache.has('767444346441170944') && !executor.roles.cache.has('711115904666042399')) {
        return message.reply('Only Rubiks can run this command.')
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor(` Message Log`, message.guild.iconURL)
    .setDescription('Reset Completed Successfully! :outbox_tray:  ')
    .setColor("#00c2ff")
    .setTimestamp()

    message.channel.send(embed)
    await getChannel.send(`<@${executor.id}> reset the leaderboard :outbox_tray:`);

    db.all().forEach(i => db.delete(i.ID))
    console.log(`reset complete`)

    }}
