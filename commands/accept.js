const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!rUser) return message.channel.send("Couldn't find user.");

    let rreason = args.join(" ").slice(22);



    let reportEmbed = new Discord.RichEmbed()

    .setDescription("Reports")

    .setColor("#78fffa")

    .addField("Ticket Creator", `${rUser}`)

    .addField("Moderator / Admin", `${message.author}`)

    .addField("Time", message.createdAt)

    .addField("Staff Note", rreason)

    .addField("Status", ":white_check_mark: - Solved");



    let reportschannel = message.guild.channels.find(`name`, "solved-reports");

    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");





    message.delete().catch(O_o=>{});

    reportschannel.send(reportEmbed);



}

 

module.exports.help = {

  name: "accept"

}