/*A finalidade do sistema "Triagem" é ajudar o hospital a identificar os
pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do
paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas,
receberá a avaliação na tela.
*/

const prompt = require("prompt-sync")();

var nome = prompt("Qual é o seu nome? ");
var vacina = prompt("Você já foi vacinado? S ou N: ");

if (vacina == "S"){
    vacina = "ok"
    console.log("Paciente: "+nome)
    console.log("Já foi vacinado? "+ vacina)
    console.log("Triagem!")
    console.log("Sujeito a infecção? "+false);
    //console.log("Já vacinado? "+vacina)
} else {
    vacina = "pendente"
    console.log("Paciente: "+nome)
    console.log("Já foi vacinado? "+ vacina)
    console.log("Triagem!")
    console.log("Sujeito a infecção? "+true);
}

