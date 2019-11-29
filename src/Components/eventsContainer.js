import React from "react";
import Event from "./eventLine.js";
const data = require("../Data/data.json");

// THIS IS NOW A CLASS Component
// THE IMPORT OF THE JSON FILE HAS BEEN MOVED FROM THE APP TO HERE (AS ITS WHERE THE DATA WILL START TO BE USED)

class EventContainer extends React.Component {
  constructor(props) {
    super(props);

    // HERE WE ARE DECALRING OUR INTIAL STATE, NO EVENTS LOADED AND NOTHING IN THE EVENTS SECTION
    this.state = { eventsLoaded: false, events: "", exampleState: 1232 };
  }

  // THIS IS OUR HANDY LITTLE FUNCTION THAT WILL ALLOW US TO POPULATE THE STATE WITH OUR EVENTS
  loadEvents = () => {
    // THIS.SETSTATE IS HOW WE CHANGE THE STATE, DOING IT THIS WAY WILL ONLY CHANGE THE THINGS YOU TELL IT TO, EXAMPLE STATE WILL NOT BE ALTERED.
    this.setState({
      // HERE, WE TELL EVENTS TO BE THE ARRAY "EVENTS" FROM THE JSON FILE WE IMPORTED AS "DATA"
      events: data.events,
      // AND HERE WE CHANGE OUR EVENTS LOADED STATE TO "TRUE", YOULL SEE WHY BELOW
      eventsLoaded: true
    });
  };

  //CLASS COMPNOENTS ARE SLIGHTLY DIFFERENT, IM SURE GEORGE WILL EXPLAIN MORE, BUT YOU HAVE A RENDER FUNCTOIN THAT HAS THE RETURN IN IT.
  // NOTHING HAS CHANGED MUCH FROM BEFORE REALLY, JUST A COUPLE OF THINGS
  render() {
    return (
      <div className="eventContainer">
        <h2>Upcoming Events</h2>
        {/* 1) I ADDED A BUTTON IN TO LET USE LOAD THE EVENTS, ITS VERY SIMPLE, IT HAS ONE THING TO DO, CALL THE LOADEVENTS FUNCTION FROM ABOVE */}
        <button onClick={this.loadEvents}> Load Events </button>

        {/* 2) I USE A SIMPLE && THING (PRETTY SURE GEORGE WENT OVER THIS) TO TELL THE APP TO ONLY RENDER THE EVENTRS IF THEY ARE LOADED
                IT LOOKS FOR THE 'EVENTSLOADED' STATE TO BE 'TRUE' */}
        {/* 3) WE NOW TAKE THIS INOFRMATION FROM THE STATE, BY REFERENCEING 'THIS.STATE.BLAHBLAHBLAH */}
        {this.state.eventsLoaded &&
          this.state.events.map(ev => (
            <Event
              // THE MAP FUNCTION DOESNT CHANGE, IT STILL WORKS IN THE SAME WAY
              title={ev.Name}
              description={ev.Description}
              date={ev.date}
              cohort={ev.Cohort}
            />
          ))}
      </div>
    );
  }
}

export default EventContainer;
