let htmlEvents = "";
let cardContainer = document.getElementById("containerCard");
for (let event of data.events) {
    htmlEvents += `<div class="card d-flex text-center border-secondary" style="width: 15rem;">
    <img src="${event.image}" class="card-img-top">
    <div class="card-body">
        <h3 class="card-title mb-3">${event.name}</h3>
        <p class="card-text mb-3">${event.description}</p>
    </div>
      <div class="d-flex justify-content-center align-items-center align-self-bottom mb-3">
        <span>Price: $ ${event.price}</span>
          <a href="./event.html" class="btn btn-outline-secondary me-md-2" id=${event._id} onClick="detailCard(this.id)">More</a>
      </div>
    </div>`;
}
console.log(htmlEvents);