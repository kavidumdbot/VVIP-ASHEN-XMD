const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const imageUrl = config.PICTURE;


const os = require("os");
const { runtime } = require('../lib/functions');


cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "commands"],
    desc: "Get Bot Menu",
    category: "main",
    use: '.menu',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `
*╭───────────────────────────●⫸*
   ☘ 𝑯𝑰 𝑾𝑬𝑳𝑪𝑶𝑴𝑬..🦁 *${pushname}*
✪     *${config.NAME} 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 𝑳𝑰𝑺𝑻*
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━⫸




*╭────────────●●►*
*│🅻︎🅸︎🆂︎🆃︎ 🅼︎🅴︎🅽︎🆄︎......💀*
*│⟻⟻⟻⟻⟻⟻⟻*
*│1. 𝘿𝙤𝙬𝙣𝙡𝙤𝙙 𝙢𝙚𝙣𝙪  📥*
*│2. 𝗦𝙚𝙖𝙧𝙘𝙝 𝙢𝙚𝙣𝙪 🔍* 
*│3. 𝘼𝙞 𝙢𝙚𝙣𝙪 🧠*
*│4. 𝗢𝙬𝙚𝙣𝙚𝙧 𝙢𝙚𝙣𝙪 👨‍💻*
*│5. 𝙂𝙧𝙤𝙪𝙥 𝙢𝙚𝙣𝙪 👥*
*│6. 𝗜𝗻𝗳𝗼 𝗺𝗲𝗻𝘂 🧧*
*│7. 𝗙𝘂𝗻 𝗺𝗲𝗻𝘂 😹*
*│8. 𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗺𝗲𝗻𝘂 ❇️*
*│9. 𝗪𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗺𝗲𝗻𝘂🏞️*
*│10. 𝗡𝗲𝘄𝘀 𝗺𝗲𝗻𝘂🏁*
*╰────────────●●►*
𝐑ᴇᴘʟʏ 𝐓ʜᴇ 𝐍ᴜᴍʙᴇʀ 𝐘ᴏᴜ 𝐖ᴀɴᴛ 𝐓ᴏ 𝐒ᴇʟᴇᴄᴛ.......👁️🦁
`;

await conn.sendMessage(from, {
        video: {
            url: 'https://github.com/Sayurami/Api-you/raw/refs/heads/main/Gojo-Satoru-X-Jujutsu-Kaisen-Full-Screen-Status-Videos.mp4?raw=true'
        },
        mimetype: 'video/mp4',
        ptv: true
    }, { quoted: mek });

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
*╭──❒⁠⁠⁠⁠* *📥 𝐃ᴏᴡɴʟ 𝐎ᴀᴅᴇʀ-𝐌ᴇɴᴜ 📥* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *𝐬𝚘𝚗𝚐*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *song2*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚢𝚝𝚟*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *ytsearch/youtube*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚍𝚘𝚠𝚗𝚕𝚘𝚍*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚏𝚋*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚊𝚙𝚔*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *apk2*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚐𝚍𝚛𝚒𝚟𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚖𝚘𝚟𝚒𝚎*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *cine*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚜𝚕𝚊𝚗𝚒𝚖𝚎𝚌𝚕𝚞𝚋*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *sinhaladub*
 ╰───────────────✵✵
 
  ╭────────✵✵
*┋*  *pastpp*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *tt/tiktok*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *tiktoks/tiktoksearch*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *twitter*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *mediafire*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *ig/instragam*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *pornhub*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *xnxxdl*
 ╰───────────────✵✵
╭────────✵✵
*┋*  *xvdl*
 ╰───────────────✵✵
 
 ╭────────✵✵
*┋*  *gdrive2*
 ╰───────────────✵✵ 
 ╭────────✵✵
*┋*  *pinterest*
 ╰───────────────✵✵ 
*┋*  *mega*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *img*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *img3*
 ╰───────────────✵✵

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔎 𝐒ᴇᴀʀᴄʜ-𝐌ᴇɴᴜ 🔍* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *weather*
 ╰───────────────✵✵ ╭────────✵✵
*┋*  *countryinfo/country*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *templist*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *tempnumber*
 ╰───────────────✵✵ ╭────────✵✵
