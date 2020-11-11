## Introduction

This repository contains reproduction for https://github.com/prisma/prisma-client-js/issues/933

### Steps for Reproduction

1. Clone this repo and fill out your credentials in `prisma/.env`
2. Run `yarn install`
3. Run `npx prisma migrate save --experimental && npx prisma migrate up --experimental`
4. Run `npx prisma generate`
5. Run `yarn start`

### Version

```
Environment variables loaded from prisma/.env
@prisma/cli          : 2.11.0
@prisma/client       : 2.11.0
Current platform     : darwin
Query Engine         : query-engine 58369335532e47bdcec77a2f1e7c1fb83a463918 (at node_modules/@prisma/engines/query-engine-darwin)
Migration Engine     : migration-engine-cli 58369335532e47bdcec77a2f1e7c1fb83a463918 (at node_modules/@prisma/engines/migration-engine-darwin)
Introspection Engine : introspection-core 58369335532e47bdcec77a2f1e7c1fb83a463918 (at node_modules/@prisma/engines/introspection-engine-darwin)
Format Binary        : prisma-fmt 58369335532e47bdcec77a2f1e7c1fb83a463918 (at node_modules/@prisma/engines/prisma-fmt-darwin)
Studio               : 0.311.0
```
