let numero = document.querySelector('h1');
let botao = document.querySelector('button');

let contagem = 0;

function addMaisUm() {
    contagem = contagem + 1;
    numero.innerText = contagem;
}

//addMaisUm();  // para chamar a função manualmente.

botao.addEventListener('click', addMaisUm);

