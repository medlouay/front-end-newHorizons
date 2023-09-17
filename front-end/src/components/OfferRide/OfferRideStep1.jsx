import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./OfferRideStep1.css";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";

const OfferRideStep1 = ({ onNext, prevStep, nextStep }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("./eventsData.json")
      .then((res) => res.json())
      .then((res) => setEvents(res));
    // const response = await axios.post('http://127.0.0.1:3309/api/rides', modifiedData);
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (searchValue.trim() !== "") {
      setSelectedEvent(searchValue); // Save the event in state
      onNext({ event: searchValue }); // Pass the event data to the next step
    } else {
      alert("Please enter an event to proceed.");
    }
    nextStep();
  };

  return (
    <div>
      <Navbar />
      <div id="container">
        <div>
          <div>
            <div id="offer-ride-title">Offer ride</div>
            <div id="step1">Step 1 of 3</div>


{/* <span id="event">Event</span>
 */}           
  <div id="select-event">Select an event</div>
            <div id="searchbar">
              <select id="select-event"
                className="searchbar"
                placeholder="Select event"
              >
                <option value="" disabled selected>
                  Select event
                </option>
                {events.map((el, idx) => (
                  <option key={idx} value={el.id_event}>
                    {el.name_event}
                  </option>
                ))}
              </select>

            </div>

            <div>
              <Link to="/offer-ride-step2">
                <button id="nxt-button" onClick={handleNextButtonClick}>
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OfferRideStep1;
