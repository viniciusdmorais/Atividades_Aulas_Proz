const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
  {
    titulo: "Sitio do Ar",
    subtitulo: "Estamos orgulhosos do nosso passado!",
    data: "16/12/2022",
    texto: "Chef Sánchez & Co é um chef americano moderno dedicado a fazer arte culinária de todas as regiões do mundo - servindo apenas ingredientes de alta qualidade adquiridos localmente por sua equipe de especialistas que os preparam com uma filosofia de menu inovadora que permite ao cliente se apropriar de seus próprias escolhas alimentares."
  },
]


// Criando uma estrutura de repetição para gerar o innerHTML para artigos novos
for (let i=0; i < arrayPostagens.length; i++){

  // criar elemento
  const novoarticle = document.createElement('article')

  // popular elemento
  novoarticle.innerHTML = `
  <h3>${arrayPostagens[i].titulo}</h3>
  <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
  <div class="data">${arrayPostagens[i].data}</div>
  <p>${arrayPostagens[i].texto}</p>
  `

  // colocar no DOM
  const main = document.querySelector('main');
  main.appendChild(novoarticle);

}


/*
Sem usar a estrutura de repetição

novoArticle.id = 'post-2' //novo id 
// popular elemento
novoArticle.innerHTML = `
<h3>${arrayPostagens[1].titulo}</h3>
<p class="subtitulo">${arrayPostagens[1].subtitulo}</p>
<div class="data">${arrayPostagens[1].data}</div>
<p>${arrayPostagens[1].texto}</p>
`
 // colocar no DOM
  const main = document.querySelector('main');
  main.appendChild(article);

*/

