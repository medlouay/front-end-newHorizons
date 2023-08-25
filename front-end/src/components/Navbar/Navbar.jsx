import React from 'react'
import "./Navbar.css";
import {search,profile ,chevrondown,logo1} from "../../assets";


const Navbar = () => {
  return <nav>
  <a href="#" className="logo">
  <img src={logo1} alt="logo1" className="logo"/> 
</a>
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

        <div className="divider"></div>

  </ul>

</nav>
}

export default Navbar