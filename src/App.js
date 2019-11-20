import React from "react";
import EventsContainer from "./Components/eventsContainer";
import "./App.css";

// HERE WE BRING IN THE JSON FILE.
// (BUT AS WE MIGHT HAVE MULTIPLE DIFFERENT SECTIONS IN THE JSON FILE WE ARE JUST GOING TO BRING THE WHOLE THING IN AS 'DATA')
const data = require("./Data/data.json");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>An examaple for Dave</p>
      </header>

      {/* NOW WE CAN RENDER OUR EVENTS CONTAINER APP AND PASS THAT DATA (WHICH IS PARSED IN BY REACT AS AN OBJECT) AS A PROP */}

      <EventsContainer data={data} />
    </div>
  );
}

export default App;
