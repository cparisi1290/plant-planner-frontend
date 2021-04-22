# Welcome to Plant Planner!
## How not to kill your plants!
    Keep your plants happy and healthy with Plant Planner. It is a scheduling system that helps you keep track of all your plants and how to care for them. 
    Add each plant to this app and any specific information to help it grow and more importanly, *thrive*. Share this app with friends and family so they know how to tend to your plants when you are away. Input information such as where your plants are located, any additional needs for each plant, how to care for your plants and add picture to make it super clear. Happy Planting!

## Installation Frontend

Must be linked up with [Plant Planner Backend](https://github.com/cparisi1290/plant-planner-backend) to upload and save data. 
        
    Clone the frontend repo - linked above

    Right click on index.html - to reveal in explorer pop-up box.

    Double click on index.html - to open in the browser.

## Installation Backend

    Clone this repo
    Run bundle install
    Run rails s
    Open your browser to localhost:3000

## Database Creation in Backend

    rails db:create
    rails db:migrate

## Database Server Run

    enable_extension "plpgsql"
    
    To start up the postgre sql server, input code into terminal:
    
    1) sudo apt-get update

    2) sudo apt-get install postgresql postgresql-contrib
    
    3) ls /etc/postgresql/13/main/

    4) service postgresql status - to check the staus of the server
    
    If it's a down status:
    5) sudo /etc/init.d/postgresql start - then check status to make sure it's up and running

## Ruby version
    ruby 2.6.1p33

## System dependencies
    bootsnap (>= 1.4.4)
    byebug
    fast_jsonapi
    listen (~> 3.3)
    pg (~> 1.1)
    puma (~> 5.0)
    rack-cors
    rails (~> 6.1.3, >= 6.1.3.1)
    spring
    tzinfo-data

## Contributing

 This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct. Bug reports and pull requests are found on GitHub at https://github.com/cparisi1290/plant-planner-frontend.

