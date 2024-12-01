const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu1", categorie: "menu" }, async (dest, zk, commandeOptions) => {
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
*𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇💥 𝙰𝚅𝙰𝙸𝙻𝙰𝙱𝙻𝙴 𝙼𝙴𝙽𝚄𝚂* 


    ▸ *𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚎𝚛* : ${cm.length} 
    ▸ *𝚛𝚘𝚖* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
    ▸ *𝚞𝚙𝚝𝚒𝚖𝚎* : ${os.platform()}
    ▸ *𝚝𝚑𝚎𝚖𝚎* : *𝙿𝚑𝚊𝚗𝚝𝚘𝚖*

> 𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇 💥 𝚆𝙰 𝙱𝙾𝚃
> 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙿𝚑𝚊𝚗𝚝𝚘𝚖 💎\n${readmore}`;
    
let menuMsg = `
> Hello ${nomAuteurMessage},,, Type menu2 to access a list of commands. 
  
╰───────────────────⏣`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Boniphacemd*, déveloper Boniphace md bot" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("👑Menu erreur " + e);
        repondre("👑Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇 💥*, déveloper 𝙿𝚑𝚊𝚗𝚝𝚘𝚖 𝙱𝙾𝚃" }, { quoted: ms });
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
