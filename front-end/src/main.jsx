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
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/success",
//     element: <SuccessPage />,
//   },
//   {
//     path: "/failed",
//     element: <Failedpage />,
//   },
//   {
//     path: "/events",
//     element: (
//       <div>
//         <Navbar />
//         <Event />
//         <Footer />
//       </div>
//     ),
//   },
//   {
//     path: "/offer-ride-step1",
//     element: (
//       <div>
//         <OfferRideStep1 />
//       </div>
//     ),
//   },
//   {
//     path: "/offer-ride-step2",
//     element: <OfferRideStep2 />,
//   },
//   {
//     path: "/offer-ride-step3",
//     element: <OfferRideStep3 />,
//   },
//   {
//     path: "/select-on-map",
//     element: <SelectMap />,
//   },
//   {
//     path: "/event-details",
//     element: <EventDetails />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   {
//     path: "/ride-details",
//     element: <RideDetails />,
//   },
//   {
//     path: "/about-us",
//     element: <AboutUs />,
//   },
// ]);

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
        <Route path="/offer-ride-step1" element={<OfferRideStep1 />} />
        <Route path="/offer-ride-step2" element={<OfferRideStep2 />} />
        <Route path="/offer-ride-step3" element={<OfferRideStep3 />} />
        {/* <Route path="/offer-ride-step4" element={<OfferRideStep4 />} /> */}
        <Route path="/select-on-map" element={<SelectMap />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ride-details" element={<RideDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
