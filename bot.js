const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")


client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
    client.user.setPresence({ game: { name: 'Olá, sabia que DruninhoArtzツ#6787 é meu criador?', type: 1, url: 'https://discord.gg/BGbjDEg'} });
      //0 = Jogando
      //  1 = Transmitindo
      //  2 = Ouvindo
      //  3 = Assistindo
    });
    
client.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;


    const args = message.content.slice(config.prefix.lengrh).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    // comando ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  
});

let prefix = botconfig.prefix;
  if(`cmd === ${prefix}kick`)
{
  "prefix"; "!"
}

client.login(config.token);