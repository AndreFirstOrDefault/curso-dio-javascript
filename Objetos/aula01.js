const andre = {
    nome: 'André Luiz',
    idade: 35
};

console.log(andre.nome);
console.log(andre.idade);
console.log(andre);

andre.altura = 1.69;

delete andre.nome;

console.log(andre);