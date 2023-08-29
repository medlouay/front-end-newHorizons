import React from 'react';
import './Step1.css';
import { useState } from 'react';
import { Eyeoff, Eyeon, facebook, google, apple } from "../../assets";
import { renderMatches, useLocation, useNavigate } from 'react-router-dom';



const Step1 = ({ nextStep, handleFormData, values }) => {
  
  const [emailuserError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordrepeatError, setPasswordrepeatError] = useState('');
  

  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (!values.emailUser) {
      setEmailError("Email is required");
    } else {
      setEmailError(""); // Clear the error if the field is not empty
    }
  
    if (!values.password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError(""); // Clear the error if the field is not empty
    }
  
    if (values.emailUser && values.password) {
      nextStep(); // Move to the next step if both fields are not empty
    }
  };







  








  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword1(prevState1 => !prevState1);
  };



    return (
      <div className="sign-up">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            {/* <NameCrossIconSizeL className="name-cross-icon-size-l" /> */}
            <div className="div">
              <div className="frame-2">
                <div className="frame-3">
                  <div className="frame-4">
                    <div className="welcome-to-new">WELCOME TO NEW HORIZONS!</div>
                    <p className="already-have-an">
                      <span className="span">Already have an account? </span>
                      <a href="/login" className="text-wrapper-2" > Log in</a>
                    </p>
                  </div>
                  <div className="frame-4">
                    <div className="frame-5">
                      <div className="text-wrapper-3">Email address</div>
                      {emailuserError && <p className="error-message">{emailuserError}</p>}
                      {/* <InputField className="input-field-instance" state="default" text="Enter your email address" /> */}

                      <input type="email"  defaultValue={values.emailUser} placeholder="Enter your email address" className="input-field-instance" onChange={handleFormData("emailUser")} style={{ borderColor: emailuserError ? 'red' : '' }}/>
                      
                    </div>
                    <div className="frame-5">
                      <div className="text-wrapper-3">Password</div>
                      {passwordError && <p className="error-message">{passwordError}</p>}

                      <div className="password-input">
                        <input type={showPassword ? "text" : "password"} placeholder="Enter password from your account"  defaultValue={values.password} onChange={handleFormData("password")}   className="input-field-instance" style={{ borderColor: passwordError ? 'red' : '' }} />
                        <span className="toggle-icon" onClick={togglePasswordVisibility}>
                          <img src={showPassword ? Eyeon : Eyeoff} alt="Toggle Password" />
                        </span>

                      </div>
                      
                    </div>
                    <div className="frame-5">
                      <div className="text-wrapper-3">Repeat password</div>
                      <div className="password-input">
                        <input type={showPassword1 ? "text" : "password"} placeholder="Enter password from your account" className="input-field-instance" style={{ borderColor: passwordError ? 'red' : '' }} />
                        <span className="toggle-icon" onClick={togglePasswordVisibility2}>
                          <img src={showPassword1 ? Eyeon : Eyeoff} alt="Toggle Password" />
                        </span>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkbox">
                  <div className="frame-6">
                    <input type="checkbox" id="agreeCheckbox" className="checkbox-input" />
                    <label htmlFor="agreeCheckbox" className="checkbox-label"></label>
                  </div>
                  <p className="option">
                    <span className="span">By creating an account, you agree to the </span>
                    <span className="text-wrapper-2">
                      <a href="/terms" className="text-wrapper-2">Terms of Service</a>
                    </span>
                    <span className="span"> and </span>
                    <span className="text-wrapper-2">
                      <a href="/privacy" className="text-wrapper-2">Privacy Policy</a>
                    </span>
                    <span className="span">.</span>
                  </p>
                </div>
              </div>
              <div className="frame-5">
                <div className="text-wrapper-4">or sign up with</div>
                <div className="frame-7">
                  {/* <NameGoogleSizeL className="icon-instance-node" />
                <IconComponentNode className="icon-instance-node" />
                <NameAppleSizeL className="icon-instance-node" /> */}
                  <a href="https://www.google.com">
                    <img src={google} className="icon-instance-node" alt="Google" />
                  </a>

                  <a href="https://www.facebook.com">
                    <img src={facebook} className="icon-instance-node" alt="Facebook" />
                  </a>

                  <a href="https://www.apple.com">
                    <img src={apple} className="icon-instance-node" alt="Apple" />
                  </a>
                </div>
              </div>
              {/* <PrimaryButton icon={false} size="l" state="default" text="Next" /> */}

              <a href="" className="log_in"  onClick={submitFormData}> Next </a>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default Step1