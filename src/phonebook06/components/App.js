import { Container } from "./App.styled";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { List } from "./List/List";

export const App = () => {
  return (
    <Container>
      <h1>Phone book</h1>
      <ContactForm />
      <Filter />
      <List />
    </Container>
  );
};
