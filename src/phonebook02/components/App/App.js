import contacts from "../../data/contacts.json";
import { nanoid } from "nanoid";
import { Component } from "react";
import { Container } from "./App.styled";
import { ContactForm } from "../ContactForm/ContactForm";
import { Filter } from "../Filter/Filter";
import { List } from "../List/List";

export class App extends Component {
  state = {
    contacts,
    filter: "",
  };

  handleAdd = ({ name, phone }, { resetForm }) => {
    const id = nanoid();

    const existsContact = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existsContact) {
      alert(`${existsContact.name} this contact already exists`);
      return;
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { id, name, phone }],
      }));
    }

    resetForm();
  };

  handleFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value.toLowerCase() });
  };

  handleDelete = (currentContact) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== currentContact
      ),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <Container>
        <h1>Phone book</h1>
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <ContactForm handleAdd={this.handleAdd} />
        <List contacts={filteredContacts} handleDelete={this.handleDelete} />
      </Container>
    );
  }
}
