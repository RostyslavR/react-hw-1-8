import { App } from "./components/App/App";
import { GlobalStyle } from "./common/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";

const Phonebook02 = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Phonebook02;
