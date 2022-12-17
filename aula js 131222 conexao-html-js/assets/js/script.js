const titleh3 = document.getElementById('texto')

/*console.log(titleh3)*/

titleh3.innerText = 'Mudando o texto'

const listaredes = document.getElementsByClassName('lista_redes')

//console.log(listaredes.innerText)
//console.log(listaredes)
//console.log(listaredes[0].childNodes[1].innerText)
//console.log(listaredes[1])

function imprimir(listaElementos) {
    for (i = 0 ; i <= listaElementos.length; i++ ) {
	    console.log(listaElementos[1].childNodes[i].innerText);
    }
}

imprimir(listaredes)

//console.log(listaredes[0]);

// como criar um objeto.
const user = {
    username: 'Vinicius',
    sort: 6,
    idade: 18,
    frutaruim: 'maça',
    comidafavorita: ['pizza', 'esfiha', 'coxinha']
}
//console.log(user.idade) // como ver o valor das chaves
//console.log(user.comidafavorita[1]) // como ver o valor do array dentro das chaves

/* documentação:
https://ricardo-reis.medium.com/objetos-javascript-e347adc3a8ac
*/