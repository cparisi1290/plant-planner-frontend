const endPoint = "http://localhost:3000/api/v1/plants"
document.addEventListener('DOMContentLoaded', () => {
    fetchPlants();  
})

function fetchPlants() {
    fetch(endPoint)
    .then(resp => resp.json())
    .then(plants => {
        console.log(plants);
        plants.data.forEach(plant => {
            const plantMarkup = `
                <div data-id=${plant.id}>
                    <img src=${plant.attributes.img_url} height="200" width="250">
                    <h1>${plant.attributes.name}</h1>
                    <h2>Watering Day: ${plant.attributes.watering_day} - Location: ${plant.attributes.room.name}</h2>
                    <h3>Plant Info</h3>
                    <p><b>Light:</b> ${plant.attributes.light}</p>
                    <p><b>Water:</b> ${plant.attributes.water}</p>
                    <p><b>Humidity:</b> ${plant.attributes.humidity}</p>
                    <p><b>Temperature:</b> ${plant.attributes.temperature}</p>
                    <p><b>Toxicity:</b> ${plant.attributes.toxicity}</p>
                    <p><b>Additional Care:</b> ${plant.attributes.additional_care}</p>
                </div>
            `;
            document.querySelector('#plant-container').innerHTML += plantMarkup
        })
    })
}