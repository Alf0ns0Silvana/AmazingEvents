let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
async function getApiEvents(){
  try {
    let response = await fetch(urlApi);
    let data = await response.json();
    localStorage.setItem('dataLocal', JSON.stringify(data));
  } catch (error) {
    console.log('Sorry not found data:' + error);
  }
};

getApiEvents();
let data = JSON.parse(localStorage.getItem('dataLocal'));

function createcard(event) {
  let card =  `<div class="card d-flex text-center border-secondary" style="width: 15rem;">
  <img src="${event.image}" class="card-img-top">
  <div class="card-body">
      <h3 class="card-title mb-3">${event.name}</h3>
      <p class="card-text mb-3">${event.description}</p>
  </div>
    <div class="d-flex justify-content-center align-items-center mb-3">
      <span>Price: $ ${event.price}</span>
        <a href="./event.html?id=${event._id}" class="btn btn-outline-secondary" style="margin-left: 10px;">More</a>
    </div>
  </div>`
  return card;
};