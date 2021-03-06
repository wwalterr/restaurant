# Restaurant

Restaurant management system.

## Architecture

This is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that manages multiple packages and allows easy code sharing, simplified dependency management and code refactoring.

> Notice that for simplicity only one Git is being used to manage all packages

## Setup

Install the dependencies.

> Clean previous installations `npx lerna clean -y`

```sh
npx lerna bootstrap --use-workspaces
```

Setup all the packages.

```sh
yarn setup:local
```

## Run

Start all packages.

```sh
yarn start
```

Open [localhost:3000](http://localhost:3000) for front-end or [localhost:4000](http://localhost:4000) for back-end.

## Test

Test all packages.

```sh
yarn test
```

## Documentation

Check the each package read me for more details details.

## Deploy

The following instructions describes how to deploy each monorepo package on [Heroku](https://heroku.com/), for that [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli) is required.

Create one application for each package.

> Notice that Heroku requires each application to have a unique name

```sh
heroku create client
```

```sh
heroku create server
```

Add the build package `heroku buildpacks:add -a server heroku/nodejs` for back-end packages, `heroku buildpacks:add -a client mars/create-react-app` for front-end packages and `heroku buildpacks:add -a name https://github.com/lstoll/heroku-buildpack-monorepo -i 1` for both.

Set the base in the environment variable `heroku config:set -a server APP_BASE=packages/server` for back-end packages and `heroku config:set -a client APP_BASE=packages/client` for front-end packages.

Set the remote repository for each package on Heroku.

```sh
git remote add heroku-server https://git.heroku.com/server.git
```

```sh
git remote add heroku-client https://git.heroku.com/client.git
```

Publish the commits to the specifc remote origins.

```sh
git push -u heroku-server master
```

```sh
git push -u heroku-client master
```
