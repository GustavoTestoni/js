



/*
var nome = "joe";
var local = 'rua penha';
var separador ='----------------';
var imagem = "imagem";

for(let i= 3;i<=10;i++){
    document.write( nome+"<br>");
    document.write( local+"<br>");
    document.write( imagem+"<br>");
    document.write( separador+"<br><br>");
    
}
*/
/*var valor = Number(prompt('Digite o valor:: '));

let i = 3;

while( i<=10){

    document.write(valor*i);
    
    
    i++;
}*/
/*
var resposta = prompt('Você é bonito:: ');

let i = 'sim';

while( i == 'sim'){

    resposta = prompt('Você tem certeza:: ');

    i = resposta;


}*/

/*var produto = 'Geladeira';
var valor = 100;

document.write(valor*i +"<br>");
for(let i= 1;i<=12;i++){


}

valor = valor*2;
document.write(valor*i +"<br>")*/




//for(let i= 1;i<=12;i++){
  
//document.write(nome+"<br>");}
    
    
    /*var nome = "Gustavo";
    let i = 1;
    while(i<=12){
        document.write(nome+'<br>');
        
        i++;

    }*/

        const botao = document.querySelector('#botao');

        botao.style.fontSize = '30px';

        const body = document.querySelector('body');

        botao.addEventListener('click', ()=> body.style.backgroundColor = 'black');