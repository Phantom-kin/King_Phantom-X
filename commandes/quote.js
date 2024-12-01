const { zokou } = require('../framework/zokou');

zokou({ nomCom: 'quote', categorie: 'Fun' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe, arg } = commandeOptions;
  if (!verifGroupe) {
    repondre('Commande réservée au groupe uniquement');
    return;
  }

  if (!arg[0]) {
    try {
      fetch('https://animechan.xyz/api/random')
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`╔══════════════════════════╗
║   𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇             ║
╚══════════════════════════╝

🎬 𝙰𝚗𝚒𝚖𝚎: ${quote.anime}
👤 𝙲𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛: ${quote.character}
💬 𝚀𝚞𝚘𝚝𝚎: ${quote.quote}

𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙿𝚑𝚊𝚗𝚝𝚘𝚖`);
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
          repondre(`╔══════════════════════════╗
║   𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇               ║
╚══════════════════════════╝

🎬 𝙰𝚗𝚒𝚖𝚎: ${quote.anime}
👤 𝙲𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛: ${quote.character}
💬 𝚀𝚞𝚘𝚝𝚎: ${quote.quote}

𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙿𝚑𝚊𝚗𝚝𝚘𝚖`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  }
});
