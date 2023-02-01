const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({checkUpdate:false});

const { token } = require("./cfg")

require("./util/eventLoader")(client)// Yeni Komutlar Tek Dosyaya Yazılcak.

client.login(token).catch(err => {console.log("Tokeni Kontrol Et.");process.exit(1)});