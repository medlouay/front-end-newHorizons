import React from 'react';
import './AboutUs.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <div>
    
<Navbar/>
        <div className="aboutus-container">
      <h1>About Us</h1>
      <p>An innovative AI-based solution that connects future business partners on the way to national events</p>
    </div>


       <Footer/>
    </div>
  );
};

export default AboutUs;