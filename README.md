# TRAVELexp 

[![Codeship Status for cdwhitt/travelexp](https://app.codeship.com/projects/6d379a50-dbc3-0137-26b8-422ecf3ee4c1/status?branch=master)](https://app.codeship.com/projects/371466)

## Heroku Link

https://travelexp.herokuapp.com/

## Technologies

* Ruby - 2.6.5
* Rails - 5.2.3
* React - 16.8.0
* CarrierWave - 2.0.2
* Dropzone - 10.1.10
* React Google Maps - 9.4.5
* Geocoder - 1.5.2
* React Images - 1.0.0
* React Photo Gallery - 8.0.0
* Foundation-Rails - 6.5.3.0

## Description

TRAVELexp is a game-ified journal application for travel lovers to write about their favorite trips, excursions, and experiences. 

## To Run Locally

* Download the Repo
* 'yarn install' and 'bundle install' from your terminal
* create the database: 'bundle exec rake db:create', 'bundle exec rake db:migrate'
* You will need an AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, placed in a .env file
* 'yarn run start' and 'rails s'
* Navigate your browser to localhost:3000
* Run test suite with `yarn test` and `rspec`

## Author

Casey Whittaker