*┋*  *otpbox*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *hentai*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *npm*
 ╰───────────────✵✵


> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '3': // AI MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🧠 𝐀ɪ-𝐌ᴇɴᴜ  🧠* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *𝐚𝚒*
 ╰───────────────✵✵
 
 ╭────────✵✵
*┋*  *𝐠𝚎𝚖𝚒𝚗𝚒*
 ╰───────────────✵✵

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👨‍💻 𝐎ᴡɴᴇʀ-𝐌ᴇɴᴜ 👨‍💻* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *getpp*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *vv*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *spam*
       * 🚫🚫☠️*
 ╰───────────────✵✵

 ╭────────✵✵
*┋*  *𝐛𝚕𝚘𝚌𝚔*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐮𝚗𝚋𝚕𝚘𝚌𝚔*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐣𝚒𝚍*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚏𝚘𝚛𝚠𝚊𝚛𝚍*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *ginfo*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *gitclone*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *githubinfo*
 ╰───────────────✵✵
 
> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 𝐆ʀᴏᴜᴘ-𝐌ᴇɴᴜ 👥* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *𝐦𝚞𝚝𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐮𝚗𝚖𝚞𝚝𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐩𝚛𝚘𝚖𝚘𝚝𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐝𝚎𝚖𝚘𝚝𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐝𝚎𝚕*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐣𝚘𝚒𝚗*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *requests*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *tagall*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *accept*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *kick*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *reject*
 ╰───────────────✵✵
 
 ╭────────✵✵
*┋*  *setdesc*
 ╰───────────────✵✵

 ╭────────✵✵
*┋*  *leave*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *invite*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *add*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *end*
 ╰───────────────✵✵

 ╭────────✵✵
*┋*  *tagadmin*
 ╰───────────────✵✵ 
  ╭────────✵✵
*┋*  *setname*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *opentime*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *closetime*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *hidetag*
 ╰───────────────✵✵
 
 
 

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *💾 𝐈ɴꜰᴏ-𝐌ᴇɴᴜ 💾* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *𝐚𝚕𝚒𝚟𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐦𝚎𝚗𝚞*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐨𝚠𝚗𝚎𝚛*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐩𝚒𝚗𝚐*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *ping2*
 ╰───────────────✵✵
 
  ╭────────✵✵
*┋*  *Setting*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *system*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *restart*
 ╰───────────────✵✵
*╰─────────────────❒*

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;                   break;
                    case '7': // FUN MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔄 𝐅un-𝐌ᴇɴᴜ 🔄* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *hack*
 ╰───────────────✵✵
 

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '8': // CONVERT MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *✳️ Convert-𝐌ᴇɴᴜ ✳️* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *photo*
       *Convert sticker to image*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *translate*
       *Translate text between languages*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *sticker*
       *Convert image to sticker*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *tempmail*
      *Generate a temporary email address*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *audioto*
       *convert video to audio*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *attp*
       *Text to convert sticker*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *logo*
       *Generate logos based on user input*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *url*
      *Convert media to Catbox URL*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *font*
      *Convert text into various fonts*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *tts2*
          *Convert text to speech with different                                                voices*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *tts3*
       *Convert text to speech with different                   voices*
 ╰───────────────✵✵


> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '9': //  WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ 𝐖ᴀʟʟᴘᴀᴘᴇʀꜱ-𝐌ᴇɴᴜ 🏜️* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *loli*
       *Download anime loli images*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *waifu*
       *Download anime waifu images*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *neko*
       *Download anime neko images*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *megumin*
      *Download anime megumin images*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *maid*
       *Download anime maid images*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *awoo*
       *Download anime awoo images*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *pinterest*
        *downlod images*
 ╰───────────────✵✵
 

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '10': // NEWS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 𝐍ews-𝐌ᴇɴᴜ 🌐* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *news*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *derana*
 ╰───────────────✵✵

*╰─────────────────❒*

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '11': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📌 𝐀𝚞𝚝𝚘 𝐌ᴇɴᴜ 📌* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
*╰─────────────────❒*

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-10)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠ An error occurred: ${e.message}*`);
    }
});
