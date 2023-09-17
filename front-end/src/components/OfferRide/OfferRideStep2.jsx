import React, { useState } from 'react';
import './OfferRideStep2.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'; 

const OfferRideStep2 = ({ onNext, prevStep, nextStep }) => {
  const [inputs, setInputs] = useState({
    departLocation: '', 
    arrivalLocation: '', 
    departureDate: '',
    pickingTime: '',
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
            name="departLocation" 
            placeholder="Input exact address"
            value={inputs.departLocation} 
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
            name="arrivalLocation" 
            placeholder="Input exact address"
            value={inputs. arrivalLocation} 
            onChange={handleInputChange}
          />
        </div>
        <a href="/select-on-map" id='selct-on-map'>
          select on map
        </a>
        <span id='deprature-data-and-time'>Departure date and time</span>
        <div className="date">
         


          <input
  type="date"
  id="date"
  name="departureDate" 
  value="2023-09-17" // Set a static date (YYYY-MM-DD format)
  onChange={handleInputChange}
  placeholder="Select Date"
  min="1000-01-01" // Set a minimum date
  max="9999-12-31" // Set a maximum date
  pattern="\d{4}-\d{2}-\d{2}" // Pattern for YYYY-MM-DD format
  required // Mark the field as required if needed
  onKeyDown={(e) => e.preventDefault()} // Prevent manual editing
/>

        </div>


<div className="time">
  <input
    type="time"
    id="time"
    name="pickingTime" 
    value={inputs.pickingTime} 
    onChange={handleInputChange}
    step="1" // Adjust the step value as needed
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
