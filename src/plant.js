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
}

Plant.all = [];