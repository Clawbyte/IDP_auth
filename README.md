# IDP project: microservice for authentication

## Usage
* Before running anything, make sure you created the network with `docker network create app-network`
* You can check if the network exists with `docker network ls`
* To use the auth service, simply run `docker-compose up --build` inside this folder
* Running the server locally will not work, always run through docker

## Functionality
* Added register route with username and password
* Added login route with username and password that generates a jwt token
* Added token verification

## Technologies
Express, Typescript, Docker, Docker Compose