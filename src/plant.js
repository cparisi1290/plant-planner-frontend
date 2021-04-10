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

    renderPlantCard() {
        return `
            <div data-id=${this.id}>
                <img src=${this.img_url} height="200" width="250">
                <h1>${this.name}</h1>
                <h2>Watering Day: ${this.watering_day} - Location: ${this.room.name}</h2>
                <h3>Plant Info</h3>
                <p><b>Light:</b> ${this.light}</p>
                <p><b>Water:</b> ${this.water}</p>
                <p><b>Humidity:</b> ${this.humidity}</p>
                <p><b>Temperature:</b> ${this.temperature}</p>
                <p><b>Toxicity:</b> ${this.toxicity}</p>
                <p><b>Additional Care:</b> ${this.additional_care}</p>
            </div> <br>
            <button data-id=${this.id} class="edit" data-id=${this.id}>Edit</button>
            <button data-id=${this.id} class="delete" data-id=${this.id}>Delete</button><br><br><br><br>
        `;
    }
}

Plant.all = [];