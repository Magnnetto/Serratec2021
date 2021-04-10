/*Os "vendedores comissionados" recebem 5% do valor de cada produto
vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um
adicional de 9% sobre o excedente. Seu programa irá receber o valor total
de vendas e emitir o recibo de comissão.
*/

const prompt = require("prompt-sync")();

var venda = prompt("Digite o seu valor total de vendas: ");

if (venda >= 5000.00){
    venda = (venda-5000)*0.09
    console.log("Seu adicional por vendas é de: "+venda+" reais!")
} else {console.log("Você não atingiu a meta de vendas do mês!")}
