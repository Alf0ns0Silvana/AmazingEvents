const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
const eventos = data.events.find(event => event._id == id)
console.log(eventos);

const cardEvent = document.querySelector(".pagevent")
cardEvent.innerHTML =  `<div class="cardevent">
<div class="card">
<div class="row">
<div id = "image" class="col-md-4">
<img src="${eventos.image}" class="img-fluid justify-content-center align-items-center">
</div>
<div id = "texto" class="col-md-8">
<div class="card-body">
  <h5 class="card-title">${eventos.name}</h5>
  <p class="card-text">${eventos.description}</p>
  <p class="card-text">Date: ${eventos.date}</p>
  <p class="card-text">Category: ${eventos.category}</p>
  <p class="card-text">Place: ${eventos.place}</p>
  <p class="card-text">Capacity: ${eventos.capacity}</p>
  ${eventos.estimate ?`<p class="card-text">Estimate: ${eventos.estimate}</p>` : ""}
  ${eventos.assistance ?`<p class="card-text">Assistance: ${eventos.assistance}</p>` : ""}
  <p class="card-text">Price: $${eventos.price}</p>
</div>
</div>
</div>
</div>
</div>`;