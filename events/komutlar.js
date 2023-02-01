const Discord = require("discord.js-selfbot-v13")
const client = new Discord.Client()

const settings = require("../cfg")

var prefix = settings.prefix //prefix çaðýrýmý
var sahip = settings.sahip  //sahip çaðýrýmý

module.exports = async message => {

    if(message.author.id === client.user.id) return; //Döngü Engellemek Ýçin Yazan Sensen Cevap Verme Dedik
    if(message.author.bot) return; //Yazan Botsa Cevap Verme
     
    if(message.content.startsWith(prefix)){//eðer baþýnda prefix varsa
        const ctext = message.content.slice(prefix.length).split(' ')// Yazýlan Mesajda prefix olan yeri kesiyor geriye kalanlarý boþluklar referans alarak parçalýyor
        const command = ctext[0] //ctext[0] ý komut olarak içeri alýyoruz
        const args = [ 
            ctext[1],
            ctext[2]
        ] //args istediðiniz kadar ekleyebilirsiniz...

        if(command === "yardým"){ //Örnek yardým komutu
            message.channel.send("yardým komutlarý þunlardýr...")
        }
        if(command === "ban"){ //Örnek arg komutu (iþlevsizdir)
            if(!args) return;
            message.channel.send(args[0])
        }
    }else{ //eðer baþýnda prefix yoksa otomatik mesaj olarak yapýcaz
        if(message.content.toLowerCase()/*SA - Sa sA larýn hepsini sa ya çevirir*/ === "sa"){ // örnek sa-as mesajý
            return message.channel.send("as hoþgeldin")// bu mesajla geri dön
        }
    }
}