import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Rides.css';

export const Rides = ({ ...props }) => {
  const [rideData, setRideData] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    axios
      .get('http://localhost:3309/api/rides/all')
      .then((response) => {
        console.log('Data fetched:', response.data);
        setRideData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Ride Data</h1>
        <div className="ride-container-wrapper">
          {rideData.map((ride, index) => (
            <div key={ride.id_ride} className="ride-container">
              <h2>Ride Details</h2>
              <div>
                <strong>Departure Location:</strong> {ride.departLocation}
              </div>
              <div>
                <strong>Arrival Location:</strong> {ride.arrivalLocation}
              </div>
              <div>
                <strong>Price:</strong> {ride.price}
              </div>
              <div>
                <strong>Seats Available:</strong> {ride.seatsAvailable}
              </div>
              <div>
                <strong>Arrival Time:</strong> {ride.arrivalTime}
              </div>
              <div>
                <strong>Comment:</strong> {ride.commentRide}
              </div>
              <div>
                <strong>Departure Date:</strong> {ride.departureDate}
              </div>
              <div>
                <strong>Picking Time:</strong> {ride.pickingTime}
              </div>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rides;
