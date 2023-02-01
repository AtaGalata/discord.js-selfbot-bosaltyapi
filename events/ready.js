module.exports = (client) => {
    client.user.setActivity("Made By AtaGalata")
    client.user.setStatus("online") // (dnd, online, idle, invisible)
    console.log(`${client.user.tag} --- Olarak Giriş Yapıldı.\n`);
  };