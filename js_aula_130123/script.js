// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let usernameHelper = document.getElementById("username-helper");
const formulary = document.getElementById("form");
let value = "";

// Mostrar popup do campo obrigatório

function togglePopUp(label, input) {
  input.addEventListener("blur", (e) => {
    //const value = e.target.value;
    value = e.target.value;

    if (value.length === 0) {
      console.log("Entrou no 1º IF");
      label.classList.add("required-popup");
      input.classList.add("error");
    } else if (value.length > 2 && value.length < 11) {
      console.log("Entrou no 2º IF");
      input.classList.add("correct");
      usernameHelper.classList.remove("visible");
    } else {
      console.log("Entrou no ELSE");
      label.classList.remove("required-popup");
      input.classList.remove("error");
    }
  });
}

togglePopUp(usernameLabel, usernameInput);
togglePopUp(emailLabel, emailInput);
togglePopUp(idadeLabel, idadeInput);
togglePopUp(senhaLabel, senhaInput);
togglePopUp(confirmaSenhaLabel, confirmaSenhaInput);

// valida input

usernameInput.addEventListener("change", (e) => {
  value = e.target.value;
  console.log(value);
  console.log(value.length);
});

formulary.addEventListener("submit", (e) => {
  console.log(e);
  //e.preventDefault();
  if (value.length < 3) {
    usernameInput.classList.add("error");
    usernameHelper.innerText = "Nome tem que ter mais de 3 letras";
    usernameHelper.classList.add("visible");
  } else if (value.length > 10) {
    usernameHelper.innerText = "Nome tem que ter no máximo 10 letras";
  } else {
    usernameInput.classList.remove("error");
    usernameHelper.classList.remove("visible");
    conferirSeTemCertoCaracter();
    enviarFormularioApi();
    
  }
});

function enviarFormularioApi() {
  console.log("DADOS ENVIADOS");
}

function conferirSeTemCertoCaracter() {
  const temOarroba = value.includes("@") && value.includes(".com");
  console.log(temOarroba);
}
