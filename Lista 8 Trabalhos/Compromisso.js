/*
O programa “Compromissos” gerencia a sua agenda do mês. Você pode
digitar um compromisso, informando o dia e a descrição do evento, e
consultar se existe algum apontamento para determinado dia.
*/

const prompt = require("prompt-sync")();

nome = "Mozão"
console.log(`Oi meu ${nome}, vamos ver sua agenda da semana!`)

//var compromisso = []
var agenda = []

let dia = parseInt(prompt(`${nome}, que dia você tem compromisso? `))
let compromisso = agenda[dia];

while (dia > 0){
    if (compromisso){
    console.log(`${nome} esse dia você já tem coisa pra fazer.`)
    }else {
    console.log(`Este dia está livre! Quer agendar um compromisso ${nome}?`)
    let nota = prompt(" ");
    agenda[dia] = nota}


dia = prompt(`Que dia você quer checar na sua agenda ${nome}? "Digite 0 para terminar" `)
compromisso = agenda[dia]
    }

console.log(`Sua agenda foi atualizada ${agenda}`);