import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  OfferRide,
  Event,
  Navbar,
  Info,
  Header,
  Footer,
  Body,
  Login,
  Signup,
  SuccessPage,
  Failedpage,
  OfferRideStep1,
  OfferRideStep2,
  OfferRideStep3,
  SelectMap,
  MapModel,
  EventDetails,
  Profile,
  RideDetails,
  AboutUs,
  Events,
  ReturnRideStep2,
  ReturnRideStep3,
  RideSubmitted,
  ReturnRideSubmitted,
  Rides
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failed" element={<Failedpage />} />
        <Route path="/offer-ride-step1" element={<OfferRide />} />
        <Route path="/offer-ride-step2" element={<OfferRide />} />
        <Route path="/offer-ride-step3" element={<OfferRide />} />
        <Route path="/select-on-map" element={<SelectMap />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ride-details" element={<RideDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/return-ride-step2" element={<ReturnRideStep2 />} />
        <Route path="/return-ride-step3" element={<ReturnRideStep3 />} />
        <Route path="/ride-submitted" element={< RideSubmitted/>} />
        <Route path="/ride-submitted" element={< RideSubmitted/>} />
        <Route path="/return-ride-submitted" element={< ReturnRideSubmitted/>} />    
        <Route path="/rides" element={< Rides/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
