//const {gets, print} = require('./funcoes-auxiliares');

/*

Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
Faça um programa que recebe os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

*/

const numeros = [5,10,50,98,23];

function maiorNumero( numeros){
    let maior;
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] > numeros[i+1]){
            maior = numeros[i];
        }        
    }

    return maior;
}

console.log(maiorNumero(numeros));