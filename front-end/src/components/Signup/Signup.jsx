import React from 'react'
import './Signup.css'
import Step1 from './Step1'
import Step2 from './Step2'
import { useState } from "react";

const Signup = () => {

    const [step, setstep] = useState(1);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        emailUser: "",
        dateUser: "",
        aboutUser: ""
    })

    //next step 
    const nextStep = () => {
        setstep(step + 1);
        console.log(step);
        
        
    };

    // go back to previous step
    const prevStep = () => {
        setstep(step - 1);
        console.log(step);
    };

    // handle field change
    const handleInputData = input => e => {
        // input value from the form
        const { value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }

    switch (step) {
        case 1:
            return (
                <Step1
                    nextStep={nextStep} handleFormData={handleInputData} values={formData}
                />
            )
        case 2:
            return (
                <Step2 nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
            )
        // never forget the default case, otherwise VS code would be mad!
        default:
            // do nothing
            return (
                
                <Signup />
            );

    }

}

export default Signup