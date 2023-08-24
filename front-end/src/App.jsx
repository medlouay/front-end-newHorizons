import React from 'react'
import{Info,Header,Footer,Event,OfferRideS1, OfferRideS2, OfferRideS3, OfferRideS4,RideSubmitted, Agenda, EventDetails, OfferedRides} from "./components"
import {path as SvgImage} from "./assets"
import { RideDetails } from './components/RideDetails/RideDetails';
import { OfferRideStep8 } from './components/OfferRideStep8/OfferRideStep8';
import { OfferRideStep7 } from './components/OfferRideStep7/OfferRideStep7';
import { OfferRideStep6 } from './components/OfferRideStep6/OfferRideStep6';
import { OfferRideStep9 } from './components/OfferRideStep9/OfferRideStep9';
import { RideDetailsStep1 } from './components/RideDetailsStep1/RideDetailsStep1';
import { RideDetailsStep3 } from './components/RideDetailsStep3/RideDetailsStep3';

const App = () => {
  return (<>
  {/* <div className="svg-container">
      <SvgImage className="styled-svg" />
    </div> */}
  <div id='event-details-css'>
  <Footer/>
  </div>

  
  </>)
};

export default App