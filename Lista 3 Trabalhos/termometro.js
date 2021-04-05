
const prompt = require("prompt-sync")();
var celcius = prompt("Digite uma temperatura em Celcius:");

var farhn = (celcius * 9)/5 + 32;
console.log("A temperatura" + celcius + " em Fahrenheit é: " + farhn);

