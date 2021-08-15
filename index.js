require('./getEmoji.js');
require('colors');

client.login('Sua token aqui');

client.on('ready', () => {

  const loginMessage = `╔╦══• •✠•❀•✠ • •══╦╗\n` +
                       `◇◆ ${client.user.tag}◆◇\n` +
                       `  ⊱✠⊰ Users: ${client.users.cache.size} ⊱✠⊰\n` +
                       ` ⊱✠⊰ Guilds: ${client.guilds.cache.size} ⊱✠⊰\n` +
                       `⊱✠⊰ Channels: ${client.channels.cache.size} ⊱✠⊰\n` +
                       `╚╩══• •✠•❀•✠ • •══╩╝`;

  console.log(`${loginMessage}`.bgGreen);
});
 
client.on('message', msg => {
  if (msg.content.includes('/emoji')) {
    const args = msg.content.split(' ')[1];

    console.log(getEmoji(args));
    /*
    GuildEmoji {
      animated: false,
      name: 'lulu',
      id: '876280289624739871',
      deleted: false,
      [...]
    */
    console.log(getEmoji(args).id); // 876280289624739871
    console.log(getEmoji(args).name); // exemplo: winchester
    console.log(getEmoji(args).animated); // false

    msg.channel.send(`${getEmoji(args)}`); // emoji na mensagem ( Ex.: https://cdn.discordapp.com/attachments/840393475265658913/876289419974443068/unknown.png )
  }
});
