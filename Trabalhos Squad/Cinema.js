/*Squad: Devs e Gamers

Sthephanie, Natan, Gustavo, Marcelo, Erich

CINEMA:
1. Um cinema faz reservas de 5 ingressos para uma sala, sendo 2 para meia entrada, para a reserva, basta informar o nome e se é meia ou não,
é permitido apenas uma reserva por nome.
2. Após os 5 reservados, o cliente pode retirar se ingresso informando o seu nome, o ingresso irá informar seu número,
nome de quem reservou e se é meia ou não.
*/


const ler = require ("prompt-sync")();
var meia = 0;
var nomes = [];
var Ingresso = [];

while(nomes.length <= 5){
  var nome = ler("Qual é o seu nome?: ")
  for (i = 0; i <= nomes.length; i++){
      if(nome == nomes[i]){
        console.log("Esse nome já existe")
        nome = ler("Qual é o seu nome?: ")      }
  }

    nomes.push(nome);
    nomes.indexOf(nome);

  var pagante = ler("Inteira ou Meia? ")

  if(pagante == "meia","M","m","Meia"){

      if(meia == 2){
        console.log("Todas as meias ja foram comprada, infelizmente seu ingresso será inteira")
        pagante == "inteira", "i", "I", "Inteira"
    }else {
    meia++
    }
    }
    Ingresso.push(pagante);

}

for(i = 0; i < 5; i++){
console.log("\nNome: " + nomes[i] + "\nNumero ingresso: "+ i + "\nTipo ingresso: " + Ingresso[i]);
}