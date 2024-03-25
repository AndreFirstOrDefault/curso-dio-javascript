class Pessoa{
    nome;
    idade;

    // Declarar um método - não precisa da palavra function
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const andre = new Pessoa();
andre.nome = 'André Luiz da Silva';
andre.idade = 35;
andre.descrever();

const laisa = new Pessoa();
laisa.nome = `Laisa Soraia`;
laisa.idade = 25;
laisa.descrever();