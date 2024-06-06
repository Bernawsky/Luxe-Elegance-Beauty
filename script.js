const menu = document.getElementById("menu");
const barras = document.getElementById("barras");
const sair = document.getElementById("sair");
const links = document.getElementById("links");
const btn = document.getElementById("btn");
const link = document.getElementById("link");
const header = document.getElementById("header");

function openMenu() {
  if ((barras.style.display = "flex")) {
    barras.style.display = "none";
    links.style.display = "flex";
    sair.style.display = "flex";
  }
}

function closeMenu() {
  if ((sair.style.display = "flex")) {
    sair.style.display = "none";
    barras.style.display = "flex";
  }
}

function closeLink() {
  var screen = window.matchMedia("(max-width: 900px)");

  if (screen.matches) {
    /*Menor ou igual */
    links.style.display = "none";
    sair.style.display = "none";
    barras.style.display = "flex";
  } else {
    links.style.display = "flex";
  }
}

function myFunction(screen) {
  if (screen.matches) {
    links.style.display = "none"; /*menor ou igual*/
  } else {
    links.style.display = "flex"; /*maior*/
  }
}
var screen = window.matchMedia("(max-width: 800px)");

myFunction(screen);
screen.addEventListener("change", function () {
  myFunction(screen);
});
