import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_LIST_DETAILS = gql`
  query GetListDetails($listId: ID!) {
    list(id: $listId) {
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

const ListView = ({ listId }) => {
  const { loading, error, data } = useQuery(GET_LIST_DETAILS, {
    variables: { listId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { list } = data;

  return (
    <div>
      <h1>{list.title}</h1>
      <h2>Jobs:</h2>
      <ul>
        {list.jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;