import React from 'react';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    description: string;
    company: string;
    location: string;
  };
  onAddToList: (jobId: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onAddToList }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <button onClick={() => onAddToList(job.id)}>Add to List</button>
    </div>
  );
};

export default JobCard;