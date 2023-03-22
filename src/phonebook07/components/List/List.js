import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { Item } from "./Item";
import { ContactList } from "./List.styled";

export const List = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ContactList>
      {filteredContacts.map((contact) => (
        <Item key={contact.id} {...contact} />
      ))}
    </ContactList>
  );
};
