const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invoice')
        .setDescription('Base command for the invoice bot.'),
    async execute(interaction) {
        await interaction.reply(`Output`)
    }
}