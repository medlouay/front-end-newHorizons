import React, { useState } from 'react';
import './OfferRideStep2.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'; 

const OfferRideStep2 = ({ onNext, prevStep, nextStep }) => {
  const [inputs, setInputs] = useState({
    depart_location: '', 
    arrival_location: '', 
    departure_date: '',
    picking_time: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleNextButtonClick = () => {
    onNext({ ...inputs });
    nextStep();
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
        <span id='form3'> From </span>
        <div id="search-bar3">
          <input
            id="input3"
            type="text"
            name="depart_location" 
            placeholder="Input exact address"
            value={inputs.depart_location} 
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
            name="arrival_location" 
            placeholder="Input exact address"
            value={inputs.arrival_location} 
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
            name="departure_date" 
            value={inputs.departure_date} 
            onChange={handleInputChange}
            placeholder="Select Date and Time"
          />
        </div>
        <span id='pickup-time'>Pickup Time</span>
        <div className="datetime-picker">
          <input
            type="time"
            id="time"
            name="picking_time" 
            value={inputs.picking_time} 
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Link to="/offer-ride-step1">
            <button id='backbutton2' onClick={prevStep}>Back</button>
          </Link>
        </div>
        <div>
          <Link to="/offer-ride-step3">
            <button id='nextbutton2' onClick={handleNextButtonClick}>
              Next
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfferRideStep2;
