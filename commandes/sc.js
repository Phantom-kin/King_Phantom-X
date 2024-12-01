const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "git", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
   *𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇 𝙸𝙼𝙿𝙾𝚁𝚃𝙰𝙽𝚃 𝙸𝙽𝙵𝙾* 
❒───────────────────❒
*𝙶𝙸𝚃𝙷𝚄𝙱 𝙻𝙸𝙽𝙺*
> https://github.com/Phantom-kin/King_Phantom-X

*𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙲𝙷𝙰𝙽𝙽𝙴𝙻*
> https://whatsapp.com/channel/0029VaxNDYc9MF8sHB7ply2y


*𝙵𝙾𝚁 𝙼𝙾𝚁𝙴 𝙸𝙽𝙵𝙾 𝚃𝙰𝙿 𝙾𝙽 𝚃𝙷𝙴 𝙻𝙸𝙽𝙺 𝙱𝙴𝙻𝙾𝚆*
> https://github.com/Phantom-kin/King_Phantom-X

╭───────────────────❒
│❒⁠⁠⁠⁠ *𝚁𝙰𝙼* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒⁠⁠⁠⁠ *𝙳𝙴𝚅* : 𝙿𝚑𝚊𝚗𝚝𝚘𝚖
⁠⁠⁠⁠╰───────────────────❒
  `;
    
let menuMsg = `
     𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙿𝚑𝚊𝚗𝚝𝚘𝚖 𝙽𝚊𝚝𝚒𝚘𝚗

❒────────────────────❒`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇*, déveloper 𝙿𝚑𝚊𝚗𝚝𝚘𝚖" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("👑Menu erreur " + e);
        repondre("👑Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇*, déveloper 𝙿𝚑𝚊𝚗𝚝𝚘𝚖" }, { quoted: ms });
    }
    catch (e) {
        console.log("👑Menu erreur " + e);
        repondre("👑Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
