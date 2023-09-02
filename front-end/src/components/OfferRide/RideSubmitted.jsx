import React from 'react';
import './RideSubmitted.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const RideSubmitted = () => {
  return (

    <div>
        <Navbar/>
    <div id="container-ride-submitted">
      <span id='ride-submitted-title'> ride Submitted </span>
      <p id='ride-submitted-paragraph'>
        The ride to the event is submitted.
        <br />
        <br />
        Would you like to offer a ride back from the event as well?
      </p>
      <div>
        <button id='no-ride-back-button'>
            <a href="offer-ride-step4">
          Back</a>
        </button>
      </div>
      <div>
        <button id='add-ride-back-button'>
            <a href="return-ride-step2">
          Next</a>
        </button>
      </div>
    </div>
    <Footer/>

    </div>
  );
}

export default RideSubmitted;