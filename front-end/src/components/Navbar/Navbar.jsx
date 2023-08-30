import React from 'react';
import "./Navbar.css";
import {search,profile ,chevrondown,logo1} from "../../assets";
import navbarLogo from '../../assets/logo1.png'; // Use a unique name like navbarLogo


const Navbar = () => {
  return (
    <nav>
      <a href="/" className="logo">
      <img src={navbarLogo} alt="New Horizons Logo" />
    </a>
      <ul className="main-list">
        <li>
          <a href="events">events</a>
        </li>
        <li>
          <a href="#">rides</a>
        </li>
        <li>
          <a href="#">about us</a>
        </li>
      </ul>
      <ul className="secondary-list">
        <li className="search-container">
          <img src={search} alt="search" className="search-icon" />
          <input type="text" placeholder="Search ..." className="search-bar" />
        </li>
        <li>
          <a href="/login" className="login-btn"> Log in </a>
        </li>
        <li>
          <a href="/signup" className="signup-btn">Sign up </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
