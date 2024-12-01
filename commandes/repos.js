"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Phantom-kin/King_Phantom-X';
  const img = 'https://files.catbox.moe/5zxe1k.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `𝚈𝚘 𝚆𝚊𝚜𝚜𝚞𝚙 𝚃𝚑𝚒𝚜 𝚒𝚜 𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇\n 𝙵𝚘𝚕𝚕𝚘𝚠 𝚊𝚗𝚍 𝚂𝚞𝚙𝚙𝚘𝚛𝚝 𝙾𝚞𝚛 𝙲𝚑𝚊𝚗𝚗𝚎𝚕 
      https://whatsapp.com/channel/0029VaxNDYc9MF8sHB7ply2y

🗼 *𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝚈:* ${data.html_url}
💫 *𝚂𝚃𝙰𝚁𝚂:* ${repoInfo.stars}
🧧 *𝙵𝙾𝚁𝙺𝚂:* ${repoInfo.forks}
📅 *𝚁𝙴𝙻𝙴𝙰𝚂𝙴 𝙳𝙰𝚃𝙴:* ${releaseDate}
🕐 *𝚄𝙿𝙳𝙰𝚃𝙴 𝙾𝙽:* ${repoInfo.lastUpdate}
🙊 *𝙾𝚆𝙽𝙴𝚁:* 𝙿𝚑𝚊𝚗𝚝𝚘𝚖
🍃 *𝚃𝙷𝙴𝙼𝙴:* 𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇

__________________________________
            *𝙼𝚊𝚍𝚎 𝚆𝚒𝚝𝚑 𝙿𝙷𝙰𝙽𝚃𝙾𝙼 𝙽𝙰𝚃𝙸𝙾𝙽*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
