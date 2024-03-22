// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variavéis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - Tipo de gasolina que está no seu carro;
// 4 - Gasto médio de combustivel do carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 4.706;
const precoGasolina = 6.237;
let tipoCombustivel = 'Etanol';
const gastoMedioPorKm = 10;
let distanciaPercorrida = 100;

let gastoCombustivel = distanciaPercorrida / gastoMedioPorKm;

if(tipoCombustivel === 'Etanol'){
    let gastoTotal = gastoCombustivel * precoEtanol;
    console.log('Gasto da viagem = ' + gastoTotal.toFixed(2) );
}
else if(tipoCombustivel === 'Gasolina'){
    let gastoTotal = gastoCombustivel * precoGasolina;
    console.log('Gasto da viagem = ' + gastoTotal.toFixed(2) );
}
else{
    console.log('Tipo de combustivel inválido');
}


