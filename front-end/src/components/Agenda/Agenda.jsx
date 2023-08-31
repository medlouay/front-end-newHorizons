import React from 'react';
import './Agenda.css';

const Agenda = () => {
  return (
    <div id="agenda-container">
      <div className="agenda-item">
        <div className="calander-text">
          <strong>14:00 -</strong> Lorem ipsum dolor sit amet
        </div>
      </div>

      <div className="agenda-item">
        <div className="calander-text">
          <strong>15:00 -</strong> Lorem ipsum dolor sit amet consectetur. In integer ipsum nisi adipiscing.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ullamcorper vitae varius pellentesque risus convallis dui dictum augue tristique{" "}
        </div>
      </div>

      <div className="agenda-item">
        <div className="calander-text">
          <strong>15:30 -</strong> Lorem ipsum dolor sit amet consectetur
        </div>
      </div>

      <div className="agenda-item">
        <div className="calander-text">
          <strong>16:00 -</strong> Lorem ipsum dolor sit amet consectetur
        </div>
      </div>

      <div className="agenda-item">
        <div className="calander-text">
          <strong>17:30 -</strong> Lorem ipsum dolor sit amet consectetur
        </div>
      </div>
    </div>
  );
};

export default Agenda;