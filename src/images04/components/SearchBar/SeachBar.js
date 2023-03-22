import { useState } from 'react';
import { Form, Header } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [q, setQ] = useState('');

  const handleChange = e => {
    setQ(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(q);
    setQ('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={q}
          onChange={handleChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </Form>
    </Header>
  );
};
