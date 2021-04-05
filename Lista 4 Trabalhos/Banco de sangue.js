
const prompt = require("prompt-sync")();
var idade = parseInt(prompt("Idade? "));
var doenca = prompt("Portador de doença hepática? (S ou N) ");
var doador = prompt("Doação recente? (S ou N) ");

var cond1 = idade >= 18;
var cond2 = doenca == "N";
var cond3 = doador == "N";

console.log("Pode ser doador? "+cond1&&cond2&&cond3);
