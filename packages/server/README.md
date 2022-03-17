# Server

REST API for restaurant management system.

## Setup

Use the [Docker](https://www.docker.com/) container engine and [Docker Compose](https://docs.docker.com/compose/) wrapper to create a local database instance.

```sh
yarn setup:local
```

> Notice that the container should only be used for development and [Mongo Atlas](https://www.mongodb.com/atlas/database) or a in cloud solution for production since it manges replicas, shards and backup by default, in this case its not being used since Heroku charges for database usage

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

## Deploy

Check the monorepo read me for more details.