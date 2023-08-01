import React from 'react'
import{Info,Header,Footer,Body,Event,OfferRideS1, OfferRideS2, OfferRideS3, OfferRideS4,RideSubmitted, Agenda, EventDetails, OfferedRides} from "./components"
import {path as SvgImage} from "./assets"

const App = () => {
  return (<>
  {/* <div className="svg-container">
      <SvgImage className="styled-svg" />
    </div> */}
  <div id='event-details-css'>
  <EventDetails/>
  </div>

  
  </>)
};

export default App