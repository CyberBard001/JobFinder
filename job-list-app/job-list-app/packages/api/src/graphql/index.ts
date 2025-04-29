import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { jobResolvers } from './job/job.resolvers';
import { listResolvers } from './list/list.resolvers';
import jobTypeDefs from './job/job.schema.graphql';
import listTypeDefs from './list/list.schema.graphql';

const typeDefs = mergeTypeDefs([jobTypeDefs, listTypeDefs]);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...jobResolvers.Query,
      ...listResolvers.Query,
    },
    Mutation: {
      ...jobResolvers.Mutation,
      ...listResolvers.Mutation,
    },
  },
});

export default schema;