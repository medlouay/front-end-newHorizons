import React from 'react'
import "./Footer.css";
import {Logo} from "../../assets";

const Footer = () => {
  return (
    <div className="frame-footer">
      <div className="overlap-group-footer">
        <div className="div-footer">
          <div className="text-wrapper-footer">EVENTS</div>
          <div className="text-wrapper-footer">RIDES</div>
          <div className="about-us-wrapper-footer">
            <div className="text-wrapper-footer">ABOUT US</div>
          </div>
        </div>
        <img className="union-footer" alt="Union" src={Logo} />
        <div className="new-horizons-footer">
          <span className="span-footer">New Horizons</span>
          <span className="text-wrapper-2-footer">, 2023 ©</span>
        </div>
      </div>
    </div>
  )
}

export default Footer