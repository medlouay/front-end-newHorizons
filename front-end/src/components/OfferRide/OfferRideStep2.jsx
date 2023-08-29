import React from 'react';
import './OfferRideStep2.css';

const OfferRideStep2 = () => {
  return (
    <div id="container2">
      <div id='title'>
        <span>Offer a Ride</span>
        {/* Other JSX elements for the rest of the component */}
      </div>
      <div id='st2'>
        <span>STEP 2 OF 4</span>
      </div>
      <div>
        <div id='carmake'>
          <label htmlFor="picker">Car make</label>
        </div>
        <select id="picker1">
          <option value="" disabled selected>
            Select car make
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <div id='carmodel'>
          <label htmlFor="picker">Car model</label>
        </div>
        <select id="picker2">
          <option value="" disabled selected>
            Select car model
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <div id='caryear'>
          <label htmlFor="carModel">Car year</label>
        </div>
        <input
          type="text"
          id="carModelinput"
          placeholder="Input car year"
        />
      </div>
      <div>
        <span id='paragraph1'>
          Drivers who enter their cars make and model number to allow carbon calculation enter
          our Corporate Rewards Program to receive discounts on hotels and events.
          <a id='link1' href="" target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </span>
      </div>
      <div id='icon1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ED8A37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16V12" stroke="#ED8A37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8H12.01" stroke="#ED8A37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
     
        <button id='backbutton1'> 

      <a href='offer-ride-step1' id='back-link'>
  Back
</a>

        </button>
       
      </div>
      <div>
        <button id='nextbutton1'> 
        <a href='offer-ride-step3'>
          Next
          </a>
        </button>
      </div>
    </div>
  );
}

export default OfferRideStep2;