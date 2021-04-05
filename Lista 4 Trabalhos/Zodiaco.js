
const prompt = require("prompt-sync")();
var dia = parseInt(prompt("Qual é o dia em que você nasceu? "));
var mes = parseInt(prompt("Qual é o mês em que você nasceu? "));

var inicio = mes == 1 && dia >= 21;
var fim = mes == 2 && dia <= 19;

var inteligente = (mes == 1 && dia >= 21) || (mes == 2 && dia <= 19);
console.log("Você é inteligente?", inteligente);