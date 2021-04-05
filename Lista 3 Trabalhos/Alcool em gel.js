
const prompt = require("prompt-sync")();
var volume = parseFloat(prompt("Qual é a capacidade de armazenamento do vasilhame (em ml)? "));

var alcool;
alcool = volume * 0.7;

console.log("Para obter a concentração ideal de desinfecção, adicione "+(alcool)+" ml de álcool e "+(volume-alcool)+" ml de gel!");
