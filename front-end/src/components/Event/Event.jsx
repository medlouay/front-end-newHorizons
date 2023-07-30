import React from 'react'
import "./Event.css";
import {calendar,noridecar,mappin,users,usercheck,userplus,carline,clock,claritycarline,whiteclock } from "../../assets";

const Event = () => {
  return (
    <div className="box">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="overlap-group">
            <h1 className="events-for-you">EVENTS FOR YOU</h1>
            <div className="overlap">
              <div className="div">
                <p className="text-wrapper">ECOLOGY FORUM FOR CLIMATE CHANGE</p>
                <div className="frame-2">
                  <img className="img" alt="Clarity car line" src={carline} />
                  <div className="text-wrapper-2">4 rides offered</div>
                </div>
                <div className="frame-3">
                  <img className="img" alt="Clock" src={clock} />
                  <p className="text-wrapper-2">3 passengers in waiting list</p>
                </div>
                <div className="frame-4">
                  <img className="img" alt="Users" src={users} />
                  <div className="text-wrapper-2">3 seats available</div>
                </div>
                <div className="frame-5">
                  <img className="img" alt="Map pin" src={mappin} />
                  <div className="text-wrapper-2">Berlin, Germany</div>
                </div>
                <div className="text-wrapper-3">See 3 more</div>
                <div className="frame-6">
                  <img className="img" alt="User check" src={usercheck} />
                  <div className="text-wrapper-2">5 passengers joined</div>
                </div>
                <p className="people-s-interests">People&#39;s interests in the rides</p>
                <div className="frame-7">
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">solar energy</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">ecology</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">solar energy</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">wildlife protection</div>
                  </div>
                </div>
                <div className="frame-8">
                  <img className="img" alt="Clarity car line" src={claritycarline} />
                  <div className="text-wrapper-2">Offer ride</div>
                </div>
                <div className="frame-9">
                  <img className="img" alt="User plus" src={userplus} />
                  <div className="text-wrapper-5">Join ride</div>
                </div>
              </div>
              <div className="frame-10">
                <img className="img" alt="Calendar" src={calendar} />
                <div className="text-wrapper-2">22.08.2023 at 14:00</div>
              </div>
            </div>
            <div className="overlap-2">
              <div className="div">
                <p className="text-wrapper">GLOBAL WARMING: IS IT TOO LATE TO ACT?</p>
                <div className="frame-2">
                  <img className="img" alt="Clarity car line" src={claritycarline} />
                  <div className="text-wrapper-2">0 rides offered</div>
                </div>
                <div className="frame-3">
                  <img className="img" alt="Clock" src={clock} />
                  <p className="text-wrapper-2">3 passengers in waiting list</p>
                </div>
                <div className="frame-4">
                  <img className="img" alt="Users" src={users} />
                  <div className="text-wrapper-2">0 seats available</div>
                </div>
                <div className="frame-5">
                  <img className="img" alt="Map pin" src={mappin} />
                  <div className="text-wrapper-2">Amsterdam, the Netherlands</div>
                </div>
                <div className="frame-6">
                  <img className="img" alt="User check" src={usercheck} />
                  <div className="text-wrapper-2">0 passengers joined</div>
                </div>
                <p className="people-s-interests">People&#39;s interests in the rides</p>
                <div className="frame-7">
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">global warming</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">ecology</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">nature</div>
                  </div>
                </div>
                <div className="frame-8">
                  <img className="img" alt="Clarity car line" src={claritycarline} />
                  <div className="text-wrapper-2">Offer ride</div>
                </div>
                <div className="frame-9">
                  <img className="img" alt="Clock" src={whiteclock} />
                  <div className="text-wrapper-5">Join waiting list</div>
                </div>
              </div>
              <div className="frame-10">
                <img className="img" alt="Calendar" src={calendar} />
                <div className="text-wrapper-2">01.08.2023 at 18:00</div>
              </div>
            </div>
            <div className="overlap-3">
              <div className="div">
                <p className="text-wrapper">ZERO WASTE: PHILOSOPHY OR WAY OF LIVING</p>
                <div className="frame-2">
                  <img className="img" alt="Clarity car line" src={claritycarline} />
                  <div className="text-wrapper-2">1 ride offered</div>
                </div>
                <div className="frame-3">
                  <img className="img" alt="Clock" src={clock} />
                  <p className="text-wrapper-2">0 passengers in waiting list</p>
                </div>
                <div className="frame-4">
                  <img className="img" alt="Users" src={users} />
                  <div className="text-wrapper-2">3 seats available</div>
                </div>
                <div className="frame-5">
                  <img className="img" alt="Map pin" src={mappin} />
                  <div className="text-wrapper-2">Dresden, Germany</div>
                </div>
                <div className="frame-6">
                  <img className="img" alt="User check" src={usercheck} />
                  <div className="text-wrapper-2">0 passengers joined</div>
                </div>
                <p className="people-s-interests">People&#39;s interests in the rides</p>
                <div className="frame-7">
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">zero waste</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">minimalism</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">environment</div>
                  </div>
                </div>
                <div className="frame-8">
                  <img className="img" alt="Clarity car line" src={claritycarline} />
                  <div className="text-wrapper-2">Offer ride</div>
                </div>
                <div className="frame-9">
                  <img className="img" alt="User plus" src={userplus} />
                  <div className="text-wrapper-5">Join ride</div>
                </div>
              </div>
              <div className="frame-10">
                <img className="img" alt="Calendar" src={calendar} />
                <div className="text-wrapper-2">14.08.2023 at 09:00</div>
              </div>
            </div>
            <div className="overlap-4">
              <div className="frame-11">
                <div className="text-wrapper">ENVIRONMENT PROTECTION PROBLEMS</div>
                <div className="frame-5">
                  <img className="img" alt="Map pin" src={mappin} />
                  <div className="text-wrapper-2">Rome, Italy</div>
                </div>
                <div className="frame-12">
                  <img className="img" alt="Clarity car line" src={claritycarline} />
                  <div className="text-wrapper-2">Offer ride</div>
                </div>
                <div className="frame-13">
                  <img className="img" alt="Clock" src={whiteclock} />
                  <div className="text-wrapper-5">Join waiting list</div>
                </div>
                <img className="frame-14" alt="Frame" src={noridecar} />
                <p className="p">No rides and passengers added yet</p>
              </div>
              <div className="frame-10">
                <img className="img" alt="Calendar" src={calendar} />
                <div className="text-wrapper-2">22.08.2023 at 18:00</div>
              </div>
            </div>
            <div className="frame-15">
              <div className="view-all-events">VIEW ALL EVENTS</div>
              <img className="img" alt="Arrow up right" src="arrow-up-right.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event