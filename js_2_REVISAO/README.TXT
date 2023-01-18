TOPICOS A SEREM ABORDADOS
1 . propriedade style
2. classlist
3. função .addEventListener();
4 Evento de Mouse

**********************************************Propriedade style

Essa propriedade é usada para manipular as propriedades de estilização dos elementos capturados do DOM:

let titulo = document.querySelector("h1");
titulo.style

Após acessar a propriedade style, podemos acessar qualquer propriedade CSS e atribuir novos valores como strings a ela.

titulo.style.color = "#D4210D"

Propriedades com mais de uma palavra no nome devem ser escritas usando o padrão de escrita camelCase.

titulo.style.fontSize = "2.4rem"

A propriedade style serve para adicionar estilizações simples de forma dinâmica, como sublinhar o item selecionado em uma barra de navegação.

********************************************Propriedade classList

Essa propriedade é usada para manipular a lista de classes atribuídas a um elemento capturado do DOM.

let section = document.querySelector("section");

section.classList

A propriedade classList possui uma série de métodos que nos permitem consultar e manipular a lista de classes do elemento. Esses métodos são executados escrevendo um par de parênteses logo após o nome do método e passando uma string como argumento.

O método contains() recebe uma string com o nome de uma determinada classe, verifica se o elemento possui ou não essa classe e retorna um valor booleano.

sections.classList.contains("container-produtos")

Com o método add(), adicionamos uma classe ao elemento selecionado.

sections.classList.add("container-produtos")

Usamos o método remove() para remover uma classe da lista de classes do elemento.

sections.classList.remove("container-produtos")

O método toggle() funciona como um interruptor, ou seja, se o elemento possui a classe passada como argumento, o método a remove. Caso ele não a possua, o toggle() adiciona.

sections.classList.toggle("visible")

***************************************************Implementar interatividade
Para implementar a interatividade nos nossos sites, precisamos nos fazer três perguntas:
Quem?
Essa pergunta se refere aos elementos que participarão da interatividade. Geralmente, temos dois elementos: um que ativa a interatividade e outro que sofre as alterações.
No código, esse passo equivale a capturar os elementos do DOM que serão usados.

let botao = document.querySelector("button");

let texto = document.querySelector("p");

Um exemplo de um elemento ativador é um botão que ativa o modo escuro nos sites.

O quê?
Com essa pergunta, definimos o comportamento da interatividade usando a lógica de programação. Geralmente, está encapsulado dentro de uma função.

function mudarCor( ){
  texto.style.color = "blue"
}

Quando?
Essa pergunta se refere ao tipo de evento que acionará a interatividade. Por exemplo: click, input ganhando foco, pressionar uma tecla, entre outros.

*******************************************************Método addEventListener()

O método addEventListener() recebe dois argumentos: o primeiro é uma string com o tipo de evento e o segundo é uma função, que define o comportamento a ser executado quando o evento for chamado.

botao.addEventListener("click", mudarCor)

É importante lembrar que, ao chamar as funções que definem o comportamento como segundo argumento, não abrimos nem fechamos os parênteses depois do nome delas.


Também é possível definir o comportamento diretamente no segundo argumento do eventListener. Para isso, usamos funções anônimas comuns ou arrow functions.

botao.addEventListener("click", ( ) => {

  texto.style.color = "blue"

})

******************************************************EVENTOS

Temos vários eventos que nos permitem definir com precisão os gatilhos das interatividades que queremos implementar. As três principais categorias são eventos de mouse, de teclado e de formulário.

Os eventos de formulário nos ajudam a validar nossos formulários antes de enviar as informações inseridas.

******************************************************Eventos de mouse

São os eventos gerados por algum tipo de interação do usuário usando o mouse como referência.

Evento	Descrição
mouseover	Quando o cursor do mouse passa por cima de um elemento
mouseout	Quando o cursor do mouse deixa de estar "em cima" de um elemento
click	Quando pressionamos e soltamos o botão esquerdo do mouse
dblclick	Quando clicamos duas vezes com o botão esquerdo do mouse


************************************************************************************ JavaScript 2
Revisão (Parte 02)

Revisão JavaScript II - Parte II
Nesse módulo, aprofundamos os nossos conhecimentos sobre a linguagem JavaScript e aprendemos como usá-la para implementar a interatividade nos nossos sites.

Agora, iremos revisar os últimos quatro assuntos que abordamos.

Sumário
5. Capturar informações do evento;
6. Eventos de teclado;
7. Funções preventDefault( ) e alert( );
8. Eventos de formulário.

Introdução

Os eventos que usamos para executar comportamentos no nosso site também possuem propriedades. Sendo assim, podemos usá-las para personalizar ainda mais as interatividades.

************************************************************************************ Informações do evento
Essas propriedades fornecem informações específicas sobre o evento, como o momento em que foi acionado, o elemento a partir do qual foi chamado, a posição do mouse quando ele foi executado etc.
Para acessá-las, devemos definir um parâmetro na função que chamamos dentro do eventListener que representa o evento em si.

