const title = document.getElementsByClassName("title");
const error_text = document.getElementsByClassName("error-text");
const username_input = document.getElementById("login-usuario");
const password_input = document.getElementById("login-senha");
//const botao = document.querySelector("button");

const botion = document.getElementsByClassName("botion");

const sucesso = document.getElementsByClassName('mensagem_ok');


title[0].style.color = "red";

//console.log(botao);
console.log(botion[0]);

//error_text[0].classList.add('visible')

function validaform() {
  if (username_input.value != "vinicius") {
    error_text[0].classList.add("visible");
  } else {
    error_text[0].classList.remove("visible")
  }
  if (password_input.value != "123456") {
    error_text[1].classList.add("visible");
  }else {
    error_text[1].classList.remove("visible")
    }
}

//validaform()

//botao.addEventListener("click", validaform);
botion[0].addEventListener("click", validaform)


function sucess() {
  sucesso[0].classList.add("visible") 
}
