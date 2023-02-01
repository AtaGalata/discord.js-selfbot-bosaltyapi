const Discord = require("discord.js-selfbot-v13")
const client = new Discord.Client()

const settings = require("../cfg")

var prefix = settings.prefix //prefix �a��r�m�
var sahip = settings.sahip  //sahip �a��r�m�

module.exports = async message => {

    if(message.author.id === client.user.id) return; //D�ng� Engellemek ��in Yazan Sensen Cevap Verme Dedik
    if(message.author.bot) return; //Yazan Botsa Cevap Verme
     
    if(message.content.startsWith(prefix)){//e�er ba��nda prefix varsa
        const ctext = message.content.slice(prefix.length).split(' ')// Yaz�lan Mesajda prefix olan yeri kesiyor geriye kalanlar� bo�luklar referans alarak par�al�yor
        const command = ctext[0] //ctext[0] � komut olarak i�eri al�yoruz
        const args = [ 
            ctext[1],
            ctext[2]
        ] //args istedi�iniz kadar ekleyebilirsiniz...

        if(command === "yard�m"){ //�rnek yard�m komutu
            message.channel.send("yard�m komutlar� �unlard�r...")
        }
        if(command === "ban"){ //�rnek arg komutu (i�levsizdir)
            if(!args) return;
            message.channel.send(args[0])
        }
    }else{ //e�er ba��nda prefix yoksa otomatik mesaj olarak yap�caz
        if(message.content.toLowerCase()/*SA - Sa sA lar�n hepsini sa ya �evirir*/ === "sa"){ // �rnek sa-as mesaj�
            return message.channel.send("as ho�geldin")// bu mesajla geri d�n
        }
    }
}