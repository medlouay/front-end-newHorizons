import React from 'react'
import "./UpCommingRide.css";
import {usercheck,users,mappin, userplus,handcoins, messagecircle, calendar, arrowupright} from "../../assets";

const UpCommingRide = () => {
  return (
    <div className="frame">
      <div className="overlap">
        <h1 className="upcoming-rides">UPCOMING RIDES</h1>
        <div className="overlap-group">
          <div className="div">
            <p className="ecology-forum-for">ECOLOGY FORUM FOR CLIMATE CHANGE</p>
            <div className="div-2">
              <img className="img" alt="User check" src={usercheck} />
              <div className="text-wrapper">2 passengers joined</div>
            </div>
            <div className="div-3">
              <img className="img" alt="Users" src={users} />
              <div className="text-wrapper">1 seat available</div>
            </div>
            <div className="frame-wrapper">
              <div className="div-wrapper">
                <div className="div-4">
                  <div className="text-wrapper-2">09:00</div>
                  <div className="div-5">
                    <img className="img" alt="Map pin" src={mappin} />
                    <p className="text-wrapper">Schloßstraße 2, 01067 Dresden, Germany</p>
                  </div>
                </div>
              </div>
            </div>
            <img className="line" alt="Line" src="line-3.svg" />
            <div className="frame-wrapper-2">
              <div className="div-4">
                <div className="text-wrapper-2">11:10</div>
                <div className="div-5">
                  <img className="img" alt="Map pin" src={mappin} />
                  <p className="text-wrapper">Klingelhöferstraße 23, 10785 Berlin, Germany</p>
                </div>
              </div>
            </div>
            <div className="text-wrapper-3">See 3 more</div>
            <p className="people-s-interests">People&#39;s interests in the rides:</p>
            <div className="div-6">
              <div className="div-wrapper-2">
                <div className="text-wrapper-4">solar energy</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-4">ecology</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-4">solar energy</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-4">wildlife protection</div>
              </div>
            </div>
            <div className="div-7">
              <img className="img" alt="User plus" src={userplus} />
              <div className="text-wrapper-5">Join ride</div>
            </div>
            <div className="overlap-group-2">
              <div className="div-8">
                <div className="frame-wrapper-3">
                  <div className="div-9">
                    <img className="img-2" alt="Ellipse" src="ellipse-4.svg" />
                    <div className="text-wrapper-6">Driver</div>
                    <div className="text-wrapper-7">Oliver Bern</div>
                  </div>
                </div>
                <div className="frame-wrapper-3">
                  <div className="div-9">
                    <img className="ellipse" alt="Ellipse" src="ellipse-4.png" />
                    <div className="text-wrapper-6">Passenger</div>
                    <div className="text-wrapper-7">Kira Schneider</div>
                  </div>
                </div>
                <div className="frame-wrapper-3">
                  <div className="div-9">
                    <img className="ellipse-2" alt="Ellipse" src={usercheck} />
                    <div className="text-wrapper-6">Passenger</div>
                    <div className="text-wrapper-7">Ben Petterson</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <div className="div-10">
                  <p className="ecology-forum-for">ECOLOGY FORUM FOR CLIMATE CHANGE</p>
                  <div className="div-11">
                    <div className="div-12">
                      <img className="img" alt="Users" src={users} />
                      <div className="text-wrapper">1 seat available</div>
                    </div>
                    <div className="div-12">
                      <img className="img" alt="Ph hand coins" src={handcoins} />
                      <div className="text-wrapper">15 EUR</div>
                    </div>
                  </div>
                  <div className="frame-wrapper-4">
                    <div className="frame-wrapper-5">
                      <div className="div-4">
                        <div className="text-wrapper-2">09:00</div>
                        <div className="div-5">
                          <img className="img" alt="Map pin" src={mappin} />
                          <p className="text-wrapper">Schloßstraße 2, 01067 Dresden, Germany</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="line-2" alt="Line" src="line-3-2.svg" />
                  <div className="frame-wrapper-2">
                    <div className="div-4">
                      <div className="text-wrapper-2">11:10</div>
                      <div className="div-5">
                        <img className="img" alt="Map pin" src={mappin} />
                        <p className="text-wrapper">Klingelhöferstraße 23, 10785 Berlin, Germany</p>
                      </div>
                    </div>
                  </div>
                  <p className="p">Event starts on 23/08/2023 at 14:00</p>
                  <div className="text-wrapper-8">See 3 more</div>
                  <p className="people-s-interests">People&#39;s interests in the ride</p>
                  <div className="div-13">
                    <div className="div-wrapper-2">
                      <div className="text-wrapper-4">solar energy</div>
                    </div>
                    <div className="div-wrapper-2">
                      <div className="text-wrapper-4">ecology</div>
                    </div>
                    <div className="div-wrapper-2">
                      <div className="text-wrapper-4">solar energy</div>
                    </div>
                    <div className="div-wrapper-2">
                      <div className="text-wrapper-4">wildlife protection</div>
                    </div>
                  </div>
                  <div className="div-14">
                    <img className="img" alt="User plus" src={userplus} />
                    <div className="text-wrapper-5">Join ride</div>
                  </div>
                  <div className="div-15">
                    <div className="frame-wrapper-3">
                      <div className="div-9">
                        <img className="img-2" alt="Ellipse" src="ellipse-4-2.svg" />
                        <div className="text-wrapper-6">Driver</div>
                        <div className="text-wrapper-7">Oliver Bern</div>
                      </div>
                    </div>
                    <div className="frame-wrapper-3">
                      <div className="div-9">
                        <img className="img-2" alt="Ellipse" src="ellipse-4-2.png" />
                        <div className="text-wrapper-6">Passenger</div>
                        <div className="text-wrapper-7">Kira Schneider</div>
                      </div>
                    </div>
                    <div className="frame-wrapper-3">
                      <div className="div-9">
                        <img className="ellipse-3" alt="Ellipse" src="ellipse-4-3.png" />
                        <div className="text-wrapper-6">Passenger</div>
                        <div className="text-wrapper-7">Ben Petterson</div>
                      </div>
                    </div>
                    <div className="frame-wrapper-3">
                      <div className="div-9">
                        <img className="img-2" alt="Frame" src="frame.svg" />
                        <div className="text-wrapper-6">Passenger</div>
                        <div className="text-wrapper-9">Seat for you</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-16">
                    <img className="img" alt="Message circle" src={messagecircle} />
                    <div className="text-wrapper">Message a driver</div>
                  </div>
                </div>
                <div className="div-17">
                  <img className="img" alt="Calendar" src={calendar} />
                  <div className="text-wrapper">22/08/2023</div>
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="div-18">
                  <p className="text-wrapper-10">GLOBAL WARMING: IS IT TOO LATE TO ACT?</p>
                  <div className="div-19">
                    <div className="div-20">
                      <img className="img-3" alt="Users" src={users} />
                      <div className="text-wrapper-11">2 seats available</div>
                    </div>
                    <div className="div-20">
                      <img className="img-3" alt="Ph hand coins" src={handcoins} />
                      <div className="text-wrapper-11">10 EUR</div>
                    </div>
                  </div>
                  <div className="frame-wrapper-6">
                    <div className="frame-wrapper-7">
                      <div className="div-21">
                        <div className="text-wrapper-12">09:00</div>
                        <div className="div-22">
                          <img className="img-3" alt="Map pin" src={mappin} />
                          <p className="text-wrapper-11">Schloßstraße 88, 01079 Vienna, Austria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="line-3" alt="Line" src="line-3-4.svg" />
                  <div className="frame-wrapper-8">
                    <div className="div-21">
                      <div className="text-wrapper-12">11:10</div>
                      <div className="div-22">
                        <img className="img-3" alt="Map pin" src={mappin} />
                        <p className="text-wrapper-11">Klingelhöferstraße 23, 10785 Berlin, Germany</p>
                      </div>
                    </div>
                  </div>
                  <p className="people-s-interests-2">People&#39;s interests in the ride</p>
                  <div className="div-23">
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">solar energy</div>
                    </div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">ecology</div>
                    </div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">solar energy</div>
                    </div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">wildlife protection</div>
                    </div>
                  </div>
                  <div className="div-24">
                    <img className="img-3" alt="User plus" src={userplus} />
                    <div className="text-wrapper-14">Join ride</div>
                  </div>
                  <div className="div-25">
                    <div className="frame-wrapper-9">
                      <div className="div-26">
                        <img className="img-4" alt="Ellipse" src="ellipse-4-4.svg" />
                        <div className="text-wrapper-15">Driver</div>
                        <div className="text-wrapper-16">Oliver Bern</div>
                      </div>
                    </div>
                    <div className="frame-wrapper-9">
                      <div className="div-26">
                        <img className="img-4" alt="Ellipse" src="ellipse-4-4.png" />
                        <div className="text-wrapper-15">Passenger</div>
                        <div className="text-wrapper-16">Kira Schneider</div>
                      </div>
                    </div>
                    <div className="frame-wrapper-9">
                      <div className="div-26">
                        <img className="img-4" alt="Frame" src="frame-3.svg" />
                        <div className="text-wrapper-15">Passenger</div>
                        <div className="text-wrapper-17">Seat for you</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-27">
                    <img className="img-3" alt="Message circle" src={messagecircle} />
                    <div className="text-wrapper-11">Message a driver</div>
                  </div>
                  <div className="text-wrapper-18">Event starts at 14:00</div>
                </div>
                <div className="div-28">
                  <img className="img-3" alt="Calendar" src={calendar} />
                  <div className="text-wrapper-19">22/08/2023</div>
                </div>
              </div>
            </div>
            <div className="group-2">
              <div className="overlap-2">
                <div className="div-18">
                  <p className="text-wrapper-10">ZERO WASTE: PHILOSOPHY OR WAY OF LIVING</p>
                  <div className="div-19">
                    <div className="div-20">
                      <img className="img-3" alt="Users" src={users} />
                      <div className="text-wrapper-11">3 seats available</div>
                    </div>
                    <div className="div-20">
                      <img className="img-3" alt="Ph hand coins" src={handcoins} />
                      <div className="text-wrapper-11">15 EUR</div>
                    </div>
                  </div>
                  <div className="frame-wrapper-6">
                    <div className="frame-wrapper-7">
                      <div className="div-21">
                        <div className="text-wrapper-12">09:00</div>
                        <div className="div-22">
                          <img className="img-3" alt="Map pin" src={mappin} />
                          <p className="text-wrapper-11">Schloßstraße 2, 01067 Dresden, Germany</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="line-3" alt="Line" src="line-3-3.svg" />
                  <div className="frame-wrapper-8">
                    <div className="div-21">
                      <div className="text-wrapper-12">11:10</div>
                      <div className="div-22">
                        <img className="img-3" alt="Map pin" src={mappin} />
                        <p className="text-wrapper-11">Klingelhöferstraße 23, 10785 Berlin, Germany</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-20">See 1 more</div>
                  <p className="people-s-interests-2">People&#39;s interests in the ride</p>
                  <div className="div-23">
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">solar energy</div>
                    </div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">ecology</div>
                    </div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">solar energy</div>
                    </div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">wildlife protection</div>
                    </div>
                  </div>
                  <div className="div-24">
                    <img className="img-3" alt="User plus" src={userplus} />
                    <div className="text-wrapper-14">Join ride</div>
                  </div>
                  <div className="div-25">
                    <div className="frame-wrapper-9">
                      <div className="div-26">
                        <img className="img-4" alt="Ellipse" src="ellipse-4-3.svg" />
                        <div className="text-wrapper-15">Driver</div>
                        <div className="text-wrapper-16">Oliver Bern</div>
                      </div>
                    </div>
                    <div className="frame-wrapper-9">
                      <div className="div-26">
                        <img className="img-4" alt="Frame" src="frame-2.svg" />
                        <div className="text-wrapper-15">Passenger</div>
                        <div className="text-wrapper-17">Seat for you</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-27">
                    <img className="img-3" alt="Message circle" src={messagecircle} />
                    <div className="text-wrapper-11">Message a driver</div>
                  </div>
                  <div className="text-wrapper-21">Event starts at 14:00</div>
                </div>
                <div className="div-28">
                  <img className="img-3" alt="Calendar" src={calendar} />
                  <div className="text-wrapper-19">08/08/2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-29">
          <div className="view-all-rides">VIEW ALL RIDES</div>
          <img className="img" alt="Arrow up right" src={arrowupright} />
        </div>
        <img className="img-5" alt="Frame" src="frame-67.svg" />
      </div>
    </div>
    
  )
}

export default UpCommingRide