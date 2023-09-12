import React, { useState, useEffect } from 'react'
import './Step2.css';
import { chevronright } from '../../assets';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SuccessPage from './SuccessPage';
const Step2 = ({ nextStep, handleFormData, values, prevStep }) => {
    const [text, setText] = useState("");
    const { username, password, emailUser, dateUser, aboutUser } = values;
    const navigate = useNavigate();
    /********************** */

    const [usernameError, setUsernameError] = useState('');
    const [lastnameError, setlastnameError] = useState('');
    const [optionError, setoptionError] = useState('');

    /************************* */


    let isError = true;



    /************************************* */
    const maxWords = 301; // Adjust this according to your desired max word limit

    const handleTextChange = (event) => {
        const newText = event.target.value;
        const words = newText.trim().split(/\s+/);

        if (words.length <= maxWords) {
            setText(newText);
        }
    };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(values);
        if (!values.username) {
            setUsernameError("First name is required");
            setlastnameError("Last name is required");
            setoptionError(" Option name is required");
        } else {
            setUsernameError(""); // Clear the error if the field is not empty
        }

        if (values.username) {
            // Move to the next step if both fields are not empty





            try {
                const response = await axios.post("http://127.0.0.1:3309/api/auth/register", values);
                if (Response || response.status === 200)

                    isError = true;
                console.log("user has been signup succ");
                console.log(isError);
                navigate('/success');

            } catch (err) {

                console.log("user has been signup failed");

                isError = true;

                console.log(isError);
                navigate('/failed');


            }
        }
    }
    return (
        <div className="sign-up-enter-your">



            <div className="div-2">
                {/* <NameCrossIconSizeL className="name-cross-icon-size-l" />
        <Icons className="icons-instance" /> */}
                <button className="navigation-button" onClick={prevStep}>
                    <img src={chevronright} alt="chevronright" className="icons-instance" />
                </button>
                <div className="frame-2">
                    <div className="frame-3">
                        <div className="sign-up">SIGN UP</div>
                        <div className="frame-4">
                            <div className="frame-5">
                                {/* <InputField className="design-component-instance-node" state="default" text="Enter your first name" /> */}
                                <div className="text-wrapper-3">First name</div>
                                
                               
                                <input type="text" placeholder="Enter your first name" className="design-component-instance-node" defaultValue={values.username} onChange={handleFormData("username")}  style={{ borderColor: usernameError ? 'red' : '' }}/>
                                {usernameError && <p className="error-message">{usernameError}</p>}
                            </div>

                            <div className="frame-5">
                                {/* <InputField className="design-component-instance-node" state="default" text="Enter your last name" /> */}
                                <div className="text-wrapper-3">Last name</div>
                                {lastnameError && <p className="error-message">{lastnameError}</p>}
                                <input type="text" placeholder="Enter your last name" className="design-component-instance-node" style={{ borderColor: usernameError ? 'red' : '' }} />
                            </div>
                            <div className="frame-5">
                                {/* <SelectFieldWith
                  className="design-component-instance-node"
                  state="default"
                  text="Select your interests for better networking"
                /> */}
                                <div className="text-wrapper-3">Your interests</div>
                                {optionError && <p className="error-message">{optionError}</p>}
                                <select className="design-component-instance-node" placeholder="Select your interests for better networking" style={{ borderColor: usernameError ? 'red' : '' }} >
                                    <option value="" disabled selected>
                                        Select your interests for better networking
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="frame-6">
                                <div className="text-wrapper-3">About yourself (Optional)</div>
                                <textarea
                                    className="design-component-instance-node1"
                                    placeholder="Tell your companions more about yourself and what kind of opportunities you are looking for"

                                    onChange={handleFormData("aboutUser")}

                                    defaultValue={values.aboutUser}
                                />
                                <p className="reward"> 0/{maxWords - text.trim().split(/\s+/).length}</p>
                            </div>
                        </div>
                    </div>
                    <a href="" onClick={handleSubmit} className="signup"> Sign up </a>
                </div>
            </div>
        </div>
    )
}

export default Step2