import React from 'react'
import "./Header.css";
import {Cardrivingbro,arrowupright } from "../../assets";
import Navbar from "../Navbar/Navbar"



const Header = () => {
  return (
    <header>
    <div class="wrapper">
      <Navbar/>
      <div class="content-container">
        <div class="cta">
          <p class="introduction">NEW HORIZONS</p>
          <h3>Find your ride to the event.</h3>
          <h3>Use your car to network</h3>
          <a href="events" class="explore-btn"><img src={arrowupright} alt="arrowupright"/> Explore events</a>
        </div>
        <div class="svg-image-container">
          
          <img src={Cardrivingbro} alt="SVG Image"/>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header