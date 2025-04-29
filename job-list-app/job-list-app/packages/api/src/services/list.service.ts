import { List } from '../models/List'; // Assuming you have a List model defined
import { Job } from '../models/Job'; // Assuming you have a Job model defined

export class ListService {
  async createList(name: string): Promise<List> {
    const newList = new List({ name });
    return await newList.save();
  }

  async publishList(listId: string): Promise<List | null> {
    const list = await List.findById(listId);
    if (list) {
      list.published = true;
      return await list.save();
    }
    return null;
  }

  async addJobToList(listId: string, jobId: string): Promise<List | null> {
    const list = await List.findById(listId);
    if (list) {
      const job = await Job.findById(jobId);
      if (job) {
        list.jobs.push(job);
        return await list.save();
      }
    }
    return null;
  }

  async getLists(): Promise<List[]> {
    return await List.find();
  }

  async getListById(listId: string): Promise<List | null> {
    return await List.findById(listId).populate('jobs');
  }
}