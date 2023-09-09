import React, { useState } from 'react';
import './OfferRideStep3.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const OfferRideStep3 = () => {
  const [arrivalLocation, setArrivalLocation] = useState('');

  const handleArrivalLocationChange = (e) => {
    setArrivalLocation(e.target.value);
  };

  return (
    <div>
      <Navbar />
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
          <input
            id="input3"
            type="text"
            placeholder="Input exact address"
            value={arrivalLocation}
            onChange={handleArrivalLocationChange}
          />
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
          <a href="/select-on-map" id='selct-on-map1'>
            select on map
          </a>
        </div>
        <span id='drop-off-point'>Drop-off-point</span>
        <div id="search-bar4">
          <input
            id="input3"
            type="text"
            placeholder="Input exact address"
          />
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
        <a href="/select-on-map" id='selct-on-map'>
          select on map
        </a>
        <span id='deprature-data-and-time'>Departure date and time</span>
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
            <a href="offer-ride-step2">Back</a>
          </button>
        </div>
        <div>
          <button id='nextbutton2'>
          <a     href="offer-ride-step4"> Next</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfferRideStep3;
