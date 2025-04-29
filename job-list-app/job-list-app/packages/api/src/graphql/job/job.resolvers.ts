import { IResolvers } from 'graphql-tools';
import { JobService } from '../../services/job.service';

const jobService = new JobService();

const resolvers: IResolvers = {
  Query: {
    listJobs: async () => {
      return await jobService.getAllJobs();
    },
  },
  Mutation: {
    addJobToList: async (_, { jobId, listId }) => {
      return await jobService.addJobToList(jobId, listId);
    },
  },
};

export default resolvers;