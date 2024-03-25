function main(){
    const idade = 15;
    verificaMaioridade(idade);
}

function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
}

function verificaMaioridade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome('André') + ', sou '+ 'Maior de idade');
    }
    else{
        console.log(escrevaMeuNome('Bia') + ', sou '+ 'Menor de idade');
    }
}

main();
