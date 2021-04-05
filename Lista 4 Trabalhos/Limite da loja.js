
const prompt = require("prompt-sync")();
var cliente = parseInt(prompt("Quantas pessoas há na loja? "));

limite = 30;
var pode=cliente<=29;

console.log("Pode entrar? "+pode);

