// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel);

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper);
    inputCorretos.username = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputCorretos.username = true;
  }
});

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

// Validar valor do input
emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputCorretos.email = true;
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputCorretos.email = false;
  }
});

// ---------- VALIDAÇÃO SENHA ---------- //
const senhaInput = document.getElementById("senha");
const senhaLabel = document.getElementById('label[for="senha"]');
const senhaHelper = document.getElementById("senha-helper");

senhaInput.addEventListener("blur", (e) => {
  const senhaValue = e.target.value;

  if (senhaValue.length) {
    estilizarInputCorreto(senhaInput, senhaHelper);
    inputCorretos.senha = true;
  } else {
    estilizarInputIncorreto(senhaInput, senhaHelper);
    senhaHelper.innerText = "A senha é obrigatória";
    inputCorretos.senha = false;
  }
});

// ---------- VALIDAÇÃO CONFIRMAÇÃO DE SENHA ---------- //
const confSenhaInput = document.getElementById("confirma-senha");
const confSenhaLabel = document.getElementById('label[for="confirma-senha"]');
const confSenhaHelper = document.getElementById("confirma-senha-helper");

confSenhaInput.addEventListener("blur", (e) => {
  const value = e.target.value;

  if (value === senhaInput.value) {
    estilizarInputCorreto(confSenhaInput, confSenhaHelper);
    inputCorretos.confirmarSenha = true;
    //console.log(inputCorretos.confirmarSenha);
  } else {
    estilizarInputIncorreto(confSenhaInput, confSenhaHelper);
    confSenhaHelper.innerText = "As senhas devem ser iguais";
    inputCorretos.confirmarSenha = false;
  }
});

// ---------- HABILITAR ENVIO DE FORMULARIO ---------- //

const submitButton = document.getElementById("submit");

const inputCorretos = {
  username: false,
  email: false,
  senha: false,
  confirmarSenha: false,
};

submitButton.addEventListener("click", (e) => {
  //e.preventDefault()
  //console.log('oi')
  const values = Object.values(inputCorretos);

  console.log("ARRAY FILTRADO", values);
  const anyFalse = values.filter((value) => value === false);

  console.log("ARRAY FILTRADO", anyFalse);

  if (!anyFalse.length) {
    alert("Formulario enviado com sucesso!");
    //aqui chama a api de banco de dados!
  } else {
    alert("Preencha os campos obrigatórios!");
  }
});
