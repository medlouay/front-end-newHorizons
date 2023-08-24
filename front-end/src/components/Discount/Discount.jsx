import React from 'react'
import "./Discount.css";
import ImageSlider from '../ImageSlider/ImageSlider';
import {discountframe} from "../../assets";

const Discount = () => {

  const images = [
    'src/assets/ad1.jpg',
    'src/assets/ad2.png',
    'src/assets/ad3.png',


    
  ];
  return (
      <div className="App">
      <ImageSlider images={images} />
    </div>
  )
}

export default Discount