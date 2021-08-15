const { Client } = require('discord.js');
global.client = new Client();

global.getEmoji = function (emojiName) {
    const emoji = client.emojis.cache.find(emoji => emoji.name === emojiName);
    return emoji;
};
