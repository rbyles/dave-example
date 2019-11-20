import React from "react";

// THE EVENT LINE COMPONENT NOW USES THE PASSED PROPS TO DISPLAY THE DETAILS
// (AGAIN IVE USED THE DESTRUCTURED PROPS, RATHER THAN (PROPS), TO MAKE IT CLEARER IN THE CODE (LESS {THIS.PROPS.BLAHBLAHBLAH}))

const Event = ({ title, date, cohort, description }) => {
  return (
    <div className="eventLine">
      <span className="eventTitle">{title}</span>
      <p className="eventDesc">{description}</p>
      <div className="eventDetails">
        <p>Date: {date}</p>
        <p>Cohort: {cohort}</p>
      </div>
    </div>
  );
};

export default Event;
