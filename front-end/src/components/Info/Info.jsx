import React from 'react'
import "./Info.css";
import {line2,frame,image,frame2,frame3 } from "../../assets";

const Info = () => {
  return (
    <div className="box-info" >
      <div className="frame-wrapper-info">
        <div className="frame-info">
          <div className="overlap-group-info">
          
            <h1 className="how-it-works-info">HOW IT WORKS?</h1>
            <img className="line-info" alt="Line" src={line2} />
            <div className="div-info">
              <div className="frame-2-info">
                <img className="img-info" alt="Frame" src={frame} />
                <p className="find-the-event-of-info">
                  Find the event <br />
                  of your interest
                </p>
              </div>
              <div className="frame-2-info">
                <img className="img-info" alt="Frame" src={image} />
                <p className="text-wrapper-info">
                  See people who already <br />
                  joined the event
                </p>
              </div>
              <div className="frame-3-info">
                <img className="img-info" alt="Frame" src={frame2} />
                <p className="text-wrapper-info">
                  Offer a ride to the event <br />
                  or join as passenger
                </p>
              </div>
              <div className="frame-3-info">
                <img className="img-info" alt="Frame" src={frame3} />
                <p className="text-wrapper-info">
                  Use your time on the way <br />
                  to the event to communicate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info