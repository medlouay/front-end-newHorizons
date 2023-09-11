import React, { useState } from 'react';
import './OfferRideStep3.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import axios from 'axios'; // Import Axios library

const OfferRideStep3 = ({ formData }) => {
  const [numberOfAvailableSeats, setNumberOfAvailableSeats] = useState('1');
  const [priceForPassengers, setPriceForPassengers] = useState('');
  const [priceUnit, setPriceUnit] = useState('1');
  const [commentToPassengers, setCommentToPassengers] = useState('');

  const handleSubmit = async () => {
    // Prepare the data to send to the backend
    const dataToSend = {
      id_ride: 0, // You can generate this on the server or use some unique identifier
      arrival_location: formData.step1Data.searchValue,
      depart_location: formData.step2Data.inputs.arrivalLocation,
      price: priceForPassengers,
      seats_available: numberOfAvailableSeats,
      arrival_time: '', // Fill this with the appropriate value
      comment_ride: commentToPassengers,
      departure_date: '', // Fill this with the appropriate value
      picking_time: '', // Fill this with the appropriate value
    };

    try {
      // Send a POST request to your backend API
      const response = await axios.post('http://127.0.0.1:3309/api/rides', dataToSend);

      // Handle the response, e.g., show a success message
      console.log('Ride data sent successfully:', response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error sending ride data:', error);
    }
  };
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
        <button id='nextbutton-step4' onClick={handleSubmit}>
            <a href="ride-submitted">Next</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OfferRideStep3;
