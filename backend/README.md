# Backend for Project Lockbox

#### Server built with [GraphQLYoga](https://github.com/prisma/graphql-yoga) 🧘🏽

#### Data is stored using [Prisma Client](https://www.prisma.io/) with PostgreSQL as the database.

---

#### Schema currently includes:

- User Authentication with JWT / bcrypt.js
- Lockbox information
- Transaction information

---

The server is used to build the Queries and Mutations for Project-Lockbox. Prisma provides its own Query and Mutations for the schema by default.

Prisma does not provide logice to reada or write to the database, so this server acts as a middleware to ensure proper use of each Query and Mutation.

Developmental database is hosted locally in a Docker container.

Production database will be deployed on heroku but kept private at client's request.
