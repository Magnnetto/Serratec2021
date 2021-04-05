
const ler = require("prompt-sync")();

var cpf = ler("Seu cpf é do dia? ");

if (cpf == "sim") {
    var par = ler("O dia é par? ");

    if (par == "sim"); {
        var maior = ler("Você é maior de idade? ");
        if (maior == "sim");
        console.log("Esse console só aparece se digitar os 3 sim!");
    } 
}