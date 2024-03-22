/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variavéis. Sendo elas:
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoCombustivel = 5.79;
const kmPorLitro = 12;
let distanciaPercorrida = 1580;

let gastoCombustivel = distanciaPercorrida/kmPorLitro;
let gastoTotal = gastoCombustivel * precoCombustivel;

console.log('Gasto da viagem: R$ ' + gastoTotal.toFixed(2));