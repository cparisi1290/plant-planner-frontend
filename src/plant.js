class Plant {

    constructor(plant, plantAttributes) {
        this.id = plant.id;
        this.name = plantAttributes.name
        this.watering_day =plantAttributes.watering_day
        this.room = plantAttributes.room
        this.light = plantAttributes.light
        this.water = plantAttributes.water
        this.food = plantAttributes.food
        this.humidity = plantAttributes.humidity
        this.temperature = plantAttributes.temperature
        this.toxicity = plantAttributes.toxicity
        this.additional_care = plantAttributes.additional_care
        this.image_url = plantAttributes.image_url
        Plant.all.push(this)
    } 

    deletePlant(id) {
        const deleteButton = document.createElement('button')
        deleteButton.className = "delete"
        deleteButton.id = id
        deleteButton.innerText = "delete"
        // `<button type="button" class="delete" data-id=${id}>Delete</button><br><br><br><br></br>`
        deleteButton.addEventListener('click', (e) => deleteHandler(e))
        console.log(deleteButton)
        return deleteButton
    }

    renderPlantCard() {
        
        let plant = document.createElement('div')
        plant.className = plant.id

        let body = `
                <img src=${this.img_url} height="200" width="250">
                <h1>${this.name}</h1>
                <h2>Watering Day: ${this.watering_day} - Location: ${this.room.name}</h2>
                <h3>Plant Info</h3>
                <p><b>Light:</b> ${this.light}</p>
                <p><b>Water:</b> ${this.water}</p>
                <p><b>Food:</b> ${this.food}</p>
                <p><b>Humidity:</b> ${this.humidity}</p>
                <p><b>Temperature:</b> ${this.temperature}</p>
                <p><b>Toxicity:</b> ${this.toxicity}</p>
                <p><b>Additional Care:</b> ${this.additional_care}</p>
            `;
        plant.innerHTML = body
        plant.append(this.deletePlant(this.id))
        console.log(plant)
        return plant
    }



    // static findById(id) {
    //     return this.all.find(plant => plant.id === id);
    // }
}

Plant.all = [];