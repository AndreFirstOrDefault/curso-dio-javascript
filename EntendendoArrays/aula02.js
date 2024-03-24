const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

// length mostra o tamanho da lista (numero de elementos)
// console.log('\nTamanho da lista: ' + notas.length);

// const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
// console.log('Soma das notas : ' + soma);

// const media = soma/notas.length;

// console.log('Média das notas: ' + media);

console.log('\nUsando for: ')
for(let i = 0; i < notas.length; i++){
    console.log(notas[i]);
}

let soma = 0;

console.log('\nSoma das notas usando for:');
for(let i=0; i < notas.length; i++){
    soma += notas[i];
}

console.log(soma);