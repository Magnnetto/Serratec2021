
const prompt = require("prompt-sync")();
var idade = parseInt(prompt("Qual é a sua idade? "));
var sexo = prompt("Seu sexo? (Masculino / Feminino) ");


resultado = (idade >= 21);
console.log("Idade: "+resultado);
resultado = (sexo);
console.log("Sexo? "+resultado);
resultado = (idade >= 21 && sexo == "Feminino") || (idade >= 18 && sexo == "Masculino");
console.log("Emancipado? "+resultado);