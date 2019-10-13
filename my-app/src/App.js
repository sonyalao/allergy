import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateAccount from "./CreateAccount";
import AllergenPage from "./AllergenPage";
import Restaurants from "./Restaurants";
import NavBar from "./Restaurants/Components/NavBar";

function App() {
  return (
    <div className="App">
      <main>
        <Restaurants />
      </main>
      <NavBar />
    </div>
  );
}

export default App;
