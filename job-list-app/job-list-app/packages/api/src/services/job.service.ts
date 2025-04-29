import { Job } from '../models/job.model'; // Import the Job model
import { Database } from '../database'; // Import the database connection

class JobService {
  // Function to list all jobs
  async listJobs() {
    return await Database.getJobs(); // Fetch jobs from the database
  }

  // Function to add a job to a list
  async addJobToList(jobId: string, listId: string) {
    const job = await Database.getJobById(jobId); // Fetch job by ID
    if (!job) {
      throw new Error('Job not found'); // Handle job not found
    }
    return await Database.addJobToList(jobId, listId); // Add job to the specified list
  }

  // Function to create a new job
  async createJob(jobData: any) {
    const newJob = new Job(jobData); // Create a new job instance
    return await Database.saveJob(newJob); // Save the job to the database
  }
}

export const jobService = new JobService(); // Export an instance of JobService