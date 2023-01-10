/*
Finalmente, no arquivo script.js, usamos o método querySelector() para capturar três elementos do DOM 
e salvá-los em variáveis com os nomes das suas respectivas tags HTML. Para isso, as linhas de código devem ser:
*/
let button = document.querySelector("button");
let span = document.querySelector("span");
let section = document.querySelector("section");

//Evento mouseover
/*Nesse exemplo, mostraremos o uso dos quatro principais eventos do mouse, 
usando o botão como elemento ativador e os elementos span ou section como elementos afetados. 
Primeiro, vamos trabalhar com o evento mouseover, que é disparado sempre que o cursor do mouse passa por cima de um elemento.

Agora, vamos criar a função mostrarSpan, que altera a propriedade opacity da propriedade style do elemento span.

Depois disso, logo embaixo da função criada, chamamos o elemento button e aplicamos o método addEventListener() nele, 
que deve receber dois argumentos. O primeiro será a string mouseover e o segundo, o nome da função mostrarSpan, sem os parênteses, 
pois estamos apenas passando-a como argumento. Dessa forma:
Logo embaixo da função, aplicamos o método addEventListener ao elemento button, passando a string mouseout como primeiro argumento e 
a função ocultarSpan como segundo argumento.

Após salvar as mudanças e voltar ao navegador, devemos ver o texto Passou o mouse por cima aparecendo quando o cursor do mouse passa 
por cima do botão e sumindo quando o cursor sai de cima dele.

Esse tipo de recurso é comum para mostrar diferentes imagens de um mesmo produto em sites do tipo e-commerce.
*/

function mostrarSpan() {
    span.style.opacity = "100"
}

button.addEventListener("mouseover", mostrarSpan);

function ocultarSpan() {
    span.style.opacity = "0"
}

button.addEventListener("mouseout",ocultarSpan);


/*
O evento click é a junção de dois eventos do mouse: mousedown, que é disparado quando clicamos o botão esquerdo do mouse, e mouseup, 
que é disparado quando soltamos esse mesmo botão.
Assim, click é o ato de apertar e soltar o botão esquerdo do mouse sobre algum elemento. Para exemplificar, 
vamos começar criando uma função para alterar o conteúdo textual do nosso section.
O duplo click, ou dblclick, é o último evento que veremos. Ele não é muito comum, mas pode ser útil em determinadas situações. 
Seguindo o padrão dos outros três eventos, começamos declarando uma função para alterar o conteúdo textual do section.
Depois, aplicamos o método addEventListener ao elemento button, passando a string dblclick como primeiro argumento 
e a função fazerDoisClicks como segundo argumento.
*/

function fazerUmClick() {
    section.innerText = "Fez um clique simples!"
}

button.addEventListener("click", fazerUmClick);

function fazerDoisClicks() {
    section.innerText = "Fez um duplo click!"
}

button.addEventListener("dblclick", fazerDoisClicks)


// AULA 2

