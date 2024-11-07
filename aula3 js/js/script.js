//Revisão Geral

// Dado ! = Informação

/* var elementosPagina = {
    titulo: 'Escolha sua cor favorita',
    paragrafo: 'Quando o prompt abrir, digite uma cor',
    linha: '-------------------------'
}

var dadosUsuario = {
    nome: prompt('Digite seu nome::'),
    cor: prompt('Digite sua cor favorita::')
}

document.write(` Olá ${dadosUsuario.nome}, seja bem vindo! `); */

//condicionais

/*if( dadosUsuario == 'azul anil' || dadosUsuario.cor == 'Azul') {
    document.write('Ótima escolha de cor!');
}else if( dadosUsuario == 'vermelho' || dadosUsuario.cor == 'Vermelho'){
    document.write('Boa segunda opção de cor');
}
else{
    document.write('Péssima escolha de cor!');

}
 */
/* var filme = {
    nome: prompt('Olá! Qual seu filme favorito::'),
    genero: prompt('Qual o gênero?::')
}

document.write( '');

if( filme.nome == 'Ace ventura' || filme.nome =='Debi e Lóide'){
    document.write('Bom filme');
}else if(filme.nome =='Noite dos mortos vivos'){
    document.write('Isto é ótimo!');
}
else{
    document.write('filme chato');
} */
/*
    var listaFesta = {
        nome1:'Gustavo',
         nome2:'Rafael',
          nome3:'Donatelo',
           nome4:'Ninja'
};

    var nomes = {
        nome: prompt('Está na lista?::')
    }

    if( listaFesta == listaFesta.nome1 ||listaFesta.nome2 || listaFesta.nome3 || listaFesta.nome4
    ){ document.write('Boa festa')

    }else{document.write('Desculpe, voce não está na lista')}
*/

/*function soma(){
    let nome = 'Gustavo';
    document.write('Estou dentro de soma');
}


soma();*/

/*function separacao(texto, *){

document.write('<br>');
document.write('---------------------------');
document.write(texto);
document.write(simbolo);
document.write('<br>');
document.write('*');
}





document.write( '<h1> Temporal do fim de semana</h1>');

separacao('*');

document.write('<p> Neste fim de semana cairá uma chuva forte na região de São Paulo, que será muito devastador.</p>');

separacao('');

document.write('<p> Todos os alunos do programador comparecerem no Casa Aberta, logo as 07h da manhã, extremamente empolgados e felizes, ficaram até meia noite. </p>');

separacao('Pular linha')
*/


function dadosFeed(nome, data, local) {

    document.write(`<br><br><strong> ${nome}</strong>`);
    document.write(`<br> ${data}`);
    document.write(`/ ${local}`);
}

document.write('<h3> Feed de amigos </h3>');

dadosFeed('Gustavo', '22/02/2024', 'Av. Marechal')

document.write('<br> <br> ---------------------');
document.write('<br>---------------------------');
document.write('<br>---------------------------');
document.write('<br>---------------------------');
document.write('<br>---------------------------');
document.write('<br>---------------------------');

dadosFeed('Micael', '09/09/2042', 'Zion')

document.write('<br> <br> ---------------------');
document.write('<br>---------------------------');
document.write('<br>---------------------------');
document.write('<br>---------------------------');
document.write('<br>---------------------------');
document.write('<br>---------------------------');