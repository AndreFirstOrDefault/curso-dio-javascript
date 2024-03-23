/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;

*/

function main(){
    const valor = 100;
    const formaPagamento = 'DinheiroOuPix';
    const valorComDesconto = calcularValorProduto(valor,formaPagamento);
    console.log('Valor total: R$ ' + valorComDesconto);
}

function calcularValorProduto(valor, formaPagamento){
    if(formaPagamento === 'Debito'){
        return valor * 0.9;
    }
    else if(formaPagamento === 'DinheiroOuPix'){
        return valor * 0.85;
    }
    else if(formaPagamento == 'DuasParcelas'){
        return valor;
    }
}

main();