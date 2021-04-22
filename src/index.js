const endPoint = "http://localhost:3000/api/v1/plants"
document.addEventListener('DOMContentLoaded', () => {
    fetchPlants()

    const addPlantArea = document.querySelector('#add-plant-area')
    addPlantArea.addEventListener('click', handleClick)

    const plantForm = document.querySelector("#plant-form")
    plantForm.addEventListener("submit", (e) => formHandler(e))

    // const deletePlant = document.querySelectorAll("button.delete")
    // console.log(deletePlant)
    // deletePlant.forEach(
    //     plant => plant.addEventListener("click", (e) => deleteHandler(e))   
    // )
})

function fetchPlants() {
    fetch(endPoint)
    .then(resp => resp.json())
    .then(plants => {
        plants.data.forEach(plant => {
            // every new instance goes through constructor and creates new instance of plant
            let newPlant = new Plant(plant, plant.attributes)
            document.querySelector("#plant-container").append(newPlant.renderPlantCard())
        })
    })
}

function handleClick(e) {
    if (e.target.id === 'add-button'){
        handleClickEvent(e)

    }else if (e.target.class === "btn btn-dark"){
        handleSubmit(e)
    }
}

function handleClickEvent(e) {
    const addPlantArea = document.querySelector('#add-plant-area')
    addPlantArea.innerHTML = `
        <div class="container">
            <form id="plant-form">
                <div class="form-group">
                <h3>Add a New Plant!</h3>

                <label for="name" class="highlight"><b>Name:</b></label>
                <input id='name-input' type="text" name="name" value="" class="form-control">
                <br>
                <label for="watering-day" class="highlight"><b>Choose a Watering Day: </b></label>

                <select id='watering-day-input' name="watering-day" value="" class="form-control" class="highlight">
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select><br>
                <label for="rooms" class="highlight"><b>Choose a Room: </b></label>

                <select id="rooms" name="rooms" class="form-control">
                    <!-- <option value="blank"></option> -->
                    <option value="1">Living Room</option>
                    <option value="2">Bedroom</option>
                    <option value="3">Kitchen</option>
                </select>
                <br>
                <label for="ligt" class="highlight"><b>Light:</b></label>
                <input id='light-input' type="text" name="light" value=""  class="form-control">
                <br>
                <label for="water" class="highlight"><b>Water:</b></label>
                <input id='water-input' type="text" name="water" value="" class="form-control">
                <br>
                <label for="food" class="highlight"><b>Food:</b></label>
                <input id='food-input' type="text" name="food" value="" class="form-control">
                <br>
                <label for="humidity" class="highlight"><b>Humidity:</b></label>
                <input id='humidity-input' type="text" name="humidity" value="" class="form-control">
                <br>
                <label for="temperature" class="highlight"><b>Temperature:</b></label>
                <input id='temperature-input' type="text" name="temperature" value="" class="form-control">
                <br>
                <label for="toxicity" class="highlight"><b>Toxicity:</b></label>
                <input id='toxicity-input' type="text" name="toxicity" value="" class="form-control">
                <br>
                <label for="additional-care" class="highlight"><b>Additional Care:</b></label>
                <input id='additional-care-input' type="text" name="additional-care" value="" class="form-control">
                <br>
                <label for="image" class="highlight"><b>Image:</b></label>
                <input id='url-input' type="text" name="image" value="" class="form-control">
                <br>

                <input type="submit" class="btn btn-dark">
                </div>
            </form>
        </div>
    `
}


function formHandler(e) {
    e.preventDefault()

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

    const configObj = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
      }

    fetch(endPoint, configObj)
    .then(resp => resp.json())
    .then(plant => {
        const plantData = plant.data
        let newPlant = new Plant(plantData)
        
        document.querySelector("#plant-container").append( newPlant.renderPlantCard())
    })
}

function deleteHandler(e) {
    // optimistic delete
    
    const id = e.target.id;
    e.target.parentElement.remove()
    const configObj = {
        method: "DELETE",
            headers: {"Content-Type": "application/json",
            Accepts: "application/json"
            // don't need a body because params are not being sent through
        }
      }
      
    fetch(endPoint + `/${id}`, configObj) 
        .then (resp => resp.json())
        .then (plant => alert(plant.message))
        
}