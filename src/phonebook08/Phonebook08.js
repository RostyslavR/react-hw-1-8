import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './components/theme';

import { App } from './components/App';
import { Talker } from './components/Talker';

const Phonebook08 = () => {
  return (
    <ChakraProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Provider store={store}>
            <App />
            <Talker duration="2000" isClosable="true" position="top" />
          </Provider>
        </BrowserRouter>
      </PersistGate>
    </ChakraProvider>
  );
};

export default Phonebook08;
