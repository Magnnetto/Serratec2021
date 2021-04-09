/*Squad: Padawans

Bernard Muniz, Karine Matanada, Leonardo, Nicolly, Werikson, Matheus

1) //Crie um jogo em que você vai ter que escolher entre 3 armas para enfrentar o grande dragão malvado "Progradragão".
As armas são uma espada, uma faca e um sapato. Só uma dessas opções que vai garantir a vitória contra o dragão.
Antes de começar o jogo, o mesmo vai pedir o nome do herói, acrescente o nome do herói nos textos do jogo.
*/

const prompt = require("prompt-sync")();
var heroi = prompt("Loading... qual é o nome do seu Herói? ");
console.log("É hora do core, "+heroi+". Raid time! Escolha sua arma: ");
var arma = prompt("1- Espada, 2- Faca, 3- Sapato ");

if (arma == 1) {
console.log("Tá achando que é o Rei Arthur? Você foi devorado pelo atrevimento!")
console.log("Try again? Insert coin!")}

if (arma == 2){
console.log("Não vem bancar o ladino contra o Progradragão NÃO! Furtividade quebrada: você está morto!")
console.log("Desiste, noob!")}

if (arma == 3){
console.log("Você é destruidora mesmo em "+heroi+"?! Arrazou na plataforma, sambou e deu HK no boss!")
console.log(heroi+" diz: Achei fácil. GG izi")}
