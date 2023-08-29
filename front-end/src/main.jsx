import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import{OfferRide,Event,Navbar,Info,Header,Footer,Body,Login,Signup, 
  SuccessPage, Failedpage, OfferRideStep1,OfferRideStep2,OfferRideStep3,Map} from "./components"
import { BrowserRouter,createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
import { element } from 'prop-types';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/success",
    element: <SuccessPage/>,
  },
  {
    path: "/failed",
    element: <Failedpage/>,
  },
  {
    path: "/events",
    element: <div>
      <Navbar/>
      <Event/>
      </div> ,
  },
  {
    path: "/offer-ride-step1",
    element: <OfferRideStep1/>,
  },
  {
    path: "/offer-ride-step2",
    element: <OfferRideStep2/>,
  },
  {
    path: "/offer-ride-step3",
    element: <OfferRideStep3/>,
  },
  {
    path: "/select-on-map",
    element: <Map/>,
  },
]);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

