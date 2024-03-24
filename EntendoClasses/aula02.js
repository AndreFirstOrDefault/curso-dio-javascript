class Pessoa{
    nome;
    idade;
    anoDeNascimento ;

    // Construtor
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }


    // Declarar um método - não precisa da palavra function
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const andre = new Pessoa('André Luiz da Silva',35);

andre.descrever();

const laisa = new Pessoa('Laisa Soraia',25);

laisa.descrever();

console.log(laisa);
