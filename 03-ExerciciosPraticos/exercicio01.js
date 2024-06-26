/*

1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre de faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3)/3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

let nota1 = 7;
let nota2 = 10;
let nota3 = 6;

let media = (nota1 + nota2 + nota3) / 3;
let classificacao = '';

if(media < 5){
    classificacao = 'reprovado';
}
else if(media >= 5 && media <= 7){
    classificacao = 'recuperação';
}
else{
    classificacao = 'passou de semestre';
}

console.log('\nMédia do aluno: ' + media.toFixed(2) + ' - Classificação: ' + classificacao + '.');
