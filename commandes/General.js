const { zokou } = require("../framework/zokou");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

zokou({ nomCom: "owner", categorie: "General", reaction: "🇨🇵" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number\n* :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

zokou({ nomCom: "dev", categorie: "General", reaction: "🫶" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "𝙺𝚊𝚝𝚊𝚔𝚞𝚛𝚒", numero: "27743266789" },
      { nom: "𝙿𝚑𝚊𝚗𝚝𝚘𝚖", numero: "27748255848" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "𝙷𝙴𝚁𝙴 𝙰𝚁𝙴 𝚃𝙷𝙴 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁𝚂 𝙾𝙵 𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇:\n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("👑Menu erreur " + e);
        repondre("👑Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("👑Menu erreur " + e);
        repondre("👑Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("look on pm sir ")
  await zk.sendMessage(auteurMessage,{text :`𝙿𝙻𝙴𝙰𝚂𝙴 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 𝙱𝚈 𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶 𝙰𝙽𝙳 𝚂𝙷𝙰𝚁𝙸𝙽𝙶 𝙾𝚄𝚁 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝙻𝙸𝙽𝙺
https://whatsapp.com/channel/0029VaxNDYc9MF8sHB7ply2y`},{quoted :ms})

})

zokou({ nomCom: "developer", categorie: "General", reaction: "🦁" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "𝙺𝚊𝚝𝚊𝚔𝚞𝚛𝚒", numero: "27743266789" },
      { nom: "𝙿𝚑𝚊𝚗𝚝𝚘𝚖", numero: "27748255848" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇'𝚜 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁𝚂:\n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("👑Menu erreur " + e);
        repondre("👑Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("👑Menu erreur " + e);
        repondre("👑Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});
    
