
const prompt = require("prompt-sync")();
var quilo = parseFloat(prompt("Digite o valor do kg estabelecido pelo restaurante (valor em kg): "));
var peso = parseFloat(prompt("Digite o valor em kg da pesagem atual (valor em kg): "));

var nome;
nome = "Self-Service";

var prato;
prato = 0.465;
var total;
total = peso*quilo-prato;

console.log("Bem vindo(a) ao "+nome+". O peso do prato é de "+prato+"kg.");
console.log("O valor de 0.1Kg é de "+quilo+"kg, e, portanto, o preço final é de "+total+" reais.");

