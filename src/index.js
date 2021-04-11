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
            // every new instance goes through constructor
            let newPlant = new Plant(plant, plant.attributes)

            document.querySelector('#plant-container').innerHTML += newPlant.renderPlantCard()
        })
    })
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
        let newPlant = new Plant(plantData, plantData.attributes)
        
        document.querySelector('#plant-container').innerHTML += newPlant.renderPlantCard()
    })
}