# microservice-docker
Simple Microservices App with docker support

## Used patterns:
    - Authentication broker
    - Service Façade

## Details

This project allows you to:
- create user account
- see the list of cars from database

There are 3 systems:
1. Users API - responsible for authorization (.NET Core WebApi Project)
2. Cars API - responsible with car management (.NET Core WebApi Project)
3. Client App (Angular)

### Project architecture
![alt text](https://i.imgur.com/QmWx2aL.png)

### BPMN
![alt text](https://i.imgur.com/mgDNFHl.png)

### BMM
![alt text](https://i.imgur.com/FImbnXe.png)

### Patterns

- Authentication Broker - basically we have a separate service that issues tokens to clients and it makes sure that they only users with tokens access the resources available on the server

- Service Façade - provides loose coupling between a service requester and functionality that is provided by an application or capability that is not service-enabled. The loose coupling conceals the complexities of the provider and presents a standard web service interface

### How to use

To start the server:
1. run docker-compose build
2. run docker-compose up

To start the client:
1. npm i
2. ng serve

