import logo from "./logo.svg";
import "./App.css";

import Components01 from "./components01/Components01";
import Feedback02 from "./feedback02/Feedback02";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React</p>
      </header>
      <Components01 />
      <Feedback02 />
    </div>
  );
}

export default App;

// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
