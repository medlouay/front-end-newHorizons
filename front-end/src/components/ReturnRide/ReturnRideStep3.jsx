import React from 'react';
import './ReturnRideStep3.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const ReturnRideStep3 = () => {
  return (
  
    <div>
        <Navbar/>
    <div id="container4">
      <div id='title'>
        <span>Offer return Ride</span>
        {/* Other JSX elements for the rest of the component */}
      </div>
      <div id='st2'>
        <span>STEP 3 OF 3</span>
      </div>
      <span id='form4'> Number of available seats </span>
      <div>
        <select id="number-of-available-seats">
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
          <input id="input-price-for-passanger" type="text" />
        </div>
      </div>
      <div>
        <select id="select-price-for-passenger">
          <option value="1"> EUR</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4">4</option>
        </select>
      </div>
      <span id='comment-for-passanger-seat'>Comment to passengers (Optional)</span>
      <div>
        <label htmlFor="inputField"></label>
        <input id="input-comment-tp-passanger" type="text" />
      </div>
      <div>
        <button id='backbutton-step4'>
        <a href="return-ride-step2">   Back</a> 
        </button>
      </div>
      <div>
        <button id='nextbutton-step4'>
        <a href="return-ride-submitted">Next</a>  
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ReturnRideStep3;