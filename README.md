# Clean Architecture Example
## Description

We are using nest here, it's an awesome framework. You should check it out: https://nestjs.com

Adapter:
- Contains MVC
- - Controllers
- - Services
- - Models
- - - Inputs, in rest request body, headers, query, etc.
- - - Outputs, in rest response body, headers, etc.
- Contains Framework Stuff:
- - Modules
- - Dependency Injection Mapping
- Uses lots of decorators

Domain:
- Contains abstractions:
- - Use cases abstractions
- - Use cases inputs and outputs
- - Use case dependencies abstractions
- Contains domain models:
- - Concrete models of the domain, these are not use-case IO, but are usually part of the use case IO.
- Entities:
- - We could add any kind of business artifact here, like a specific account validator.

UseCases:
- These are the application business rules, aka orchestrator:
- - In a banking application, the transfer money use-case would have a bunch of validations, like checking for existing balance, checking if accounts exist... All these are application business rules and would occur in the layer.
- In nestjs we are violating one principle of clean architecture in this layer, to use @Injectable() and leverate the Dependency Injection framework. We do that, so that we are not compelled to create an abstraction between the two and create an even more complex environment.


In this exmaple three layers were enough to keep business and tecnology isolated.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
