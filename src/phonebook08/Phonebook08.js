import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./components/theme";

import { App } from "./components/App";
import { Talker } from "./components/Talker";

const Phonebook08 = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <App />
          <Talker duration="2000" isClosable="true" position="top" />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
};

export default Phonebook08;
