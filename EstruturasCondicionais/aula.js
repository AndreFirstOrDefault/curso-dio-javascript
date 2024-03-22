const numero = 0;

const numeroEhPar = numero % 2 === 0;
const numeroPar = numero % 2 == '0'; // 2 iguais ignora o tipo da variavel


if(!numeroEhPar){
    console.log('\nO número não é par');
}
else if(numero === 0){
    console.log('O número é inválido');
}
else{
    console.log('O número é par');
}