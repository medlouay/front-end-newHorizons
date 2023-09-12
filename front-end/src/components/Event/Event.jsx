import { useEffect, useState } from "react";
import "./Event.css";
import { arrowuproghtgreen } from "../../assets";
import EventItem from "../EventItem/EventItem";
import axios from "axios";

const Event = () => {
  const [eventsData, setData] = useState([]);

  useEffect(() => {
    axios.get("/eventsData.json").then((res) => setData(res.data));
    // axios.get("http://127.0.0.1:3309/api/events/all").then((res) => console.log(res.data));
  }, []);

  return (
    <div className="box-event">
      <div className="frame-wrapper-event">
        <div className="frame-event">
          <div className="overlap-group-event">
            <h1 className="events-for-you-event">EVENTS FOR YOU</h1>

            <div className="events-items">
              {eventsData.map((e) => (
                <EventItem key={e.id_event} {...e} />
              ))}
            </div>

            <div className="frame-15-event">
              <div className="view-all-events-event">VIEW ALL EVENTS</div>
              <img
                className="img-event"
                alt="Arrow up right"
                src={arrowuproghtgreen}
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Event;
