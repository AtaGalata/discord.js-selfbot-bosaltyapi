<p align="center">
  <a href="https://instagram.com/dxmr_ayberkk"><img title="Made By AtaGalata" src="https://img.shields.io/badge/Made%20By-AtaGalata-green?style=for-the-badge"></a>
</p>
<p align="center">
  <a href="https://discord.com/users/626847465601236992"><img title="Discord Selfbot" src="https://img.shields.io/badge/Code-Discord%20SelfBot-blue"></a>
  <a href="https://github.com/AtaGalata/discord.js-selfbot-bosaltyapi"><img title="Version" src="https://img.shields.io/badge/Version-1.0.0-blue"></a>
  <a href="https://github.com/AtaGalata/"><img title="Maintainence" src="https://img.shields.io/badge/Bakımlı%20mı%3F-Evet-blue"></a>
   <a href="https://visitcount.itsvg.in">
    <img src="https://visitcount.itsvg.in/api?id=AtaGalata3&label=Ziyaret%C3%A7i%20Say%C4%B1s%C4%B1&color=12&icon=0&pretty=false" />
  </a>
</p>

# KURULUM ve ÇALIŞTIRMA

* `cfg.js` dosyasını düzenleyin.
* Eğer **Glitch** Üzerinden Açıcaksanız `.env` dosyasının içine `token:TOKEN` şeklinde tırnaksız şekilde yazınız.
* Sonra aşağıdanki kodu komut satırına giriniz;


```
npm i && node app
```

# KOD HAKKINDA BİLGİLER

* Discord.js Sürümü : v13
* Bir Tane Yan Hesap Gerekiyordur.(Kendi Hesabınızda da Yapabilirsiniz)
* Glitch Destekler.
* Yeni Komut Eklemek İsterseniz `./events/komutlar.js` Dosyasını İnceleyin.
* `app.js` Üzerinden Birşey Eklemenize Gerek Yoktur. Yeni `client.on()` Eklemek İsterseniz `./util/eventLoader.js` i İnceleyin.

# HESAP TOKENİ ALMAK İÇİN

* Tarayıcı Üzerinden [discorda](https://discord.com/app) giriniz.
* `ctrl + shift + ı` yaparak `İnceleyi/Console'u` açınız.
* Console a şu kodu giriniz;
```
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```



