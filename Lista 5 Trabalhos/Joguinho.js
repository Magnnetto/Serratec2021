

const ler = require("prompt-sync")();

var moeda = ler ('Digite "cara" ou "coroa": ');
var resultado;

if (moeda == "coroa") resultado = ("Você ganhou, porque deu coroa");
else resultado = ("Vai todo mundo perder!");

console.log("Resultado: ", resultado);
