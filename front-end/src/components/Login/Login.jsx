import React from 'react'
import './Login.css';
import { useState } from 'react';
import { Eyeoff, Eyeon, facebook, google, apple } from "../../assets";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };
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
                <input type="email" placeholder="Enter your email address" className="input-field" />

              </div>
              <div className="frame-5">
                <div className="text-wrapper-5">Password</div>
                <div className="password-input">
                  <input type={showPassword ? "text" : "password"} placeholder="Enter password from your account" className="input-field" />
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

          <a href="#" className="log_in"> Log in </a>

        </div>
      </div>
    </div>
  )
}

export default Login