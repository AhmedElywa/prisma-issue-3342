## Introduction

This repository contains reproduction for https://github.com/prisma/prisma/issues/3342


### Steps for Reproduction

1. Clone this repo and fill out your credentials in `prisma/.env`
2. Run `yarn install`
3. Run `npx prisma migrate save --experimental && npx prisma migrate up --experimental`
4. Run `npx prisma generate`
5. Run `yarn start`


### Version
```
Environment variables loaded from prisma/.env
@prisma/cli          : 2.5.0
Current platform     : darwin
Query Engine         : query-engine 9a670138b1db276001d785a2adcba1584c869d24 (at node_modules/@prisma/cli/query-engine-darwin)
Migration Engine     : migration-engine-cli 9a670138b1db276001d785a2adcba1584c869d24 (at node_modules/@prisma/cli/migration-engine-darwin)
Introspection Engine : introspection-core 9a670138b1db276001d785a2adcba1584c869d24 (at node_modules/@prisma/cli/introspection-engine-darwin)
Format Binary        : prisma-fmt 9a670138b1db276001d785a2adcba1584c869d24 (at node_modules/@prisma/cli/prisma-fmt-darwin)
Studio               : 0.259.0
```
