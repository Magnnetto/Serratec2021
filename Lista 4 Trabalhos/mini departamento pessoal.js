
const prompt = require("prompt-sync")();
var horas = parseInt(prompt("Quantas horas trabalhou neste mês? "));
var valor = parseFloat(prompt("Qual é o valor pago por hora do seu trabalho? "));

var salario;
salario = (horas*valor);

//como fazer com que o programa selecione um valor especifico do INSS de acordo com a entrada + calculo do salario?

var inss;
inss = (salario*0.09);

var bruto;
bruto = (salario - inss);

console.log("Contracheque: ");
console.log("Salário bruto: "+salario);
console.log("Valor de desconto do INSS "+inss);
console.log("Salário líquido: "+bruto);
