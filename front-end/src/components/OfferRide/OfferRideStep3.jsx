import React, { useState } from 'react';
import './OfferRideStep3.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const OfferRideStep3 = ({ formData, prevStep }) => {
  const [formDataStep3, setFormDataStep3] = useState({
    seatsAvailable: '',
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
    console.log(formData)
    const dataToSend = {
      id_ride: 0,
      arrivalLocation: formData.step2Data.arrivalLocation,
      departLocation: formData.step2Data.departLocation,
      price: formDataStep3.price,
      commentRide: formDataStep3.commentRide,
      seatsAvailable: formDataStep3.seatsAvailable,
    
      departureDate: formData.step2Data.departureDate,


         pickingTime: formData.step2Data.pickingTime, 


     
    };

    const modifiedData = {
      id_ride: dataToSend.id_ride,
      arrivalLocation: dataToSend.arrivalLocation,
      departLocation: dataToSend.departLocation,
      price: dataToSend.price,
      seatsAvailable: dataToSend.seatsAvailable,
      commentRide: dataToSend.commentRide,

      departureDate: dataToSend.departureDate,



      pickingTime: dataToSend.pickingTime,

    };

    
    try {
      console.log(modifiedData);
      const response = await axios.post('http://127.0.0.1:3309/api/rides/add', modifiedData);  
      console.log('Ride data sent successfully:', response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with an error status code.
        console.error('Error sending ride data. Server response:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received.
        console.error('Error sending ride data. No response received.');
      } else {
        // Something else happened while setting up the request.
        console.error('Error sending ride data:', error.message);
      }
      
      // You can also log the entire error object for more details
      console.error('Full error object:', error);
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
          <div id='input-price-for-passanger '>
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
          <Link to="/offer-ride-step2">
            <button id='backbutton2' onClick={prevStep}>Back</button>
          </Link>
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