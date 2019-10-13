import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateAccount from "./CreateAccount";
import AllergenPage from "./AllergenPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateAccount test={"hi"}/>
        <AllergenPage />
      </header>
    </div>
  );
}

export default App;
