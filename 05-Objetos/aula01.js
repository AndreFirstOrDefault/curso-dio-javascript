const pessoa = {
    nome: 'André Luiz',
    idade: 35,

    // Método, função.
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// console.log(andre.nome);
// console.log(andre.idade);
// console.log(andre);

// andre.altura = 1.69;

// delete andre.nome;

// console.log(andre);

// pessoa.descrever = function(){
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoa.descrever();

const atributo = `idade`;

console.log(pessoa[atributo]);

pessoa['nome'] = `teste`;
pessoa.nome = `teste`;

console.log(teste);