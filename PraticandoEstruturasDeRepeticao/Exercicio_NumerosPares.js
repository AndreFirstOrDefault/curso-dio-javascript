// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par

let numeros = [1,2,5,8,13,50,60,62,63,71,73,74,75,81,92,99,101,103];

for(let i=0; i< numeros.length; i++){
    if(numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }
}