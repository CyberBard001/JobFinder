import { IResolvers } from 'graphql-tools';
import { ListService } from '../../services/list.service';

const listService = new ListService();

const resolvers: IResolvers = {
  Query: {
    // Add queries for listing jobs or lists if needed
  },
  Mutation: {
    createList: async (_, { input }) => {
      return await listService.createList(input);
    },
    publishList: async (_, { listId }) => {
      return await listService.publishList(listId);
    },
    // Add more mutations as needed
  },
};

export default resolvers;