import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './SelectMap.css';

const SelectMap = () => {
  const history = useHistory(); // Get access to the history object

  const handleOkClick = () => {
    history.goBack(); // Go back to the previous page
  };

  return (
    <div id="mapcontainer">
      <div className="offer-ride-step-2-no-car-added-in-profile">
        <svg
          className="x"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths */}
        </svg>

        <div className="select-on-map">Select on map</div>
        <img className="mapsicle-map" src="src\assets\mapsicle-map.png" alt="Map" />
        <div className="primary-button">
          <button className="button" onClick={handleOkClick}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default SelectMap;
