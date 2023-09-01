/* eslint-disable react/prop-types */
import "./EventItem.css";
import {
  calendar,
  info,
  noridecar,
  mappin,
  users,
  usercheck,
  userplus,
  carline,
  clock,
  claritycarline,
  whiteclock,
} from "../../assets";
import { Link } from "react-router-dom";

const EventItem = ({
  id_event,
  name_event,
  place_event,
  date_event,
  interests,
  seatsAvailible,
  ridesOffered,
  passangers,
  waiting,
}) => {
  return (
    <div className="eventItem">
      <div className="event-div">
        <Link to="/event-details">
          <p className="event-title">{name_event}</p>

          <div className="place-event-div">
            <img className="img-event" alt="Map pin" src={mappin} />
            <div>{place_event}</div>
          </div>

          {ridesOffered === 0 && waiting === 0 ? (
            <div className="no-rides">
              <img className="" alt="Frame" src={noridecar} />
              <p>No rides and passengers added yet</p>
            </div>
          ) : (
            <div>
              <div className="data-items">
                <div>
                  <img
                    className="img-event"
                    alt="Clarity car line"
                    src={carline}
                  />
                  <div>{ridesOffered} rides offered</div>
                </div>
                <div>
                  <img className="img-event" alt="User check" src={usercheck} />
                  <div>{passangers} passengers joined</div>
                </div>
                <div>
                  <img className="img-event" alt="Users" src={users} />
                  <div>{seatsAvailible} seats available</div>
                </div>
                <div>
                  <img className="img-event" alt="Clock" src={clock} />
                  <p>{waiting} passengers in waiting list</p>
                </div>
              </div>
              {/* <div className="text-wrapper-3-event">See 3 more</div> */}
              <p>People&#39;s interests in the rides:</p>
              <div className="event-interests">
                {interests.map((el, idx) => (
                  <div key={idx} className="event-interests-item">
                    {el}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Link>
        <div className="event-buttons">
          <div className="button1">
            <Link to="/offer-ride-step1">
              <img
                className="img-event"
                alt="Clarity car line"
                src={claritycarline}
              />
              <span> Offer ride</span>
            </Link>
          </div>
          <div className="button2">
            <img className="img-event" alt="User plus" src={userplus} />
            <span className="text-wrapper-5-event"> Join ride</span>
          </div>
        </div>
      </div>

      <div className="event-date">
        <img className="img-event" alt="Calendar" src={calendar} />
        <div className="text-wrapper-2-event">{date_event}</div>
      </div>
    </div>
  );
};

export default EventItem;
