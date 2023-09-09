
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ReturnRideStep2.css";

export const ReturnRideStep2 = ({ ...props }) => {
  return (

  <div>
    <Navbar/>
    <div className="offer-ride-return-ride-step-3">
      <svg
        className="icons"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 8L8 24"
          stroke="#2D3536"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8L24 24"
          stroke="#2D3536"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="offer-ride">Offer return ride </div>
      <div className="step-3-of-4">Step 2 of 3 </div>
      <div className="frame-125">
        <div className="frame-102">
          <div className="pick-up-point">Pick-up point </div>
          <div className="search-field">
            <div className="frame-106">
              <div className="placeholder">Input exact address </div>
              <svg
                className="icons2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#2D3536"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0004 21L16.6504 16.65"
                  stroke="#2D3536"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="frame-72">
          <div className="select-on-map">Select on map </div>
          <svg
            className="icons3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6L8 10L4 6"
              stroke="#5D9B96"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="frame-126">
        <div className="frame-105">
          <div className="drop-off-point">Drop-off point </div>
          <div className="search-field">
            <div className="frame-106">
              <div className="placeholder">Input exact address </div>
              <svg
                className="icons4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#2D3536"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0004 21L16.6504 16.65"
                  stroke="#2D3536"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="frame-72">
          <div className="select-on-map">Select on map </div>
          <svg
            className="icons5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6L8 10L4 6"
              stroke="#5D9B96"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
     


      <button id='backbutton2'>
            <a href="offer-ride-step1">Back</a>
          </button>
          <div>

            
          <button id='nextbutton2'>
          <a     href="return-ride-step3"> Next</a>
          </button>
        </div>
    
      <div className="frame-18">
        <svg
          className="icons6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 23C17.5228 23 22 18.5228 22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13C2 18.5228 6.47715 23 12 23Z"
            stroke="#5D9B96"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9V17"
            stroke="#5D9B96"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 13H16"
            stroke="#5D9B96"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="add-a-stop">Add a stop </div>
      </div>
      <div className="frame-115">
        <div className="departure-date-and-time">Departure date and time </div>
        <div className="date-and-time-picker">
          <div className="frame-107">
            <div className="select-date-and-time">Select date and time </div>
            <svg
              className="icons7"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="#4BA7A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="#4BA7A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="#4BA7A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="#4BA7A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="frame-158">
        <div className="arrival-estimated-date-and-time">
          Arrival estimated date and time{" "}
        </div>
        <div className="date-and-time-picker">
          <div className="frame-107">
            <div className="select-date-and-time">Select date and time </div>
            <svg
              className="icons8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="#4BA7A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="#4BA7A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="#4BA7A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="#4BA7A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="frame-124">
        <div className="tabs">
          <div className="ride-to-the-event">Ride to the event </div>
          <div className="rectangle-48"></div>
        </div>
        <div className="tabs">
          <div className="ride-to-the-event">Ride from the event </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    ) 
}

export default ReturnRideStep2