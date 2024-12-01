const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

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



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `

╔════➻⊷➻════──❂
║ ⦿━═━❖ *𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇* ❖━═━⦿
║ ┃✯𝙼𝚘𝚍𝚎: ${mode}
║ ┃✯𝚄𝚜𝚎𝚛: ${s.OWNER_NAME}
║ ┃✯𝙻𝚒𝚋𝚛𝚊𝚛𝚢: 𝙱𝚊𝚒𝚕𝚎𝚢𝚜
║ ┃✯𝙿𝚛𝚎𝚏𝚒𝚡: ${s.PREFIXE}
║ ┃✯𝙳𝚊𝚝𝚎: ${date}
║ ┃✯𝚃𝚒𝚖𝚎: ${temps}
║ ┃✯𝚃𝚘𝚘𝚕𝚜: ${cm.length}
║ ┃✯𝚁𝚊𝚖: ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
║ ┃✯𝙷𝚘𝚜𝚝: ${os.platform()}
║ ⦿━━━━═════━━━━⦿
╚════➻⊷➻════───❂\n\n`;


    

let menuMsg = `
╭──━━✣━━────❍ 
│╔════➳════╗
│║❖ 𝙿𝙷𝙰𝙽𝚃𝙾𝙼_𝙽𝙰𝚃𝙸𝙾𝙽
│╚════➳════╝
╰──━━✣━━────❍\n


`;



    for (const cat in coms) {

        menuMsg += ` ╔═━━═❍ _*${cat}*_ ❍═━━══➻`;

        for (const cmd of coms[cat]) {
            
            menuMsg += `
║❖ ${cmd}`;

        }

        menuMsg += `
╚══━━━━════───➳
❍══════✣══════❍ 
║❖❖❖❖❖❖❖❖❖❖❖║
❍══════✣══════❍ 
✣━━━━━━━━━━━━━✣\n`

    }



    menuMsg += `


 ❖═══════════════❖
 ║✣ *𝙿𝙷𝙰𝙽𝚃𝙾𝙼_𝙽𝙰𝚃𝙸𝙾𝙽*
 ║✣ *𝙴𝙽𝙹𝙾𝚈*
 ❖═══════════════❖
 ❍━━━━═══════━━━━❍ 
 ┃╔══════════════╗
 ┃║❖ 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙿𝚑𝚊𝚗𝚝𝚘𝚖
 ┃╚══════════════╝
 ❍━━━━═══════━━━━❍ \n


`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-BOT*, déveloper Cod3uchiha" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-bot*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
