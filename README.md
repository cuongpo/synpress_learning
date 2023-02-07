# Metamask.SynpressTests

## How to launch tests locally

1. Change variables on your own in `.env` file 

2. Install dependencies 

```bash
yarn
```
3. Start tests

```bash
yarn test
```

## How to launch tests in Docker

1. Build image, create container and starting tests on it by one command

```bash
docker-compose --env-file ./.env up --build --exit-code-from synpress
```
