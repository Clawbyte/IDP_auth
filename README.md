# IDP project: microservice for authentication

## Usage
* First, build the image with `docker build -t auth-backend:latest ./auth-backend`
* Before running anything, make sure you created the network with `docker network create --driver overlay --scope swarm app-network`
* Also make sure you created the kong network with `docker network create --driver overlay --scope swarm kong-net`
* You can check if the networks exist with `docker network ls`
* To use the auth service, simply run `docker stack deploy -c docker-compose.yml auth_stack` inside this folder after the previous steps
* Running the server locally will not work, always run through docker

## Functionality
* Added register route with username and password
* Added login route with username and password that generates a jwt token
* Added token verification

## Technologies
Express, Typescript, Docker, Docker Compose, Docker Swarm, Kong