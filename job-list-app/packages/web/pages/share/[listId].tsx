import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import ListView from '../../components/ListView';

const GET_LIST = gql`
  query GetList($id: ID!) {
    list(id: $id) {
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

const ShareList = () => {
  const router = useRouter();
  const { listId } = router.query;
  const { loading, error, data } = useQuery(GET_LIST, {
    variables: { id: listId },
    skip: !listId,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Share List</h1>
      {data && data.list ? (
        <ListView list={data.list} />
      ) : (
        <p>No list found.</p>
      )}
    </div>
  );
};

export default ShareList;