botaoTempo.addEventListener("click", (evento) => {
  
});

Além disso, podemos acessar propriedades do evento usando a dot notation.
A propriedade timeStamp retorna um número que representa a quantidade de milissegundos desde a renderização da página até o momento em que o evento aconteceu.

botaoTempo.addEventListener("click", (evento) => {
  console.log(evento.timeStamp)
})

Muitas vezes, por questão de segurança, os sites podem "deslogar" os usuários após um certo tempo de inatividade desde que a página carregou.

A propriedade target nos permite acessar as informações e propriedades tanto do elemento que ativou o evento quanto dos seus elementos filhos. Para ativá-la, usamos:

botaoCor.addEventListener("click", (evento) => {
  console.log(evento.target)
})

****************************************************************************************     Eventos de teclado

Os eventos de teclado são muito populares na área de desenvolvimento de videogames. 

Esses tipos de eventos nos permitem adicionar interatividades mais sofisticadas aos nossos sites, como navegar usando os controles numéricos ou fechar elementos usando a tecla escape.

Evento	    Descrição
keypress	Evento que só reconhece as teclas de letras, números ou pontuação, desconsiderando teclas como SHIFT, ALT, setas etc.
keydown	    Evento disparado ao pressionar uma tecla. Ele é executado de forma repetida se a tecla permanecer pressionada.
keyup	    Evento disparado ao soltar uma tecla após pressioná-la.

Ao capturar as informações de qualquer um desses eventos de teclado, teremos acesso às propriedades key e code.

document.addEventListener("keyup", (e)=> {
  console.log(e.key);
  console.log(e.code);
})

Essa propriedade representa o valor que a tecla guarda e não necessariamente é um valor único.
Por exemplo, a tecla 1 do Numpad e a tecla 1 do teclado alfanumérico guardam o mesmo valor na propriedade key.

******************************************************************************************            Propriedade code

Essa propriedade guarda um código único que representa a tecla e não é repetido por outra tecla. Podemos comparar com o atributo id dos elementos HTML.
Por exemplo, a tecla 1 do Numpad e a tecla 1 do teclado alfanumérico guardam valores distintos na propriedade code.

********************************************************************************     Funções nativas

Nesse curso, aprendemos também sobre o uso de duas funções nativas da linguagem JavaScript para aplicarmos em conjunto com os eventos de formulário.

********************************************************************************  preventDefault( )
O método preventDefault( ) impede o comportamento padrão de qualquer elemento capturado do DOM, como a navegação de links com a tag <a> e o envio de formulários.

Esse método é acessado e executado a partir do parâmetro que representa o evento nas funções, que foram passadas como segundo parâmetro do eventListener.

link.addEventListener("click", (evento) => {

  evento.preventDefault()

})

*************************************************************************************       alert( )

A função alert() é usada para exibir uma mensagem de feedback ao usuário.
Para usá-la, basta executá-la passando uma string, que contém a mensagem que quer exibir, como argumento.

alert("Não foi possível enviar os dados do formulário")

Os alertas exibidos são recursos implementados pelo navegador e aparecem em uma janela fora do corpo do site.

É muito comum usar essas mensagens de feedback para informar aos usuários quando não foi possível executar uma ação do site ou quando uma ação foi executada de forma satisfatória, entre outras formas.

*********************************************************************************         Eventos de formulário

Eventos de formulário são usados, principalmente, para implementar ações de validação nos nossos formulários. Assim, evita o envio de informações erradas, informa aos usuários a inserção errada de dados e o status de envio de informações.

Evento	Descrição
focus	Quando o elemento é focado pelo usuário
blur	Quando um elemento perde o foco do usuário
change	Quando um elemento teve seu valor alterado após perder o foco
submit	Quando enviamos as informações do formulário

Sobre os eventos de formulário:

Dizemos que um elemento "ganha foco" quando habilitamos a inserção de dados, geralmente clicando nele;

Os eventos changes são executados de forma um pouco diferente, dependendo do tipo de input e como os dados são inseridos;

Os eventos do tipo submit devem ser executados no elemento do formulário em si, não no botão com tipo submit.

********************************************************************      Conclusão

Vimos muitos assuntos importantes nesse módulo! Que tal fazer um estudo dirigido sobre a disciplina de JavaScript I e JavaScript II?

***********************************************************************     Estudo Dirigido

Você pode escrever essa tabela em uma folha de papel ou fazer o seu download clicando no botão abaixo. 
Realizar esse exercício pode te ajudar a perceber a sua evolução em relação ao conteúdo e aos pontos que você ainda precisa melhorar. E aí, vamos juntos?

Conectar                                                                    Expandir                                                                                        Desafiar
(Como os conteudos trabalhados aqui te conectam                 (Como os conteúdos trabalhados aqui expandem o que você já sabe?)                           (Quais conteúdos ainda te desafiam ou te confundem?)
com os que você já sabia)   






