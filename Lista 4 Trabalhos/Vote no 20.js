
const prompt = require("prompt-sync")();
var idade = parseInt(prompt("Qual é a sua idade? "));

var pode;
pode = idade >= 16;

console.log("Eleições 2020!");
console.log("Sua idade: "+idade);
console.log("Você pode votar? "+pode);