/*Para adiantar, no arquivo script.js, capturamos todos os elementos do DOM que usaremos, empregando o método getElementById():*/
/*A propriedade timeStamp retorna um número que representa o tempo transcorrido desde a renderização da página até o momento em que o evento aconteceu. 
Essa informação pode ser útil para provas on-line, onde cada questão tem um tempo máximo permitido para escolher a resposta.*/
/*Para utilizá-la, começamos aplicando o método addEventListener() ao elemento botaoTempo, passando o evento do tipo click como primeiro argumento:
Para o segundo parâmetro, declaramos diretamente uma função anônima dentro dos parênteses do addEventListener(). Lembrando que também é possível declarar essa função fora dos parênteses.
O primeiro parâmetro é uma string com o tipo do evento que queremos escutar.
O segundo parâmetro é a função que define o que deve acontecer quando o evento é disparado.
Para acessar as propriedades do evento, devemos declarar a função anônima com um parâmetro dentro dos parênteses dela.
Este parâmetro representa um objeto com todas as propriedades do evento. Por isso, é comum chamá-lo de evento ou de e.
Depois de salvar as mudanças, abrir nosso projeto no navegador e clicar no botão Tempo, devemos ver um objeto chamado PointerEvent no terminal. 
Ele representa o evento em si.
Se clicarmos na seta à esquerda dele, veremos uma lista em ordem alfabética com todas as propriedades que o evento guarda. Observe a imagem.
A propriedade timeStamp está quase no fim da lista. Podemos vê-la retornando um número do tipo float, que representa a quantidade de milissegundos 
desde a renderização da página até o momento em que fizemos click no botão e disparamos o evento.
O número retornado pode ser convertido em segundos. Para isso, divida ele por mil e arredonde o resultado
Voltando para o arquivo script.js, sabemos que o parâmetro evento salva uma série de propriedades.
Assim, para acessar a propriedade timeStamp, é preciso usar uma dot notation. Já para imprimir o valor da timeStamp, 
atualizamos o argumento que passamos no console.log:
Após salvar as mudanças e voltar ao navegador, cada vez que apertarmos o botão devemos ver um novo valor em milissegundos no terminal:
Finalmente, precisamos exibir esse valor no corpo da página. Para isso, atribuímos ele à propriedade innerText do elemento tempo, 
que foi previamente capturado do DOM.
Depois de salvar as mudanças e voltar no navegador, cada vez que clicamos no botão devemos ver o valor em milissegundos 
sendo apresentado e atualizado no primeiro elemento <p>:
 */


let elementoClicado = document.getElementById("elemento-clicado");
let botaoTempo = document.getElementById("botao-tempo");
let tempo = document.getElementById("tempo");
let segundos = document.getElementById("segundos")

botaoTempo.addEventListener("click",function(evento){
    console.log(evento.timeStamp);
    tempo.innerText = evento.timeStamp;
    segundos.innerText = Math.round(tempo.innerText/1000); 
});



/*
A propriedade target nos permite acessar informações e propriedades do elemento que ativou o evento ou de qualquer um de seus elementos filhos, 
que não necessariamente foram capturados do DOM.
Para isso, é preciso usar um dos métodos estudados, o getElementById ou o QuerySelector, por exemplo. Uma vez que temos acesso ao elemento, 
podemos manipular ele à vontade.
Um exemplo do uso da propriedade target é quando passamos o mouse por cima de um elemento no YouTube e ele passa a mostrar uma prévia do vídeo.
*/
/*Neste exemplo, usaremos o próprio DOM como elemento pai, mas poderíamos definir o mesmo comportamento, por exemplo, para uma lista ordenada de itens.
Começamos aplicando o método addEventListener() ao objeto Document e passando o evento do tipo click como primeiro argumento. Como segundo argumento, 
passamos uma função anônima com o argumento e, de evento.
Como você pode ter observado, a propriedade target retorna o elemento que disparou o evento, no nosso caso, o click.

 

De volta ao VSCode, vamos querer mostrar na tela só o id daqueles elementos que foram clicados. Para isso, usamos a propriedade id da propriedade target (e.target.id) e atribuímos ele ao innerText do elementoClicado, que foi previamente capturado no DOM:
Ao salvar as mudanças e voltar no navegador, deveríamos ver o id subtitulo, botao-tempo e tempo ao clicarmos nos seus respectivos elementos.
Embora a propriedade target seja a mais usada para acessar as informações do elemento que disparou o evento, outras propriedades (como timeStamp, clientX, clientY, type) podem ser usadas para trabalhar com informações do evento em si.  
Nos próximos conteúdos, veremos como isso pode ser útil na hora de trabalhar com eventos de teclado e com a validação de formulários.
*/

document.addEventListener("click",function(e) {
        console.log(e.target)
        elementoClicado.innerText = e.target.id
    })
