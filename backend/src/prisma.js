import { Prisma } from 'prisma-binding';
import { fragmentReplacements } from './resolvers/index';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466/project-lockbox/dev',
  secret: '12ed1w2ej09o',
  fragmentReplacements
});

export default prisma;
