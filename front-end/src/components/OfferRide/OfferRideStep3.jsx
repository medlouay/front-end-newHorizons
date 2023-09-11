import React, { useState } from 'react';
import './OfferRideStep3.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const OfferRideStep3 = ({ formData }) => {
  const [formDataStep3, setFormDataStep3] = useState({
    seatsAvailable: '1',
    price: '',
    priceUnit: '1',
    commentRide: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataStep3((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const dataToSend = {
      id_ride: 0,
      arrival_location: formData.step1Data.searchValue,
      depart_location: formData.step2Data.inputs.arrival_location,
      price: formDataStep3.price,
      seats_available: formDataStep3.seatsAvailable,
      arrival_time: '',
      comment_ride: formDataStep3.commentRide,
      departure_date: '',
      picking_time: '',
    };

    const modifiedData = {
      id_ride: dataToSend.id_ride,
      arrival_location: dataToSend.arrival_location,
      depart_location: dataToSend.depart_location,
      price: dataToSend.price,
      seats_available: dataToSend.seats_available,
      arrival_time: dataToSend.arrival_time,
      comment_ride: dataToSend.comment_ride,
      departure_date: dataToSend.departure_date,
      picking_time: dataToSend.picking_time,
    };

    try {
     
      const response = await axios.post('http://127.0.0.1:3309/api/rides', modifiedData);

      console.log('Ride data sent successfully:', response.data);
    } catch (error) {
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
            name="seatsAvailable"
            value={formDataStep3.seatsAvailable}
            onChange={handleInputChange}
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
              name="price"
              value={formDataStep3.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <select
            id="select-price-for-passenger"
            name="priceUnit"
            value={formDataStep3.priceUnit}
            onChange={handleInputChange}
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
            name="commentRide"
            value={formDataStep3.commentRide}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button id='backbutton-step4'>
            <Link to="/offer-ride-step2">Back</Link> 
          </button>
        </div>
        <div>
          <button id='nextbutton-step4' onClick={handleSubmit}>
            <Link to="/ride-submitted">Next</Link> 
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OfferRideStep3;
