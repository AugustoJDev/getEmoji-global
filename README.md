# ![poppy](https://cdn.glitch.com/d5849b6d-b525-43f0-a87c-280ff619d588%2FWebp.net-resizeimage%20(2).png?v=1627787432690) getEmoji() Global - [discord.js](https://discord.js.org/#/) ![poppy](https://cdn.glitch.com/d5849b6d-b525-43f0-a87c-280ff619d588%2FWebp.net-resizeimage%20(2).png?v=1627787432690)
Script desenvolvido para pegar emojis facilmente sem precisar digitar o famoso:
~~~javascript
const emoji = <client>.emojis.cache.get(...);
~~~
todas as vezes que quiser usar um emoji em algum lugar.

### 📁 Sessões
- 📕 [Nota Importante](#notes)
- 📚 [Dependências](#dependences)
- 📋 [Como Usar](#introduction)
  - [Parte 1](#part_1)
  - [Parte 2](#part_2)
  - [Parte 3](#part_3)
- 📪 [Sugestões/Bug Reports](#contact)
- 😳 [??](#pegadinhagarai)

<a name="notes"></a>
## ⚠ **Nota Importante**
Não ensinarei a fazer o uso do script ou tirarei dúvidas como: `Como encaixo ele no meu código?` ou `"Error: Cannot find module './getEmoji.js'" como resolvo?`, pois se você está aqui é porque sabe o que está fazendo e está apenas em busca de algo pra facilitar sua vida.

<a name="dependences"></a>
## 📚 Dependências
Nome | Versão | Download |
--------- | ------ | ------ |
[discord.js](https://www.npmjs.com/package/discord.js/v/12.1.1) | 12.1.1 | discord.js@12.1.1 |

<a name="introduction"></a>
## 📕 Como Usar
<a name="part_1"></a>
### Parte 1
Crie um arquivo `.js` com o nome desejado, ele será o nosso protagonista no código. ( Ex.: getEmoji.js )<br/>
Com o arquivo criado, cole o código:
~~~javascript
const { Client } = require('discord.js');
global.client = new Client();

global.getEmoji = function (emojiName) {
    const emoji = client.emojis.cache.find(emoji => emoji.name === emojiName);
    return emoji;
};
~~~
<a name="part_2"></a>
### Parte 2
No topo do seu `<main>.js`, digite: `require('./getEmoji.js');`. Exemplo:
~~~javascript
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

[...]
~~~
<a name="part_3"></a>
### Parte 3
Depois de tudo feito, para chamar o emoji desejado, basta escrever `getEmoji('nome do emoji');` em qualquer lugar do seu código, e ele retornará o emoji desejado. Exemplo:
~~~javascript
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
~~~

<a name="contact"></a>
## 📪 | Sugestões ou Bug Reports?
* Discord - Doctor.#0666
* E-mail - winchesterdeveloper@gmail.com

<a name="pegadinhagarai"></a>
## 😳 Download da Source Completa
Para baixar uma source completa com exemplos de comandos, eventos, databases, etc; basta [CLICAR AQUI](https://www.youtube.com/watch?v=dQw4w9WgXcQ) que será redirecionado a nossa página oficial para fazer o download dos arquivos.
