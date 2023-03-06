let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementsById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementsById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementsById("nav").classList = "";
  menuVisible = false;
}

let htmlEvents = "";
let cardContainer = document.getElementById("containerCard");
for (let event of data.events) {
  htmlEvents += createCard;
}
console.log(htmlEvents);

//input checkbox 

let categories = [];
let checkboxes = document.getElementById("checkbox");
console.log(checkboxes)


// Input busqueda

let resultados = [];
let buttonsearch = document.getElementById("button-search");
buttonsearch.addEventListener("click", (e) => {
  e.preventDefault();
  let valortext = document.getElementById("button-search").value.toLowerCase();
  resultados = [];
  for (let event of data.events) {
    if (event.name.toLowerCase().includes(valortext) || event.description.toLowerCase().includes(valortext)) {
      resultados.push(event);
    }
  }
  for (let resultado of resultados){
    console.log(resultado)
  }
}); //aparecen todos los eventos