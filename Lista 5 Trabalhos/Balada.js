
const ler = require("prompt-sync")();

var pessoa = ler("Segurança: quem é o próximo da fila? ");

console.log("Entrada liberada!");

var gratis =
 pessoa == "mulher" || pessoa == "feminino" || pessoa == "f" || pessoa == "Mulher" || pessoa == "M";

if (gratis) console.log("Entrada gratuita");
else console.log ("R$ 30 reais");

