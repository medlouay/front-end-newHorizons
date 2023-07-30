import React from 'react';
import './OfferRideS3.css';

const OfferRideS3 = () => {
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

      <svg id='icon3'
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="search-icon"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#2D3536"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.9984 21L16.6484 16.65"
          stroke="#2D3536"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
          <path
            d="M12 6L8 10L4 6"
            stroke="#467471"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <span id='drop-off-point'>
      Drop-off-point
    </span>
      

    <div id="search-bar4">
      <input id="input3" type="text" placeholder="Input exact address" />

      <svg id='icon3'
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="search-icon"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#2D3536"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.9984 21L16.6484 16.65"
          stroke="#2D3536"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
          <path
            d="M12 6L8 10L4 6"
            stroke="#467471"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>


    <span id='deprature-data-and-time'>
    Departure date and time    </span>
     
    <div className="datetime-picker">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="calendar-icon"
      >
        {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#2D3536" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 2V6" stroke="#2D3536" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 2V6" stroke="#2D3536" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 10H21" stroke="#2D3536" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
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
          Back
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

export default OfferRideS3;
