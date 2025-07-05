const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "UEsDBBQAAAgIABBg5VrHNcReUAQAAHAHAAAKAAAAY3JlZHMuanNvbpVU2Y7iOBT9F7+CmuwLUkkTQja2EEJYatQPhjiJi2zYDkVo8e+jUFVdPdJMT02eHNu699yz+AcoK0zRFLVg+APUBF8gQ92StTUCQzBqkgQR0AcxZBAMQWjszN0k0BbPkenks*g2L6rsqvjJwnBx4xb2Ptgn0tasOe8J3Pugbg45Pv6m4JW6jh7yyji7NjVvRIK1oL21EhX5i++oJylvDxq61mpiWE*g3lWEmOAyteoMFYjAfIraJcTka*Cxj7AnclmPwaCqdtxaylOnFJ*rsxBLqTFmrS8U69pXN9HX4HPY3bY3byutsT4QSmnFK2hgmYiG12JwC6e6oLur1dyajYw3+BSnJYq9GJUMs*bLvFeervb0V2rL7HhJbDsYX5vccIVIk8SrwNOlmgi+uJB0nvsa8IhGcBaZ+7BsyPKq+ofcsU+LWSJvHafK5aQnB4N10Giz*G*Al+TDK6f*w*vUOpkkgUGA5ePrSdhck6xeK1Ich60wOp8g51nL0pZu65x+DT5qdxW*rS6D11kjXfiZ6elFrQd+rYnr3dxa3PB0dCMJV7reJ3zIGvJblEeEpLDeFET0cmu64kJJM8WeI*kMMdWWRGNBw5kz0PxdMDUNhRiD1Wp8yGGrTzI9tVdSo2yLvYICMQorz1anzeoleHpMdEKtF4Mhf+8DglJMGYEMV+VjT9f6AMaXEB0JYg96AbezJmuZjJ9hFCzR6fAszGN*lG3kVcXNDnjpT0dq7Fpna609gT6oSXVElKLYxZRVpJ0jSmGKKBj++b0PSnRlb8J17US+DxJMKIvKps4rGH+o+nEIj8eqKVnYlkezWyAChtznNmIMlynteGxKSI4ZviAzg4yCYQJzin5OiAiKwZCRBv1MrVnFHfGGIOwNR7VAHxQPQXAMhkCXVEWRJFFWuKEk*EG*vXZVYV1*KxEDfZA*bgmypMuaoGicomqS1t3sDu4*AXb1YsQgzikYAnN2UdvpfGwtUFnP545jWKlhpgb4HOjDGW*M7xL6slQ1pSdmbZyON*pBlk7qtmDB1qV4M8ifYe2tp+P9lnv6hyJgCNJdthNMzbexM*K9pXO1*LN7NQXJe57dqH92z*KczJRUXF13hi3BPB6lA3lnTHi699zLJs0H2+VLk916Jbk5r7PdZV+OjKeuW4wu+Ih+bQbTqaoYXJ4JB0kuLDvzU9uyeuqEy3qxgFPF7m3n63Niwgm35C898ZYV9ov2OtXE8BgsXBLzlrivz3ORTPzWcbVqckqNN88+MpO*v1X44aZOqu43wegR*RJ2Av6ndG+4O4Nx9*4vJd7fkn*J42gjqt6tN*AvTDqWe4NPtj008fmaRHamenkib7fn0GpTwWbgfv*eB3UOWVKRoiOmjEmFY9AHpGo6x3plUv2mmWlE3vg9rDmkzPhMwRoXiDJY1GDIqzKv8oomyG+3lqSqXUizzpgbVT1HnaVbo65DBtlHqIDRfdO9A+5*AVBLAQIUAxQAAAgIABBg5VrHNcReUAQAAHAHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ROCHANA-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ke8nul.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ROCHANA-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ROCHAMA-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94766443560",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ʀᴏᴄʜᴀɴᴀ ᴊᴀɴᴀᴅᴇᴇᴘᴀ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴏᴄʜᴀɴᴀ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ke8nul.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive now *ʀᴏᴄʜᴀɴᴀ-ᴍᴅ*💋⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94766443560",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
