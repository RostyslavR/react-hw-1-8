import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";

import { Container } from "./App.styled";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { List } from "./List/List";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phone book {isLoading && !error && <span>Loading...</span>}</h1>
      <ContactForm />
      <Filter />
      <List />
    </Container>
  );
};
