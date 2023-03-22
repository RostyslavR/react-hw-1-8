import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./styles.css";
import { App } from "./components/App";

const Phonebook07 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Phonebook07;
