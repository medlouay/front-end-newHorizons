import React from 'react'
import "./Discount.css";
import {discountframe} from "../../assets";

const Discount = () => {
  return (
    <div className="frame-discount">
      <div className="overlap-group-discount">
        <div className="div-discount">
          <div className="get-discount">GET</div>
          <h1 className="element-discount-discount">10 % DISCOUNT</h1>
          <div className="on-your-first-ride-discount">ON YOUR FIRST RIDE</div>
        </div>
        <img className="img-discount" alt="Frame" src={discountframe} />
      </div>
    </div>
  )
}

export default Discount