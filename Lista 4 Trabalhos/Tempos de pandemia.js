
const prompt = require("prompt-sync")();
var temperatura = parseFloat(prompt("Vamos verificar sua temperatura: "));
var mascara = prompt("Usa mascara? (S ou N) ");

//S = true;
//N = false;

//var entrada;
//entrada = (temperatura) && (mascara);


resultado = (temperatura <= 37.5);
console.log("Temperatura? "+resultado);
resultado = (mascara == "S");
console.log("Usa máscara? "+resultado);
resultado = (temperatura <= 37.5)&&(mascara == "S");
console.log("Autorizar entrada? "+resultado);


