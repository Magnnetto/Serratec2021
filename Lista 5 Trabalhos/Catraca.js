
const ler = require("prompt-sync")();
console.log("Fila da balada");

var pessoa = ler ("Como vc se identifica? ");

var mulher = pessoa == "Feminino" || "M" || "Mulher" || "feminino" || "mulher";
var homem = pessoa == "Masculino";

if (mulher) console.log("Entrada gratuita!");
if (!mulher) console.log("Não entra!");

