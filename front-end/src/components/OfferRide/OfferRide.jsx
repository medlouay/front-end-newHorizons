import React, { useState } from 'react';
import OfferRideStep1 from './OfferRideStep1';
import OfferRideStep2 from './OfferRideStep2';
import OfferRideStep3 from './OfferRideStep3';
import './OfferRide.css';

const OfferRide = () => {
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {},
  });

  const handleStep1Data = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      step1Data: data,
    }));
  };

  const handleStep2Data = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      step2Data: data,
    }));
  };

  return (
    <div id="container">
      <OfferRideStep1 onNext={handleStep1Data} />
      <OfferRideStep2 onNext={handleStep2Data} />
      <OfferRideStep3 formData={formData} />
    </div>
  );
};

export default OfferRide;
