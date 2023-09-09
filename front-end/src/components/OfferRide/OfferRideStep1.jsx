import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './OfferRideStep1.css';

const OfferRideStep1 = () => {
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(false);
  const [searchValue, setSearchValue] = useState(''); // State to store user input

  const handleOption1Change = () => {
    setSelectedOption1(true);
    setSelectedOption2(false);
  };

  const handleOption2Change = () => {
    setSelectedOption1(false);
    setSelectedOption2(true);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value); // Update the search input value in state
  };

  const handleNextButtonClick = () => {
    if (selectedOption1) {
      window.location.href = 'offer-ride-step2';
    } else if (selectedOption2) {
      window.location.href = 'return-ride-step2';
    } else {
      alert('Please select an option to proceed.');
    }
  };

  return (
    <div>
      <Navbar />
      <div id="container">
        <div>
          <div>
            <div id="offer-ride-title">Offer ride</div>
            <div id="step1">Step 1 of 3</div>
            <div id="select-event">Select an event</div>
            <div id="searchbar">
              <input
                type="text"
                id="searchInput"
                placeholder="Search..."
                value={searchValue} // Bind input value to state
                onChange={handleSearchInputChange} // Handle input change
              />
            </div>

            <div id="picker">
              <label>
                <input
                  type="radio"
                  name="option"
                  value="option1"
                  checked={selectedOption1}
                  onChange={handleOption1Change}
                />
                To the event
              </label>
            </div>

            <div id="picker-option2">
              <label>
                <input
                  type="radio"
                  name="option"
                  value="option2"
                  checked={selectedOption2}
                  onChange={handleOption2Change}
                />
                Return ride
              </label>
            </div>

            <div>
              <button onClick={handleNextButtonClick} id="nxt-button">
                Next
              </button>
            </div>
          </div>



          
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OfferRideStep1;
