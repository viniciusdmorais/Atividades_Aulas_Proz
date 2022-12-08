const username = 'viny'
let favorite_food = 'lasanha'
let numeroDaSorte = 6

//favorite_food = 'BK'

if (favorite_food == 'lasanha' && numeroDaSorte > 5) {
  console.log('a comida' ,favorite_food, ' é muito gostosa') 
} 
else if (numeroDaSorte <= 5){
  console.log(`a comida ${favorite_food} não tá legal`)
}
else {
  console.log(favorite_food + " não é comida favorita")
}

/*
exemplos de como usar variavel com texto:

  `a comida ${favorite_food} não tá legal`
  favorite_food + " não é comida favorita"
  'a comida' ,favorite_food, ' é muito gostosa'

*/

let numA = 5
let numB = 8
const soma = numA + numB

console.log("O Resultado da soma é: " + soma)

/* resultado média  */

const media = soma/2;
console.log(`O Resultado da média é ${media}`)

