class Plant {

    constructor(plant) {
        const {attributes, id} = plant

        this.id = id;
        this.name = attributes.name
        this.watering_day = attributes.watering_day
        this.room = attributes.room
        this.light = attributes.light
        this.water = attributes.water
        this.food = attributes.food
        this.humidity = attributes.humidity
        this.temperature = attributes.temperature
        this.toxicity = attributes.toxicity
        this.additional_care = attributes.additional_care
        this.image_url = attributes.image_url
        Plant.all.push(this)
    } 

    deletePlant(id) {
        const deleteButton = document.createElement('button')
        deleteButton.className = "delete"
        deleteButton.id = id
        deleteButton.innerText = "delete"
        // `<button type="button" class="delete" data-id=${id}>Delete</button><br><br><br><br></br>`
        deleteButton.addEventListener('click', (e) => deleteHandler(e))
        return deleteButton
    }

    renderPlantCard() {
        
        let plant = document.createElement('div')
        plant.className = plant.id

        let body = `
        <div class="row row-cols-4">
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                    <img src=${this.image_url} class="card-img-top">
                    
                        <h4 class="card-title text-center">${this.name}</h4>
                        <h6 class="card-subtitle text-center"><b>Watering Day: ${this.watering_day} | Location: ${this.room.name}</b></h6><br>
                        <p class="card-text mb-2 text-muted text-center"><b>Plant Information</b></p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Light: ${this.light}</li>
                            <li class="list-group-item">Water: ${this.water}</li>
                            <li class="list-group-item">Food: ${this.food}</li>
                            <li class="list-group-item">Humidity: ${this.humidity}</li>
                            <li class="list-group-item">Temperature: ${this.temperature}</li>
                            <li class="list-group-item">Toxicity: ${this.toxicity}</li>
                            <li class="list-group-item">Additonal Care: ${this.additional_care}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        `;
        plant.innerHTML = body
        plant.append(this.deletePlant(this.id))

        return plant
    }
    
    
    
    // static findById(id) {
        //     return this.all.find(plant => plant.id === id);
        // }
    }
    
    Plant.all = [];