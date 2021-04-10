const endPoint = "http://localhost:3000/api/v1/plants"
document.addEventListener('DOMContentLoaded', () => {
    fetchPlants()

    const plantForm = document.querySelector("#create-plant-form")

    plantForm.addEventListener("submit", (e) => formHandler(e))
})

function fetchPlants() {
    fetch(endPoint)
    .then(resp => resp.json())
    .then(plants => {
        plants.data.forEach(plant => {
           render(plant)
        })
    })
}

function render(plant) {
    const plantContainer = `
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
        <button class="delete" data-id=${plant.id}>Delete</button>
    </div> <br><br>
`;
document.querySelector('#plant-container').innerHTML += plantContainer
}

function formHandler(e) {
    e.preventDefault()
    // console.log(e)
    const nameInput = document.querySelector("#name-input").value
    const wateringDayInput = document.querySelector("#watering-day-input").value
    const roomInput = parseInt(document.querySelector("#rooms").value)
    const lightInput = document.querySelector("#light-input").value
    const waterInput = document.querySelector("#water-input").value
    const foodInput = document.querySelector("#food-input").value
    const humidityInput = document.querySelector("#humidity-input").value
    const temperatureInput = document.querySelector("#temperature-input").value
    const toxicityInput = document.querySelector("#toxicity-input").value
    const additionalCareInput = document.querySelector("#additional-care-input").value
    const urlInput = document.querySelector("#url-input").value

    postPlant(nameInput, wateringDayInput, roomInput, lightInput, waterInput, foodInput, humidityInput, temperatureInput, toxicityInput, additionalCareInput, urlInput)
}

function postPlant(name, watering_day, room_id, light, water, food, humidity, temperature, toxicity, additional_care, image_url) {

    let bodyData = {name, watering_day, room_id, light, water, food, humidity, temperature, toxicity, additional_care, image_url}

    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
      })
    .then(resp => resp.json())
    .then(plant => {
        const plantData = plant.data
            render(plantData)
    })
}