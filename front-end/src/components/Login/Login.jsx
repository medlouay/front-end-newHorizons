import React from 'react'
import './Login.css';
import { useState } from 'react';
import { Eyeoff, Eyeon, facebook, google, apple } from "../../assets";

import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
 

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();



    const credentials = {
      username: username,
      password: password,
    };
let isValid = true;

    if (username === '') {
      setEmailError('This field is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('This field is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
    // Make the authentication request
    axios.post('http://127.0.0.1:3309/api/auth/login', credentials)
      .then((response) => {
        // Extract the token from the response data
        const authToken = response.data.accessToken;

        // Store the token securely (e.g., in localStorage)
        localStorage.setItem('authToken', authToken);
        console.log(authToken);
        navigate('/');
        // Update authenticated state in your application
        // (e.g., using a state management library like Redux or React Context)
      })
      .catch((error) => {
        // Handle authentication error
        console.error('Authentication error:', error);
      });
  }};
  return (
    <div className="log-in">
      <div className="div-2">

        <div className="frame-2">
          <div className="frame-3">
            <div className="frame-4">
              <div className="welcome-to-new">WELCOME TO NEW HORIZONS!</div>
              <p className="log-in-to-your">
                <span className="text-wrapper-3">Log in to your account. Don&#39;t have an account yet? </span>

                <a href="/signup" className="text-wrapper-4">Sign up</a>
              </p>
            </div>
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-5">Email address</div>
                <span style={{ color: 'red' }}>{emailError}</span>
                <input type="email" placeholder="Enter your email address" value={username} onChange={handleUsernameChange} className="input-field" style={{ borderColor: emailError ? 'red' : '' }} />
                
              </div>
              <div className="frame-5">
                <div className="text-wrapper-5">Password</div>
                <span style={{ color: 'red' }}>{passwordError}</span>
                <div className="password-input">
                  <input type={showPassword ? "text" : "password"} placeholder="Enter password from your account" value={password} onChange={handlePasswordChange} className="input-field" style={{ borderColor: passwordError ? 'red' : '' }} />
                  <span className="toggle-icon" onClick={togglePasswordVisibility}>
                    <img src={showPassword ? Eyeon : Eyeoff} alt="Toggle Password" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-6">or log in with</div>
            <div className="frame-6">
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

          <a href="#" className="log_in" onClick={handleLogin}> Log in </a>

        </div>
      </div>
    </div>
  )
}

export default Login