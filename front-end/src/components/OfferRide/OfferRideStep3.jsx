import React from 'react';
import './OfferRideStep3.css';

const OfferRideStep3 = () => {
  return (
    <div id="container3">
      <div id='title'>
        <span>Offer Ride</span>
        {/* Other JSX elements for the rest of the component */}
      </div>
      <div id='st2'>
        <span>STEP 3 OF 4</span>
      </div>
      <span id='form3'> Form </span>
      <div id="search-bar3">
        <input id="input3" type="text" placeholder="Input exact address" />
        <svg
          id='icon3'
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="search-icon"
        >
          {/* SVG path data */}
        </svg>
      </div>
      <div className="dropdown-container">
        <select className="dropdown">
          <option value="option1">Select on map</option>
        </select>
        <div className="arrow-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            {/* SVG path data */}
          </svg>
        </div>
      </div>
      <span id='drop-off-point'>
        Drop-off-point
      </span>
      <div id="search-bar4">
        <input id="input3" type="text" placeholder="Input exact address" />
        <svg
          id='icon3'
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="search-icon"
        >
          {/* SVG path data */}
        </svg>
      </div>
      <div className="dropdown-container1">
        <select className="dropdown1">
          <option value="option1">Select on map</option>
        </select>
        <div className="arrow-icon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            {/* SVG path data */}
          </svg>
        </div>
      </div>
      <span id='deprature-data-and-time'>
        Departure date and time
      </span>
      <div className="datetime-picker">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="calendar-icon"
        >
          {/* SVG path data */}
        </svg>
        <input
          type="datetime-local"
          id="datetime"
          name="datetime"
          onChange={(e) => console.log(e.target.value)} // Handle the selected date and time here
          placeholder="Select Date and Time"
        />
      </div>
      <div>
        <button id='backbutton2'>
            <a href="offer-ride-step2">
          Back
          </a>
        </button>
      </div>
      <div>
        <button id='nextbutton2'>
          Next
        </button>
      </div>
    </div>
  );
}

export default OfferRideStep3;