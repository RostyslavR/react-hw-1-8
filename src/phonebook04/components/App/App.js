import initContacts from "../../data/contacts.json";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Container } from "./App.styled";
import { ContactForm } from "../ContactForm/ContactForm";
import { Filter } from "../Filter/Filter";
import { List } from "../List/List";

const PB_KEY = "phoneBook";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = localStorage.getItem(PB_KEY);
    savedContacts !== null
      ? setContacts(JSON.parse(savedContacts))
      : setContacts(initContacts);
  }, []);

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem(PB_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleFilter = (evt) => {
    setFilter(evt.currentTarget.value.toLowerCase());
  };

  const handleAdd = ({ name, phone }, { resetForm }) => {
    const id = nanoid();

    const existsContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existsContact) {
      alert(`${existsContact.name} this contact already exists`);
      return;
    } else {
      setContacts((s) => [...s, { id, name, phone }]);
    }
    resetForm();
  };

  const handleDelete = (currentContact) => {
    setContacts((s) => s.filter((contact) => contact.id !== currentContact));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Container>
      <h1>Phone book</h1>
      <ContactForm handleAdd={handleAdd} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <List contacts={filteredContacts} handleDelete={handleDelete} />
    </Container>
  );
};
