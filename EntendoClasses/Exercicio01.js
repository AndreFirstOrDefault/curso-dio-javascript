/*

1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.

*/
const precoCombustivel = 5;

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm.toFixed(2);
    }

    valorGasto(distancia, precoCombustivel){
        // const gastoCombustivel = distancia * this.gastoMedioPorKm;
        // const gasto = gastoCombustivel * precoCombustivel;
        // console.log(`Gasto da viagem: ` + gasto.toFixed(2));

        // console.log(`Gasto da viagem: ` + (distancia * this.gastoMedioPorKm) * precoCombustivel);

        return (distancia * this.gastoMedioPorKm) * precoCombustivel;
    }
}

const carro = new Carro('Fiat','Azul',1/12);
console.log(carro);
// carro.valorGasto(1000,precoCombustivel);
console.log(`Gasto da viagem: ` + carro.valorGasto(1000,precoCombustivel));