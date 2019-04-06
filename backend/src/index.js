import { GraphQLServer, PubSub } from 'graphql-yoga';
import { resolvers, fragmentReplacements } from './resolvers/index';
import prisma from './prisma';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: `${__dirname}/schema.graphql`,
  resolvers,
  context(request) {
    return {
      pubsub,
      prisma,
      request
    };
  },
  fragmentReplacements
});

server.start({ port: process.env.PORT || 4000 }, () => {
  console.log('The server is up! at http://localhost:4000');
});
