
const { zokou } = require('../framework/zokou');

zokou({ nomCom: 'quote', categorie: 'Group' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe, arg } = commandeOptions;
  if (!verifGroupe) {
    repondre('This Command works in groups only!!!');
    return;
  }

  if (!arg[0]) {
    try {
      fetch('https://animechan.xyz/api/random')
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`*𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇 𝚀𝚄𝙾𝚃𝙴𝚂*

🎬 𝙰𝙽𝙸𝙼𝙴: ${quote.anime}
👤 𝙲𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛: ${quote.character}
💬 𝚀𝚞𝚘𝚝𝚎: ${quote.quote}

𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙿𝙷𝙰𝙽𝚃𝙾𝙼`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  } else {
    const query = arg.join(' ');

    try {
      fetch('https://animechan.xyz/api/random/character?name=' + query)
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇

🎬 𝙰𝚗𝚒𝚖𝚎: ${quote.anime}
👤 𝙲𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛: ${quote.character}
💬 𝚀𝚞𝚘𝚝𝚎: ${quote.quote}

𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙿𝙷𝙰𝙽𝚃𝙾𝙼`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  }
});
