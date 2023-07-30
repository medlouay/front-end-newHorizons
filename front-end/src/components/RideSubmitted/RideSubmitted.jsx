import React from 'react';
import './RideSubmitted.css';

const RideSubmitted = () => {
  return (
    <div id="container-ride-submitted">
      <span id='ride-submitted-title'> ride Submitted </span>
      <p id='ride-submitted-paragraph'>
        The ride to the event is submitted.
        <br />
        <br />
        Would you like to offer a ride back from the event as well?
      </p>
      <div>
        <button id='no-ride-back-button'>
          Back
        </button>
      </div>
      <div>
        <button id='add-ride-back-button'>
          Next
        </button>
      </div>
    </div>
  );
}

export default RideSubmitted;
