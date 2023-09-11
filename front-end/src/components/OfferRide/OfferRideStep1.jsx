import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './OfferRideStep1.css';
import { Link } from 'react-router-dom'; // Import Link

const OfferRideStep1 = ({ onNext }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (searchValue.trim() !== '') {
      setSelectedEvent(searchValue); // Save the event in state
      onNext({ event: searchValue }); // Pass the event data to the next step
    } else {
      alert('Please enter an event to proceed.');
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
                value={searchValue}
                onChange={handleSearchInputChange}
              />
            </div>

            <div>
              <Link to="/offer-ride-step2">
                <button id="nxt-button" onClick={handleNextButtonClick}>
                  Next
                </button>
              </Link>
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
