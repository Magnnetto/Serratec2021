
const prompt = require("prompt-sync")();
var valor1 = parseInt(prompt("Digite um número: "));
var valor2 = parseInt(prompt("Digite um segundo número: "));
var soma = valor1 + valor2;
var sub = valor1 - valor2;
var div = valor1 / valor2;
var multi = valor1 * valor2;

console.log("A soma dos números é: "+ soma);
console.log("A subtração dos números é: "+ sub);
console.log("A divisão dos números é: "+ div);
console.log("A multiplicação dos números é: "+ multi);

