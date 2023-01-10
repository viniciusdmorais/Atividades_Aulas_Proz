/*No arquivo script.js, iremos capturar todos os elementos do DOM que usaremos com o método querySelector(), 
que serve para retornar um valor. Além disso, vamos definir a variável distanciaDaEsquerda, 
a qual representará a distância entre o elemento quadrado e a borda esquerda do elemento pai. 

Quando trabalhamos com eventos de teclado, temos três tipos de evento que podemos usar como ativadores: keypress, keydown e keyup.

Tipo	    Descrição
keypress	Tipo de evento que só reconhece teclas de letras, números ou pontuação, ou seja, 
            desconsidera teclas como Shift, Alt, setas etc.
keydown	    Tipo de evento disparado ao apertar uma tecla. Ele é executado de forma repetida se a tecla permanece apertada.
keyup	    Tipo de evento disparado ao soltar uma tecla. Importante destacar que, antes, ela precisa ser pressionada.

Esses eventos são usados em diferentes situações. 
Eles nos permitem ter mais controle sobre o tipo de interação que queremos para o usuário.

Os eventos de teclado podem ser atribuídos a elementos do tipo input se quisermos, por exemplo, 
ativá-los apenas quando o usuário inserir alguma informação em um local específico e travando se ele escrever em outro; 
ou diretamente no DOM, se quisermos que o evento seja disparado em qualquer parte da nossa página. 
No nosso caso, o evento de teclado será aplicado diretamente no objeto Document 
para dispará-lo sem precisar selecionar nenhum elemento específico. 
Assim, o site reconhecerá o comando logo quando clicarmos em alguma tecla.

Primeiro, definimos um evento do tipo keyup e declaramos uma arrow function no eventListener, 
que recebe o parâmetro e (evento). Dessa forma:

Para entender melhor os eventos de teclado, usaremos a função console.log() para ver quais propriedades existem

Ao salvar as mudanças e abrir nosso projeto no navegador com o LiveServer, 
é preciso clicar em qualquer tecla para ver o DevTools imprimindo algo semelhante a essa mídia na aba Console:
O nome KeyboardEvent indica que o evento disparado é um evento de teclado.
Se clicarmos no triângulo à esquerda do KeyboardEvent, podemos ver todas as propriedades que os eventos de teclado possuem. 
As duas propriedades que mais nos interessam nesse momento são code e key.
Neste link, temos a lista de code e key para todas as teclas.
ra entender melhor a diferença entre ambas propriedades, usaremos dois console.log(). 
Um irá imprimir a propriedade key do evento e o outro, a propriedade code.
Conforme o exemplo anterior, ao apertar a tecla "A" do teclado, serão retornadas duas linhas no terminal: 
a letra "A" minúscula e o código KeyA.
A primeira linha representa o valor que essa tecla guarda, neste caso, é a, e a segunda linha representa o único código 
que esse botão do teclado guarda.
Podemos comparar key e code como variáveis, pois duas variáveis diferentes podem salvar o mesmo valor, 
mas não podem ter o mesmo nome.
Para teclas com valores únicos, como as letras, podemos usar qualquer uma das propriedades sem problemas. 
Contudo, para teclas que compartilham valores com outras, é mais recomendável usar a propriedade code.
Por exemplo, se quisermos exibir os valores das propriedades key e code na nossa página, 
podemos chamar os elementos keyText e codeText, declarados no arquivo script.js, 
e atribuir a propriedade innerText deles aos valores das propriedades key e code respectivamente. Observe:

*/

let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0

document.addEventListener("keyup", (e)=> {
    //console.log(e);
    //console.log(e.key);
    //console.log(e.code);
    keyText.innerText = e.key;
    codeText.innerText = e.code;
})

/*
Para mover o elemento div com a classe quadrado no navegador, começamos adicionando outro eventListener ao objeto Document, 
dessa vez usando o tipo de evento keydown.
Usaremos o evento keydown para poder continuar deslocando o elemento ao manter apertada uma tecla. 
Queremos que nosso quadrado se desloque para a direita ao apertar a tecla da seta à direita, ou arrow right. 
Sabendo que o código desta tecla é ArrowRight, podemos usar uma estrutura condicional na nossa arrow function
 para verificar o valor do code do evento. Se o valor for o mesmo que ArrowRight, podemos imprimir uma mensagem com console.log().
 Nesse momento, o elemento quadrado está a zero pixels de distância da borda esquerda do seu elemento pai dele, o body. 
 Para deslocá-lo dez pixels à direita, no bloco de código da nossa estrutura condicional, 
 adicionamos dez ao valor atual da variável distanciaDaEsquerda e imprimimos o seu o valor no terminal.
 Agora, usaremos esse valor para deslocar o elemento quadrado. Para isso, precisamos acessar a propriedade style da variável quadrado
 e a propriedade left para definir a distância entre o elemento e a borda esquerda do seu elemento pai.
 Embora pouco usados no desenvolvimento web, os eventos de teclado podem destacar os nossos sites, oferecendo a possibilidade do usuário interagir com a página usando o teclado. 
Fechar um pop-up com a tecla Escape ou mostrar subseções da barra de navegação apertando teclas numéricas são exemplos
 de interações práticas e simples de implementar nos sites.
 */

document.addEventListener("keydown", (e)=>{
    if(e.code == "ArrowRight"){
        distanciaDaEsquerda = distanciaDaEsquerda + 10
        console.log(distanciaDaEsquerda);
        quadrado.style.left = distanciaDaEsquerda + "px"
        //console.log("Apertou a seta direita");
    }
    if(e.code == "ArrowLeft"){
        distanciaDaEsquerda = distanciaDaEsquerda - 10
        console.log(distanciaDaEsquerda);
        quadrado.style.left = distanciaDaEsquerda + "px"
        //console.log("Apertou a seta direita");
    }
    if(e.code == "ArrowUp"){
        distanciaDaEsquerda = distanciaDaEsquerda - 10
        console.log(distanciaDaEsquerda);
        quadrado.style.top = distanciaDaEsquerda + "px"
        //console.log("Apertou a seta direita");
    }
    if(e.code == "ArrowDown"){
        distanciaDaEsquerda = distanciaDaEsquerda + 10
        console.log(distanciaDaEsquerda);
        quadrado.style.top = distanciaDaEsquerda + "px"
        //console.log("Apertou a seta direita");
    }
})