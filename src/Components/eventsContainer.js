import React from "react";
import Event from "./eventLine.js";

// HERE WE HAVE OUR CONTAINER COMPONET WITH OUR DATA OBJECT BEING PASSED THROUGH
// IM USING = ({ DATA}) => RATHER THAN JUST PROPS SO I CAN REFERENCE IT DIRECTLY

const EventContainer = ({ data }) => {
  //AS WE ONLY WANT THE EVENT ARRY FROM THE DATA OBJECT WE DECLARE A EVENTS
  // VARIABLE AND USE NORMAL OBJECT DOT NOTATION TO USE THE 'EVENTS' ARRAY
  // THE EVENTS IN THE WONT_BE_LODED ARRY, WILL NOT APPERAER, AS WE ARENT REFERENCEING THEM
  var events = data.events;

  return (
    <div className="eventContainer">
      <h2>Upcoming Events</h2>
      {events.map(ev => (
        <Event
          // USING OUR NEW EVENTS VARIABLE, WE CAN MAP THROUGH THE ARRAY AND RENDER A EVENT COMPONENT FOR EACH ENTRY
          // AND PASS EACH KEY/VALUE PAIR WE WANT AS A PROP (EV DENOTES THE EVENT DURING THE MAP, SO EV.NAME IS THE SAME AS EVENTS.NAME)
          title={ev.Name}
          description={ev.Description}
          date={ev.date}
          cohort={ev.Cohort}
        />
      ))}
    </div>
  );
};

export default EventContainer;
