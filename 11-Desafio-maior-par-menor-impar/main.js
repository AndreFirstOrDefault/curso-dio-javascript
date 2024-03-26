/*

2) Faça um programa que receba N (qtde de números) e seus respectivos valores
Imprima o maior número par e o menor número impar.

Exemplo:
    Entrada:
        5
        3
        4
        1
        10
        8

    Saída:
        Maior número par: 10
        Menor número impar: 1
 
*/

const {gets,print,verificaMaiorPar,verificaMenorImpar} = require('./funcoes-auxiliares');

console.log();
print(verificaMaiorPar(gets()));
print(verificaMenorImpar(gets()));