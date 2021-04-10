
const ler = require("prompt-sync")();

var p1, p2;

p1 = parseFloat(ler("Digite a sua nota da P1: "));
p2 = parseFloat(ler("Digite a sua nota da P2: "));

if (p1 + p2 <= 4) console.log("Você está REPROVADO!");
if (p1 + p2 > 4 && p1 + p2 <= 6) console.log("Você está de RECUPERAÇÃO!");
if (p1 + p2 > 6 && p1 + p2 <= 8) console.log("Você está APROVADO!");
if (p1 + p2 == 10) console.log("Você está APROVADO e está em DESTAQUE!");

resultado = p1+p2;
console.log(resultado);


