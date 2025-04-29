import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Dashboard from '../components/Dashboard';

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

const DashboardPage = () => {
  const { loading, error, data } = useQuery(GET_JOB_LISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <Dashboard jobLists={data.jobLists} />
    </div>
  );
};

export default DashboardPage;