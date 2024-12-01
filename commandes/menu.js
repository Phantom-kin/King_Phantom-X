const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu3", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

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

┏❐  ⌜ 👑𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇👑⌟  ❐
┃
┃    𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇 𝙰 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 
┃𝙳𝙴𝚂𝙸𝙶𝙽𝙴𝙳 𝙱𝚈 𝚃𝙷𝙴 𝙿𝙷𝙰𝙽𝚃𝙾𝙼 𝙽𝙰𝚃𝙸𝙾𝙽
┃
┃ 𝙼𝚘𝚍𝚎: ${mode}
┃ 𝚄𝚜𝚎𝚛: ${s.OWNER_NAME} 
┃ 
┗❐\n\n`;

let menuMsg = `
┏❐  ⌜𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇
┃
┃    𝙱𝚈 𝙿𝙷𝙰𝙽𝚃𝙾𝙼
┗❐\n




𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇 𝚌𝚖𝚍𝚜
`;



    for (const cat in coms) {

        menuMsg += ` ┏❐  ⌜⌟  ❐ ${cat}`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃${cmd}`;

        }

        menuMsg += `
┗❐\n`

    }



    menuMsg += `


︎┏━━━━━━━━━━━━━━┓
️┣❏𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇 
┣❏𝙱𝚢 𝙿𝚑𝚊𝚗𝚝𝚘𝚖 
┗━━━━━━━━━━━━━━┛\n


┏━━━━━━━━━━━━━━┓
┃𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙿𝙷𝙰𝙽𝚃𝙾𝙼
┗━━━━━━━━━━━━━━┛\n


`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis 𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇, déveloper Fredie" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("👑Menu error " + e);

        repondre("👑Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis 𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇, déveloper 𝙿𝚑𝚊𝚗𝚝𝚘𝚖" }, { quoted: ms });

    }

    catch (e) {

        console.log("👑Menu error " + e);

        repondre("👑Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
          
