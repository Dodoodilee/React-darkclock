import React from "react";
import "./App.css";
import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Powered By Sophie & Dodo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Co-Developed By Arielle Dedicated To Andromede
        </a>
        <Clock /> {/* Include the Clock component */}
      </header>
    </div>
  );
}

export default App;
