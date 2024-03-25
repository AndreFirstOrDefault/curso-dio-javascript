// // Arrays
// const alunos = ['João','Vitor','Marina'];

// console.log('\nImprimindo sem o foreach:')
// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);

// alunos.push('Renam');
// alunos[4] = 'André';

// console.log(alunos[3]);

// console.log('\nImprimindo com o foreach:')
// alunos.forEach(alunos => {
//     console.log(alunos[i]);
// });

const alunos = [];

// Push adiciona
// alunos.push('teste');
// alunos.push(10);
// alunos.push('Amelia');
// alunos.push(150);

// console.log(alunos);


// Pop tira o ultimo da lista e exibe
// console.log(alunos.pop());
// console.log(alunos);

// Shift tira o primeiro da lista
// alunos.shift();
// console.log(alunos);

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

// length mostra o tamanho da lista (numero de elementos)
console.log('\nTamanho da lista: ' + notas.length);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log('Soma das notas : ' + soma);

const media = soma/notas.length;

console.log('Média das notas: ' + media);
