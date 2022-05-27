function cambiarTexto() {
  document.getElementById("prueba").innerHTML =
    "aprendiendo una nueva habilidad";
}

function cambiarTexto1() {
  document.getElementById("loquito").innerHTML = "Sos un puto crack";
  document.getElementById("loquito1").innerHTML =
    "esto es un block code y va entre {}";
}

//MENU DESPLEGABLE CON JAVASCRIPT (Una manera de hacerlo)
function ver(n) {
  document.getElementById("submenu").style.display = "inline-block";
}
function ocultar(n) {
  document.getElementById("submenu").style.display = "none";
}

var toggleButton = document.getElementById("toggle-icon");
var sidebar = document.getElementById("sidebar");

console.log(sidebar.classList);

toggleButton.addEventListener("click", function () {
  if (sidebar.classList.contains("showSidebar")) {
    sidebar.classList.remove("showSidebar");
    sidebar.classList.add("hideSidebar");
  } else {
    sidebar.classList.add("showSidebar");
    sidebar.classList.remove("hideSidebar");
  }
});
