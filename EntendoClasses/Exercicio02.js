/*

2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;

*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    mostrarImc(){
        return `O valor do meu IMC é : ` + (this.peso/(this.altura * this.altura)).toFixed(0);
    }
}

var p1 = new Pessoa(`Carlos Cassiano`, 85, 1.72);
console.log(p1.mostrarImc());