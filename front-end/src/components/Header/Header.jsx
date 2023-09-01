import React from "react";
import "./Header.css";
import { Cardrivingbro, arrowupright } from "../../assets";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="content-container">
          <div className="cta">
            <p className="introduction">NEW HORIZONS</p>
            <h3>Find your ride to the event.</h3>
            <h3>Use your car to network</h3>
            <Link to="/events" className="explore-btn">
              <img src={arrowupright} alt="arrowupright" /> Explore events
            </Link>
          </div>
          <div className="svg-image-container">
            <img src={Cardrivingbro} alt="SVG Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
