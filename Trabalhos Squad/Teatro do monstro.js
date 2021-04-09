const ler = require("prompt-sync")()
const Limite = 5
var homem = 0;
var mulher = 0;

for (var i=0;i<Limite;i++) {
var idade = Number(idade)
idade = ler ("Qual é a sua idade? ")
if (idade>=16) {
   var genero = ler ("Voce é Homem ou Mulher? ")
   switch (genero){
       case "Homem":
       case "H":
       case "homem":
           console.log("Bem Vindo")
           homem++
        break;
        case "Mulher":
        case "M":
        case "mulher":
            console.log("Bem Vinda")
            mulher++
        break;
   }
} else 
{console.log("Menores de 16 anos não podem entrar") 
--i }
}
console.log("Sala lotada")
console.log("Haverá", homem, "homens e", mulher, "mulheres na sala")