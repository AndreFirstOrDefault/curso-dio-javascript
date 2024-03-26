let numeros = [7,3,4,1,1000,8,5,106];
numero = 0;
let i=0;

function gets(){
    return numeros;    
}

function print(value){
    console.log(value);
}

function verificaMaiorPar(numeros){
    let maiorPar = 0;
    for(let i=1; i < numeros[0] + 1; i++){
        if(numeros[i] % 2 === 0){
            if(numeros[i] > maiorPar){
                maiorPar = numeros[i];
            }
        }
    }
    return 'Maior número par: ' + maiorPar;
}

function verificaMenorImpar(numeros){
    let menorImpar = numeros[0];
    for(let i=1; i < numeros[0] + 1; i++){
        if(!(numeros[i] % 2 === 0)){
            if(numeros[i] < menorImpar){
                menorImpar = numeros[i];
            }
        }
    }
    return 'Menor número ímpar: ' + menorImpar;
}

module.exports = {gets,print,verificaMaiorPar,verificaMenorImpar};