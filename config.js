
/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MALVIN-XMD~wooXWIIA#X5yoVJq3a6gywJTcaySqWm3N0NPV5aDVLjrRewJjDtc",
// add your Session Id 

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌 status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌 if you want auto reply on status 

AUTO_STATUS_MSG: process.env.AUTO_STATUS__MSG || "*Jᴜsᴛ Nᴏᴡ Sᴛᴀᴛᴜs Sᴇᴇɴ Bʏ Mᴀʟᴠɪɴ-Xᴍᴅ*",
// set the auto reply massage on status reply  

PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   

BOT_NAME: process.env.BOT_NAME || "Geto-Bot",
// add bot namw here for menu

STICKER_NAME: process.env.STICKER_NAME || "Ahmed",
// type sticker pack name 

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// 📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,💘,💞,💕,❣️,💔,❤️‍🔥,💐,🌸,💮,🪷,🏵️,🌹,🌺,🌻,🌼,🌷,🎉,🪀,🧸,🎉,",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "263714757857",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "Mʀ Mᴀʟᴠɪɴ",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "*Geto-bot*",
// add bot owner name
MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/7pg2gp.jpg",
//Don't change menu image ⚠️

ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/7pg2gp.jpg",
// add img for alive msg

LIVE_MSG: process.env.LIVE_MSG || "> ɴᴇᴠᴇʀ ᴀʟɪᴠᴇ ʙᴜᴛ ᴀᴡᴀᴋᴇ Mᴀʟᴠɪɴ-Xᴍᴅ*🤠",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "falce",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "false",
//  1📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

MODE: process.env.MODE || "public ",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_STICKER: process.env.AUTO_STICKER || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_REPLY: process.env.AUTO_REPLY || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_TYPING: process.env.AUTO_TYPING || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

READ_CMD: process.env.READ_CMD || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
};
