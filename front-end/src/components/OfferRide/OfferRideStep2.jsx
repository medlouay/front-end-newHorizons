import React, { useState } from 'react';
import './OfferRideStep2.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const OfferRideStep2 = () => {
  const [inputs, setInputs] = useState({
    arrivalLocation: '',
    dropOffLocation: '',
    departureDateTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div id="container3">
        <div id='title'>
          <span>Offer Ride</span>
        </div>
        <div id='st2'>
          <span>STEP 2 OF 3</span>
        </div>
        <span id='form3'> Form </span>
        <div id="search-bar3">
          <input
            id="input3"
            type="text"
            name="arrivalLocation"
            placeholder="Input exact address"
            value={inputs.arrivalLocation}
            onChange={handleInputChange}
          />
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
            name="dropOffLocation"
            placeholder="Input exact address"
            value={inputs.dropOffLocation}
            onChange={handleInputChange}
          />
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
            name="departureDateTime"
            value={inputs.departureDateTime}
            onChange={handleInputChange}
            placeholder="Select Date and Time"
          />
        </div>
        <div>
          <button id='backbutton2'>
            <a href="offer-ride-step1">Back</a>
          </button>
        </div>
        <div>
          <button id='nextbutton2'>
            <a href="offer-ride-step3">Next</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfferRideStep2;
