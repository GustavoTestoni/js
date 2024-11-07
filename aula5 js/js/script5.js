/* Funções de seleç~cao no DOM

-getElementById('parâmetro')
Seleciona UM ELEMENTO através do ID.

-querySelector('parâmetro')
Seleciona UM ELEMENTO atravé de um seletor.

querySelectorAll('parâmetro')
Seleciona VÁRIOS ELEMENTOS através de seletores.*/

/* Exemplos: acessando/manipulando o DOM */
const subtitulo = document.getElementById("subtitulo-dom");
const titulo = document.querySelector("h1");
const variosElementos = document.querySelectorAll("h3, a, hr");
const descricaoDom = document.querySelector(".descricao-dom");

console.log(subtitulo);
console.log(titulo);
console.log(variosElementos);

// Modificando elementos


// Alteração  de conteúdo textual e /ou tags
titulo.innerHTML = "Olá JavaScript!";

//CSS Inline
subtitulo.style.backgroundColor = "rgba(720,0,0.5)";

//CSS Através de classes via JS
descricaoDom.classList.add("destaque");

/* Manipulação de Eventos*/
const pagina = document.querySelector("body");
const exemplo1 = document.querySelector("#exemplo1");
const mensagem = document.querySelector("#mensagem");

/* Ouvinte de Evento
Usamos o event Listener para monitorar a ocorrência
de algum avento(no caso, click) e, a partir da ocorrência,
executar ações na fução callback*/


exemplo1.addEventListener("click", function () {
    pagina.style.fontFamily = "Verdana";
    mensagem.innerHTML = "<i>Fonte alterada com sucesso!</i>";
    titulo.setAttribute("hidden", true);
});


/* Ouvinte de evento para teclado*/
document.addEventListener("keydown", function (event) {
    //Verificando se uma determinada tecla foi pressionada
    if (event.code === "KeyR") {
        pagina.style.fontFamily = "Times";
        mensagem.innerHTML = "";
        titulo.removeAttribute("hidden");
    };
});


/* Exemplo 2: modo noturno*/
const botao = document.querySelector("#exemplo2");
botao.addEventListener("click", function () {
    pagina.classList.toggle("modo-noturno");

    /* Programe um condicional que verifique se a classe
    "modo-noturno" está aplicada à página, e se estiver,
    o texto do botão deverá mudar para "Desativar". Caso contrário,
    deverá mostrar "Ativar".*/

    //Solução 1:usando classList.contains
    //if( pagina.classList.contains("modo-noturno")){
    if (pagina.className == "modo-noturno") {
        botao.innerHTML = "Desativar";
    } else {
        botao.innerHTML = "Ativar";
    }
    
});



