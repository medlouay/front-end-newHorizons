import React, { useState } from 'react';
import './OfferRideStep2.css';

const carMakeOptions = [
  { value: '', label: 'Select car make', disabled: true },
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  // Add more options as needed
];

const carModelOptions = [
  { value: '', label: 'Select car model', disabled: true },
  { value: 'model1', label: 'Model 1' },
  { value: 'model2', label: 'Model 2' },
  { value: 'model3', label: 'Model 3' },
  // Add more car model options as needed
];

const OfferRideStep2 = () => {
  const [selectedCarMake, setSelectedCarMake] = useState('');
  const [selectedCarModel, setSelectedCarModel] = useState('');
  const [carYearInput, setCarYearInput] = useState('');

  const handleCarMakeChange = (event) => {
    setSelectedCarMake(event.target.value);
  };

  const handleCarModelChange = (event) => {
    setSelectedCarModel(event.target.value);
  };

  const handleCarYearChange = (event) => {
    setCarYearInput(event.target.value);
  };

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
        <select id="picker1" value={selectedCarMake} onChange={handleCarMakeChange}>
          {carMakeOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div id='carmodel'>
          <label htmlFor="picker">Car model</label>
        </div>
        <select id="picker2" value={selectedCarModel} onChange={handleCarModelChange}>
          {carModelOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
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
          value={carYearInput}
          onChange={handleCarYearChange}
        />
      </div>
      <div>
        <span id='paragraph1'>
          Drivers who enter their car's make and model number to allow carbon calculation enter
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
