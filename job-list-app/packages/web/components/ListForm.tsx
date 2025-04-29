import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LIST } from '../lib/graphqlClient';

const ListForm = () => {
  const [listName, setListName] = useState('');
  const [createList] = useMutation(CREATE_LIST);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!listName) return;

    try {
      await createList({ variables: { name: listName } });
      setListName('');
      // Optionally, you can add a success message or redirect
    } catch (error) {
      console.error("Error creating list:", error);
      // Optionally, handle the error (e.g., show a notification)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder="Enter list name"
        required
      />
      <button type="submit">Create List</button>
    </form>
  );
};

export default ListForm;