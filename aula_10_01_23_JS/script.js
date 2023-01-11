const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkDados = document.getElementById("link-perfil-dados");
const voltarPag = document.getElementById("voltar-index");

window.addEventListener("keyup", (e) => {
  console.log(e);

  if (e.key === "1") {
    if (navPerfil.style.display == "block") {
      linkDados.click();
    } else {
      navPerfil.style.display = "block";
    }
  }

  if (e.key === "Escape") {
    console.log(e.key);
    navPerfil.style.display = "none";
  }

  if (e.key === "Backspace") {
    console.log(e.key);
    voltarPag.click();
  }
});

linkPerfil.addEventListener("mouseover", () => {
  navPerfil.style.display = "block";
});
