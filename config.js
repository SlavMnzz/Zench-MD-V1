
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
  // https://api.botcahx.live
//https://api.betabotz.me
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.btc
// - Contoh global.btc = 'xzRhejka'
// global.lann = 'trial'
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.

global.owner = ['6281346214917']  
global.mods = ['6281346214917'] 
global.prems = ['6281346214917']
global.nameowner = 'owner'
global.numberowner = '6281346214917' 
global.mail = 'manzzcloudid@gmail.com' 
global.dana = '-'
global.pulsa = '-'
global.gopay = ''
global.namebot = '𝙕𝙚𝙣𝙘𝙝-𝙈𝘿'
global.gc = 'https://chat.whatsapp.com/EFglAMLeHhN1pQ7ASp5LsB'
global.web = 'https://github.com/SlavMnzz'
global.instagram = 'https://instagram.com'
global.wm = '© 𝙕𝙚𝙣𝙘𝙝-𝙈𝘿'
global.watermark = wm
global.wm2 = '⫹⫺ 𝙕𝙚𝙣𝙘𝙝-𝙈𝘿'
global.wm3 = '© 𝙕𝙚𝙣𝙘𝙝𝘽𝙊𝙏'
global.wm4 = '© 𝙒𝙝𝙖𝙩𝙨-𝘽𝙊𝙏'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'
global.alpiskey = 'da8230e1' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'Auef9BSd' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'XuuHeV58' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Auef9BSd' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
