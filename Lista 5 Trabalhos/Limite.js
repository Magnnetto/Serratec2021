

const LIMITE = 8;
const ler = require("prompt-sync")();


var autorizado = true;

var total = ler("Quantas pessoas tem na loja? ");
var autorizado = total < LIMITE;

console.log("Autorizado a entrar na loja? "+autorizado);

/*depois do if, se verdadeiro, entra a mensagem), se for falso, ele vai ignorar a instrução do texto
if (autorizado) console.log("Pode deixar o cliente entrar!");
console.log("essa é independente do if");
*/

if (autorizado) console.log("Pode deixar o cliente entrar!");
var espera = ! (total < LIMITE);
var espera = (total >= LIMITE)
if (espera) console.log("o cliente tem que esperar sair alguem para entrar");

//negação de operadores

/*
== not !=
!= not ==
>= not <=
<= not >=
<  not >=
>  not <=
*/

if (!autorizado) console.log("tem que esperar");
if (total < LIMITE) console.log("pode entrar");


var mensagem = "Espere um pouco";
if (autorizado) mensagem = "pode entrar";
console.log("Sempre aparece "+mensagem);

if (autorizado) {
    mensagem = "dentro do bloco";
    console.log("outra coisa");
}




