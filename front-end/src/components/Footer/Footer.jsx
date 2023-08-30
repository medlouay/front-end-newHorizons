import React from 'react';
import "./Footer.css";
import navbarLogo from '../../assets/logo1.png';

const Footer = () => {
  return (
    <div className="frame-footer">
      <div className="overlap-group-footer">
        <img id="logo-footer" src={navbarLogo} />
        
        <div className="div-footer">
          <div className="text-wrapper-footer"><a href="#">EVENTS</a></div>
          <div className="text-wrapper-footer"><a href="#">RIDES</a></div>
          <div className="about-us-wrapper-footer">
            <div className="text-wrapper-footer"><a href="#">ABOUT US</a></div>
          </div>
        </div>

        <div className="new-horizons-footer">
          <span className="span-footer">New Horizons</span>
          <span className="text-wrapper-2-footer">, 2023 ©</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
