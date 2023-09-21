const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'lb',
    description: 'shows lb',
    execute: async function (client, message, args){


let money = db.all().filter(i => i.ID.startsWith(`money_${message.guild.id}`)).sort((a, b) => b.data - a.data);
let content = "";
for (let i = 0; i < money.length; i++) {
    let user = client.users.cache.get(money[i].ID.split('_')[2])
console.log(user);

    content +=`${i + 1}. ${user} : ${money[i].data} **Wins** \n`
}
const embed = new Discord.MessageEmbed()
.setTitle(`:trophy: Stream Customs Leaderboard :trophy:`)
.setDescription(content)
.setColor("#00c2ff")
.setTimestamp()
message.channel.send(embed)
    }
}