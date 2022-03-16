# Restaurant

Restaurant management system.

## Architecture

This is a monorepo that manages multiple packages and allows easy code sharing, simplified dependency management and code refactoring.

## Core

The packages are mainly built with Javascript, Node, Express and React.

## Setup

Install the dependencies.

```sh
npx lerna bootstrap --hoist
```

Clean previous installations, if necessary.

```sh
npx lerna clean -y
```

## Execute

Start all packages.

```sh
yarn start
```

Open [localhost:3000](http://localhost:3000) for front-end and [localhost:4000](http://localhost:4000) for back-end.

## Test

## Documentation

## Deploy

The following instructions describes how to deploy each monorepo package on [Heroku](https://heroku.com/), for that [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli) is required.

Create one application for each package.

> Notice that Heroku requires each application to have a unique name, thus add some identification after the package name to make it unique

```sh
heroku create client
```

```sh
heroku create server
```

Add the build package `heroku buildpacks:add -a server heroku/nodejs` for back-end packages, `heroku buildpacks:add -a client mars/create-react-app` for front-end packages and `heroku buildpacks:add -a name https://github.com/lstoll/heroku-buildpack-monorepo -i 1` for both.

Set the base in the environment variable `heroku config:set -a server APP_BASE=restaurant/packages/server` for back-end packages and `heroku config:set -a client APP_BASE=restaurant/packages/client` for front-end packages.

Publish the changes to the remote repository and connect the repository to Heroku, enable the automatic deploy or setup a pipeline.
