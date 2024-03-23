
/*

function teste(){
    console.log('teste');
}

teste();

*/

function sayMyName(name){
    console.log('Your name is: ' + name);
}

// sayMyName('Andre');

function quadrado (valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
// console.log(quadradoDeDez);
// console.log(quadrado(10));

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

const valorTotal = incrementarJuros(100,20);
console.log(valorTotal);