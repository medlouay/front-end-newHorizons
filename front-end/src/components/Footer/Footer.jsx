import React from 'react';
import "./Footer.css";
import navbarLogo from '../../assets/logo1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="frame-footer">
      <div className="overlap-group-footer">
        <Link to="/">
        <img id="logo-footer" src={navbarLogo} />
        </Link>
        
        <div className="div-footer">
          <div className="text-wrapper-footer"><Link to="/events">EVENTS</Link></div>
          <div className="text-wrapper-footer"><Link to="#">RIDES</Link></div>
          <div className="about-us-wrapper-footer">
            <div className="text-wrapper-footer"><Link to="/about-us">ABOUT US</Link></div>
          </div>
        </div>

        <div className="new-horizons-footer">
          <Link to="/">
          <span className="span-footer">New Horizons</span></Link>
          <span className="text-wrapper-2-footer">, 2023 ©</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
