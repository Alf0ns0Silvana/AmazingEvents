let htmlEvents = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.Date);
        htmlEvents += `<div class="card">
        <img src="${event.image}" alt="">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <span>${event.date}</</span>
            <p class="card-text">${event.description}</</p>
        </div>
        <div class="card-body2">
            <span>${event.category}</span>
            <span>${event.place}</</span>
            <span>${event.capacity}</span>
            <span>${event.assistance}</</span>
            <span>${event.price}</</span>
        </div>
        </div>`
}
console.log(htmlEvents);