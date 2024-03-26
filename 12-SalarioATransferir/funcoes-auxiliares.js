/*  3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

    Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios
    O salário a ser transferido é calculado da seguinte maneira:

    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos beneficios

    Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%


    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00
*/ 

const salarioBruto = 3000;
const adicionalBeneficios = 400;

function gets(){
    let valores = [salarioBruto,adicionalBeneficios];
    return valores;
}

function print(value){
    console.log(value);
}

function calculaPercentualImposto(value){
    if(value >= 0 && value <= 1100.99){
        return value * 0.05;
    }
    else if(value >= 1101 && value < 2500){
        return value * 0.10;
    }
    else if(value > 2500){
        return value * 0.15;
    }
    else{
        return 'valor inválido';
    }
}

module.exports = {gets,print,calculaPercentualImposto};