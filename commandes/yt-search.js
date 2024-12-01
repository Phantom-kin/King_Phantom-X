const { zokou } = require("../framework/zokou");
const { getytlink, ytdwn } = require("../framework/ytdl-core");
const yts = require("yt-search");
const ytdl = require('ytdl-core');
const fs = require('fs');
  
zokou({ nomCom: "yts", categorie: "Search", reaction: "💎" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  const query = arg.join(" ");

  if (!query[0]) {
    repondre("𝙿𝚕𝚎𝚊𝚜𝚎 𝙿𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚀𝚞𝚎𝚛𝚢!!!");
    return;
  }

  try {
    const info = await yts(query);
    const resultat = info.videos;

    let captions = "";
for (let i = 0; i < 15; i++) {
  captions += `╭━━𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙼𝙴𝙽𝚄━━╮\n${i + 1}. 𝚃𝚒𝚝𝚕𝚎: ${resultat[i].title}\n𝚃𝚒𝚖𝚎 : ${resultat[i].timestamp}\n𝚄𝚛𝚕: ${resultat[i].url}\n`;
}
    captions += "\n======\n*𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙿𝚑𝚊𝚗𝚝𝚘𝚖*";

    // repondre(captions)
    zk.sendMessage(dest, { image: { url: resultat[0].thumbnail }, caption: captions }, { quoted: ms });
  } catch (error) {
    repondre("Erreur lors de la procédure : " + error);
  }
});

zokou({
  nomCom: "ytmp4",
  categorie: "Download",
  reaction: "👊"
}, async (origineMessage, zk, commandeOptions) => {
  const { arg, ms, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre("𝚒𝚗𝚜𝚎𝚛𝚝 𝚊 𝚢𝚘𝚞𝚝𝚞𝚋𝚎 𝚕𝚒𝚗𝚔");
    return;
  }

  const topo = arg.join(" ");
  try {
    /* const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const Element = videos[0];

      let InfoMess = {
        image: { url: videos[0].thumbnail },
        caption: `*nom de la vidéo :* _${Element.title}_
*Durée :* _${Element.timestamp}_
*Lien :* _${Element.url}_
_*En cours de téléchargement...*_\n\n`
      };

      zk.sendMessage(origineMessage, InfoMess, { quoted: ms });
    */

    // Obtenir les informations de la vidéo à partir du lien YouTube
    const videoInfo = await ytdl.getInfo(topo);
    // Format vidéo avec la meilleure qualité disponible
    const format = ytdl.chooseFormat(videoInfo.formats, { quality: '18' });
    // Télécharger la vidéo
    const videoStream = ytdl.downloadFromInfo(videoInfo, { format });

    // Nom du fichier local pour sauvegarder la vidéo
    const filename = 'video.mp4';

    // Écrire le flux vidéo dans un fichier local
    const fileStream = fs.createWriteStream(filename);
    videoStream.pipe(fileStream);

    fileStream.on('finish', () => {
      // Envoi du fichier vidéo en utilisant l'URL du fichier local
      zk.sendMessage(origineMessage, { video: { url: `./${filename}` }, caption: "*𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙺𝙸𝙽𝙶_𝙿𝙷𝙰𝙽𝚃𝙾𝙼-𝚇*", gifPlayback: false }, { quoted: ms });

    });

    fileStream.on('error', (error) => {
      console.error('Erreur lors de l\'écriture du fichier vidéo :', error);
      repondre('Une erreur est survenue lors de l\'écriture du fichier vidéo.');
    });

  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.' + error);
  }
});

zokou({
  nomCom: "ytmp3",
  categorie: "Download",
  reaction: "💿"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("𝙸𝚗𝚜𝚎𝚛𝚝 𝚊 𝚢𝚘𝚞𝚝𝚞𝚋𝚎 𝚕𝚒𝚗𝚔");
    return;
  }

  try {
    let topo = arg.join(" ");

    const audioStream = ytdl(topo, { filter: 'audioonly', quality: 'highestaudio' });

    // Nom du fichier local pour sauvegarder le fichier audio
    const filename = 'audio.mp3';

    // Écrire le flux audio dans un fichier local
    const fileStream = fs.createWriteStream(filename);
    audioStream.pipe(fileStream);

    fileStream.on('finish', () => {
      // Envoi du fichier audio en utilisant l'URL du fichier local
      zk.sendMessage(origineMessage, { audio: { url: `./${filename}` }, mimetype: 'audio/mp4' }, { quoted: ms, ptt: false });
      console.log("Envoi du fichier audio terminé !");
    });

    fileStream.on('error', (error) => {
      console.error('Erreur lors de l\'écriture du fichier audio :', error);
      repondre('Une erreur est survenue lors de l\'écriture du fichier audio.');
    });

  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});


zokou({
  nomCom: "mp3",
  categorie: "Download",
  reaction: "💿"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Insérez un lien YouTube ou une URL de vidéo.");
    return;
  }

  try {
    const videoUrl = arg[0];

    const isYoutubeVideo = ytdl.validateURL(videoUrl);

    let audioUrl = '';

    if (isYoutubeVideo) {
      const audioInfo = await ytdl.getInfo(videoUrl);
      const audioFormat = ytdl.chooseFormat(audioInfo.formats, { filter: 'audioonly' });

      if (!audioFormat) {
        repondre("Impossible de trouver un format audio pour cette vidéo YouTube.");
        return;
      }

      audioUrl = audioFormat.url;
    } else {
      const { stdout } = await youtubedl(videoUrl, {
        extractAudio: true,
        audioFormat: 'mp3',
        noWarnings: true,
        noCallHome: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true
      });

      audioUrl = stdout.trim();
    }

    // Envoi du fichier audio en utilisant l'URL
    zk.sendMessage(origineMessage, { audio: { url: audioUrl }, mimetype: 'audio/mp3' }, { quoted: ms, ptt: false });
    console.log("Envoi du fichier audio terminé !");
  } catch (error) {
    console.error('Erreur lors de la conversion ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la conversion ou du téléchargement de la vidéo.');
  }
});
