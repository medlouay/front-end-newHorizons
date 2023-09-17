import React from 'react';
import "./Navbar.css";
import {search,profile ,chevrondown,logo1} from "../../assets";
import navbarLogo from '../../assets/logo1.png'; // Use a unique name like navbarLogo
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
      <img src={navbarLogo} alt="New Horizons Logo" />
     </Link>
      <ul className="main-list">
        <li>
          <Link to="/events">events</Link>
        </li>
        <li>
          <Link to="/rides">rides</Link>
        </li>
        <li>
          <Link to="/about-us">about us</Link>
        </li>
      </ul>
      <ul className="secondary-list">
        <li className="search-container">
          <img src={search} alt="search" className="search-icon" />
          <input type="text" placeholder="Search ..." className="search-bar" />
        </li>
        <li>
        <Link to="/login" className="login-btn"> Log in </Link>
        </li>
        <li>
          <Link to="/signup" className="signup-btn">Sign up </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
