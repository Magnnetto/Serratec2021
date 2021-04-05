
const prompt = require("prompt-sync")();
var angulo = parseFloat(prompt("Digite o primeiro angulo da sua forma: "));
var angulo2 = parseFloat(prompt("Digite o segundo angulo da sua forma: "));
var angulo3 = parseFloat(prompt("Digite o terceiro angulo da sua forma: "));

soma = 180;

resultado = angulo+angulo2+angulo3 == soma;
console.log(resultado);
console.log("(False = não forma um triângulo. True = forma um triângulo.)");

