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

const ListPage = () => {
  const router = useRouter();
  const { listId } = router.query;
  const { loading, error, data } = useQuery(GET_LIST, {
    variables: { id: listId },
    skip: !listId,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <ListView list={data.list} />;
};

export default ListPage;