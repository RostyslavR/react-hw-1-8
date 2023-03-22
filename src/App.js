import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import Components01 from "./components01/Components01";
import Feedback02 from "./feedback02/Feedback02";
import Feedback04 from "./feedback04/Feedback04";
import ImageFinder03 from "./imageFinder03/ImageFinder03";
import Images04 from "./images04/Images04";
import Movies05 from "./movies05/Movies05";
import Phonebook02 from "./phonebook02/Phonebook02";
import Phonebook03 from "./phonebook03/Phonebook03";
import Phonebook04 from "./phonebook04/Phonebook04";
import Phonebook06 from "./phonebook06/Phonebook06";
import Phonebook07 from "./phonebook07/Phonebook07";
import Phonebook08 from "./phonebook08/Phonebook08";

const components = [
  <Components01 />,
  <Feedback02 />,
  <ImageFinder03 />,
  <Feedback04 />,
  <Images04 />,
  <Movies05 />,
  <Phonebook02 />,
  <Phonebook03 />,
  <Phonebook04 />,
  <Phonebook06 />,
  <Phonebook07 />,
  <Phonebook08 />,
];

function App() {
  const [state, setState] = useState(components.length - 2);

  const handleClickInc = () =>
    setState((p) => (p < components.length - 1 ? p + 1 : 0));

  const handleClickDec = () =>
    setState((p) => (p > 0 ? p - 1 : components.length - 1));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={200} />
        <h1>React </h1>
        <p>{components[state].type.name}</p>
        <button onClick={handleClickInc}>Click +++</button>
        <button onClick={handleClickDec}>--- Click</button>
      </header>

      {/* <ImageFinder03 /> */}
      {components[state]}
    </div>
  );
}

export default App;
