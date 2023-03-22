import { useState } from 'react';
import { Form, Input } from './SearchBar.styled';

export const SearchBar = ({ query = '', onSubmit }) => {
  const [q, setQ] = useState(query);

  const handleChange = e => {
    setQ(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(q);
    // setQ('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Type name of movie here"
        value={q}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </Form>
  );
};
