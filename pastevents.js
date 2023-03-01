let htmlEvents = "";
let cardContainer = document.getElementById("containerCard");
let currentDate = new Date(data.currentDate);
for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
        htmlEvents += createCard(event);
        }
cardContainer.innerHTML = htmlEvents;
}
console.log(htmlEvents)
