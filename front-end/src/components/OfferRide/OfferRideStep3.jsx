import React, { useState } from 'react';
import './OfferRideStep3.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const OfferRideStep3 = () => {
  const [numberOfAvailableSeats, setNumberOfAvailableSeats] = useState('1');
  const [priceForPassengers, setPriceForPassengers] = useState('');
  const [priceUnit, setPriceUnit] = useState('1');
  const [commentToPassengers, setCommentToPassengers] = useState('');

  return (
    <div>
      <Navbar />
      <div id="container4">
        <div id='title'>
          <span>Offer Ride</span>
        </div>
        <div id='st2'>
          <span>STEP 3 OF 3</span>
        </div>
        <span id='form4'> Number of available seats </span>
        <div>
          <select
            id="number-of-available-seats"
            value={numberOfAvailableSeats}
            onChange={(e) => setNumberOfAvailableSeats(e.target.value)}
          >
            <option value="1"> 1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4">4</option>
          </select>
        </div>
        <span id='price-for-passangers'> Price for passengers </span>
        <div id="container-price-for-passangers">
          <div>
            <label htmlFor="inputField"></label>
            <input
              id="input-price-for-passanger"
              type="text"
              value={priceForPassengers}
              onChange={(e) => setPriceForPassengers(e.target.value)}
            />
          </div>
        </div>
        <div>
          <select
            id="select-price-for-passenger"
            value={priceUnit}
            onChange={(e) => setPriceUnit(e.target.value)}
          >
            <option value="1"> EUR</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4">4</option>
          </select>
        </div>
        <span id='comment-for-passanger-seat'>Comment to passengers (Optional)</span>
        <div>
          <label htmlFor="inputField"></label>
          <input
            id="input-comment-tp-passanger"
            type="text"
            value={commentToPassengers}
            onChange={(e) => setCommentToPassengers(e.target.value)}
          />
        </div>
        <div>
          <button id='backbutton-step4'>
            <a href="offer-ride-step2">Back</a>
          </button>
        </div>
        <div>
          <button id='nextbutton-step4'>
            <a href="ride-submitted">Next</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OfferRideStep3;
