
const prompt = require("prompt-sync")();

var cupons = parseInt(prompt("Digite o número de cupons que você possui: "));

console.log("Seus cupons agora valem "+cupons*3+" pontos no programa de fidelidade!");
