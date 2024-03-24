/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;

*/

let precoProduto = 100;
const debito = 0.9;
const dinheiroPix = 0.85;
const precoDuasParcelas = 1;
// let formaPagamento = 'debito';
// let formaPagamento = 'dinheiroOuPix';
let formaPagamento = 'duasParcelas';

if(formaPagamento === 'debito'){
    precoProduto *= debito;
}
else if(formaPagamento === 'dinheiroOuPix'){
    precoProduto *= dinheiroPix;
}
else if(formaPagamento === 'duasParcelas'){
    precoProduto *= precoDuasParcelas;
}

console.log('Preço do produto = ' + precoProduto.toFixed(2));