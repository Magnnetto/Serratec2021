
const prompt = require("prompt-sync")();
var nome = prompt("Qual é seu nome? ");
var empresa = prompt("Em que empresa você trabalha? ");
var funcao = prompt("Qual função exerce? ");
var emprestimo = parseFloat(prompt("Qual o valor de empréstimo desejado? "));

var valor;
valor = emprestimo*0.86;

console.log("Senhor(a) "+nome+", você está com sorte! Pela sua função de "+funcao+", e sua excelente relação com a "+empresa+ ", foi aprovado um crédito em sua conta corrente de R$ "+valor+"! Faça bom uso e conte conosco!");

