const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "deployer", categorie: "General" }, async (dest, zk, commandeOptions) => {
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

  let infoMsg =  `> 𝚈𝚘𝚞𝚛 𝚆𝚊𝚜𝚜𝚞𝚙 ${nomAuteurMessage} 𝚢𝚘𝚞 𝚛𝚎𝚚𝚞𝚎𝚜𝚝𝚎𝚍 𝚏𝚘𝚛 𝚖𝚢 𝚍𝚎𝚙𝚕𝚘𝚢𝚎𝚛😌\n *${s.OWNER_NAME}* 𝚒𝚜 𝚖𝚢 𝚏𝚊𝚟𝚘𝚛𝚒𝚝𝚎 𝚍𝚎𝚙𝚕𝚘𝚢𝚎𝚛🤴👑.\n\n> 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙿𝚑𝚊𝚗𝚝𝚘𝚖 `;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇*, déveloper 𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log(",👑Menu erreur " + e);
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
       
