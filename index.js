const Eris = require('eris');
require('dotenv').config();

const bot = new Eris(process.env.TOKEN);

const mensagem = "```echo $PATH```";

bot.on("ready", () => {
  console.log("Ready!");
});

bot.on("messageCreate", (msg) => {
  if (msg.content === "Como faz pra ver o path no Linux?") {
    bot.createMessage(msg.channel.id, `Execute ${mensagem}`);
  }
});

bot.connect();