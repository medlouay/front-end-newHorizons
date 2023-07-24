import React from 'react'
import "./Navbar.css";
import {search,profile ,chevrondown} from "../../assets";


const Navbar = () => {
  return <nav>
    <a href="#" className="logo">NEW HORIZONS</a>
    <ul className="main-list">
      <li>
        <a href="#">events</a>
      </li>
      <li>
        <a href="#">rides</a>
      </li>
      <li>
        <a href="#">about us</a>
      </li>
    </ul>
    <ul className="secondary-list">
      <li>
        <a href="#"><img src={search} alt="search"className="search"/></a>
      </li>
      <li>
        <a href="#"><img src={profile} alt="profile" className="profile"/></a>
      </li>
      <li>
        <a href="#"><img src={chevrondown} alt="chevrondown"className="chevrondown"/></a>
      </li>
    </ul>
  </nav>
}

export default Navbar