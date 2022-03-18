# Server

Restaurant management system.

## Architecture

A modular architecture is implemented by separating validation, database and logic, in special the database code could be reduced by one third if database static methods or the schema is used to implement functions that share code with other modules and just the database name, parameters or body changes.

## Setup

Use the [Docker](https://www.docker.com/) container engine and [Docker Compose](https://docs.docker.com/compose/) wrapper to create a local database instance.

```sh
yarn setup:local
```

> Notice that the container should only be used for development and [Mongo Atlas](https://www.mongodb.com/atlas/database) or a cloud provider for production since it manges replicas, shards and backups by default, in this case its not being used since Heroku charges for database usage, thus the connection URL along with environment variables are not specially configured

## Run

Start the server.

```sh
yarn start
```

Open [localhost:4000](http://localhost:4000).

## Test

Test the server.

```sh
yarn test
```

## Documentation

To explore the database or create aggregation pipelines for data analysis use [Mongo Compass](https://www.mongodb.com/products/compass).

> For simplicity Swagger is not being used, since the available tests calls all the routes and describes its parameters and goals

## Deploy

Check the monorepo read me for more details.
