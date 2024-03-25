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

const{gets,print} = require('./exercicio');

// print(gets());
// print(gets());
// print(gets());
// print(gets());
// print(gets());

const numerosSorteados = [];
let maior = 0;

for(let i=0; i<5 ; i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maior){
        maior = numeroSorteado;
    }    
}

print(maior);