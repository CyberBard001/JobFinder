import { useState } from 'react';
import { useRouter } from 'next/router';
import ListForm from '../../components/ListForm';

const NewListPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCreateList = async (listData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation CreateList($input: CreateListInput!) {
              createList(input: $input) {
                id
                title
              }
            }
          `,
          variables: { input: listData },
        }),
      });

      const result = await response.json();
      if (result.data.createList) {
        router.push(`/lists/${result.data.createList.id}`);
      } else {
        console.error('Failed to create list:', result.errors);
      }
    } catch (error) {
      console.error('Error creating list:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create New List</h1>
      <ListForm onSubmit={handleCreateList} loading={loading} />
    </div>
  );
};

export default NewListPage;