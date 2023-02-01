const reqEvent = event => require(`../events/${event}`); //Event Klasörünü Belirtiyoruz
// const verilcek_isim = event => require(`yol/${event}`) // şeklinde yazılacaktır bu yazılana göre de aşağıya eklenecektir.

module.exports = (client) => {
    client.on("ready", () => reqEvent("ready")(client));
    client.on("messageCreate", reqEvent("komutlar"));
    
    /*
    client.on(işlem, () => verilecek_isim("dosyaadı"))
    dosya yolunu buldurduk ve gitti şimdi dosyanın geri yanıt vermesi lazım
    
   dosyaya;
   
   module.exports = (içe_aktarılan_işlem) => {}
   
   burda dikkat edilmesi gereken içe_aktarılan_işlem ile işlem aynı değildir
   
   örnek olarak;
   
   client.on("ready", r => {}) de
   ready : işlem
   r ise içe_aktarılan_işlemdir
    */
}
