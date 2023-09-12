import React, { useState } from "react";
import OfferRideStep1 from "./OfferRideStep1";
import OfferRideStep2 from "./OfferRideStep2";
import OfferRideStep3 from "./OfferRideStep3";
import "./OfferRide.css";

const OfferRide = () => {
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {},
  });

  const [step, setStep] = useState(1);

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

  const nextStep = () => {
    setStep(step + 1);
    // console.log(step);    
  };
  const prevStep = () => {
      setStep(step - 1);
      // console.log(step);
  };

  switch (step) {
    case 1:
      return <OfferRideStep1 onNext={handleStep1Data} nextStep={nextStep} prevStep={prevStep}/>;
    case 2:
      return <OfferRideStep2 onNext={handleStep2Data} nextStep={nextStep} prevStep={prevStep}/>;
    case 3:
      return <OfferRideStep3 formData={formData} prevStep={prevStep}/>;
    // never forget the default case, otherwise VS code would be mad!
    default:
      return <OfferRide />;
  }
};

export default OfferRide;
