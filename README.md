<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description
Execução  de um tutorial [pego na internet](https://medium.com/@iago.maiasilva/construindo-uma-api-com-nestjs-postgresql-e-docker-parte-1-criando-nosso-primeiro-endpoint-248d4b8ecc9c) que na minha opinião é o melhor conteúdo deste tipo em português que encontrei, sobre uma aplicação postgresql, docker e o framework [Nest](https://nestjs.com), com o intuito de práticar os conhecimentos.

## Funcionalidades
- Criação de conta para usuários comuns
- Criação de conta para usuários Administradores
- Autenticação e Autorização
- Envio de emails para confirmação de cadastro
- Envio de emails para recuperação de senha
- Busca de usuários com filtros e paginação
- Busca de dados de um usuário específico
- Bloquear o acesso de um usuário
- Manter um log do que acontece no servidor


## Installation

```bash
$ npm install
```

## Running Docker
```bash
#up container database
docker-compose up

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
