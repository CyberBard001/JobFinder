import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import JobCard from './JobCard';

const GET_JOB_LISTS = gql`
  query GetJobLists {
    jobLists {
      id
      title
      jobs {
        id
        title
        description
      }
    }
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_JOB_LISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Job Lists</h2>
      <div>
        {data.jobLists.map((list) => (
          <div key={list.id}>
            <h3>{list.title}</h3>
            <div>
              {list.jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;