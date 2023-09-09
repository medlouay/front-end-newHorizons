import React from 'react';
import './ReturnRideSubmitted.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ReturnRideSubmitted = () => {
  return (

    <div>
        <Navbar/>
    <div id="container-ride-submitted">
      <span id='ride-submitted-title'> ride Submitted </span>
      <p id='ride-submitted-paragraph'>
        The  return ride is submitted.
        <br />
        <br />
        Would you like to check your other rides?
      </p>
      <div>
        <button id='no-ride-back-button'>
            <a href="return-ride-step3">
          Back</a>
        </button>
      </div>
      <div>
        <button id='add-ride-back-button'>
            <a href="">
          View rides</a>
        </button>
      </div>
    </div>
    <Footer/>

    </div>
  );
};

export default ReturnRideSubmitted;