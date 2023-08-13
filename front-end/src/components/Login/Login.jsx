import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div className="log-in">
    <div className="div-2">
      
      <div className="frame-2">
        <div className="frame-3">
          <div className="frame-4">
            <div className="welcome-to-new">WELCOME TO NEW HORIZONS!</div>
            <p className="log-in-to-your">
              <span className="text-wrapper-3">Log in to your account. Don&#39;t have an account yet? </span>
              <span className="text-wrapper-4">Sign up</span>
            </p>
          </div>
          <div className="frame-4">
            <div className="frame-5">
              <div className="text-wrapper-5">Email address</div>
              
            </div>
            <div className="frame-5">
              <div className="text-wrapper-5">Password</div>
              
            </div>
          </div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper-6">or log in with</div>
          <div className="frame-6">
          
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Login