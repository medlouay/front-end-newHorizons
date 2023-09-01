import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Profile.css';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook


const Profile = () => {
  const location = useLocation(); // Get the current location
  const currentPage = location.pathname.substring(1); // Remove the leading slash
  return (
    <div>
        <Navbar/>
    <div className="profile-how-other-users-see-it">
      
        


      <div className="frame-931">
      <div className="profile">{currentPage}</div>
      </div>
      <div className="about">About </div>
      <div className="interests">Interests </div>
      <div className="rides-history">Rides history </div>
      <img className="ellipse-3" src="ellipse-3.png" />
      <div className="lorem-ipsum-dolor-sit-amet-consectetur-interdum-lectus-etiam-non-magna-dui-in-viverra-nisl-phasellus-volutpat-scelerisque-turpis-tortor-pulvinar-nunc-mi-ut-sagittis-velit-scelerisque-vulputate-tincidunt-eleifend-purus-ante-vitae-vel-venenatis-sed-massa-nisi-viverra-lobortis-amet-interdum-id">
        Lorem ipsum dolor sit amet consectetur. Interdum lectus etiam non magna
        dui in. Viverra nisl phasellus volutpat scelerisque. Turpis tortor
        pulvinar nunc mi ut sagittis. Velit scelerisque vulputate tincidunt
        eleifend purus ante vitae vel. Venenatis sed massa nisi viverra lobortis
        amet interdum id.{" "}
      </div>
      <div className="frame-120">
        <div className="label">
          <div className="label-text">marine </div>
        </div>
        <div className="label">
          <div className="label-text">ecology </div>
        </div>
        <div className="label">
          <div className="label-text">solar energy </div>
        </div>
        <div className="label">
          <div className="label-text">wildlife protection </div>
        </div>
        <div className="label">
          <div className="label-text">air pollution </div>
        </div>
        <div className="label">
          <div className="label-text">marine conservation </div>
        </div>
        <div className="label">
          <div className="label-text">environment </div>
        </div>
        <div className="label">
          <div className="label-text">global warming </div>
        </div>
        <div className="label">
          <div className="label-text">animals </div>
        </div>
        <div className="label">
          <div className="label-text">forests </div>
        </div>
        <div className="label">
          <div className="label-text">wildlife </div>
        </div>
      </div>
      <div className="primary-button">
        <svg
          className="icons"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 7.66669C14.5023 8.5466 14.2967 9.41461 13.9 10.2C13.4296 11.1412 12.7065 11.9328 11.8116 12.4862C10.9168 13.0396 9.8855 13.3329 8.83333 13.3334C7.95342 13.3356 7.08541 13.1301 6.3 12.7334L2.5 14L3.76667 10.2C3.36995 9.41461 3.16437 8.5466 3.16667 7.66669C3.16707 6.61452 3.46041 5.58325 4.01381 4.68839C4.56722 3.79352 5.35884 3.0704 6.3 2.60002C7.08541 2.20331 7.95342 1.99772 8.83333 2.00002H9.16667C10.5562 2.07668 11.8687 2.66319 12.8528 3.64726C13.8368 4.63132 14.4233 5.94379 14.5 7.33335V7.66669Z"
            stroke="#EFF5F5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="button">Send a message </div>
      </div>
   
      <div className="frame-79">
        <svg
          className="icons6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 9H2V21H6V9Z"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="icons7"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 6L12 13L2 6"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="icons8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="icons9"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.9997 11.3698C16.1231 12.2021 15.981 13.052 15.5935 13.7988C15.206 14.5456 14.5929 15.1512 13.8413 15.5295C13.0898 15.9077 12.2382 16.0394 11.4075 15.9057C10.5768 15.7721 9.80947 15.3799 9.21455 14.785C8.61962 14.1901 8.22744 13.4227 8.09377 12.592C7.96011 11.7614 8.09177 10.9097 8.47003 10.1582C8.84829 9.40667 9.45389 8.79355 10.2007 8.40605C10.9475 8.01856 11.7975 7.8764 12.6297 7.99981C13.4786 8.1257 14.2646 8.52128 14.8714 9.12812C15.4782 9.73496 15.8738 10.5209 15.9997 11.3698Z"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 6.5H17.51"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="icon-with-text">
        <svg
          className="icons10"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.25 6.6665C13.25 8.69838 11.9257 10.6822 10.4555 12.234C9.73579 12.9938 9.0135 13.616 8.4703 14.0485C8.29117 14.1912 8.13218 14.3127 8 14.4111C7.86782 14.3127 7.70883 14.1912 7.5297 14.0485C6.9865 13.616 6.26421 12.9938 5.54446 12.234C4.0743 10.6822 2.75 8.69838 2.75 6.6665C2.75 5.27412 3.30312 3.93876 4.28769 2.95419C5.27226 1.96963 6.60761 1.4165 8 1.4165C9.39239 1.4165 10.7277 1.96963 11.7123 2.95419C12.6969 3.93876 13.25 5.27412 13.25 6.6665Z"
            stroke="#5D9B96"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
            stroke="#5D9B96"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="berlin-germany">Berlin, Germany </div>
      </div>
      <div className="oliver-bern1">Oliver Bern </div>
      <div className="ride-card">
        <div className="event-info">
          <div className="icon-with-text2">
            <svg
              className="icons11"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z"
                stroke="#5D9B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 1.3335V4.00016"
                stroke="#5D9B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.33331 1.3335V4.00016"
                stroke="#5D9B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 6.6665H14"
                stroke="#5D9B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="berlin-germany">22.08.2023 at 18:00 </div>
          </div>
          <div className="ecology-forum-for-climate-change-and-sol">
            Ecology forum for climate change and sol...{" "}
          </div>
        </div>
        <div className="group-12">
          <div className="frame-50">
            <div className="avatar-and-name">
              <div className="avatar2">
                <img className="ellipse-33" src="ellipse-33.png" />
              </div>
              <div className="host">Host </div>
              <div className="name-surname">Oliver Bern </div>
            </div>
            <div className="route-small">
              <div className="frame-59">
                <div className="frame-57">
                  <div className="frame-56">
                    <div className="_22-08-2023-09-00">
                      22.08.2023
                      <br />
                      09:00{" "}
                    </div>
                    <div className="icon-with-text2">
                      <svg
                        className="icons12"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.25 6.6665C13.25 8.69838 11.9257 10.6822 10.4555 12.234C9.73579 12.9938 9.0135 13.616 8.4703 14.0485C8.29117 14.1912 8.13218 14.3127 8 14.4111C7.86782 14.3127 7.70883 14.1912 7.5297 14.0485C6.9865 13.616 6.26421 12.9938 5.54446 12.234C4.0743 10.6822 2.75 8.69838 2.75 6.6665C2.75 5.27412 3.30312 3.93876 4.28769 2.95419C5.27226 1.96963 6.60761 1.4165 8 1.4165C9.39239 1.4165 10.7277 1.96963 11.7123 2.95419C12.6969 3.93876 13.25 5.27412 13.25 6.6665Z"
                          stroke="#5D9B96"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
                          stroke="#5D9B96"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <div className="berlin-germany">
                        Schloßstraße 2, 01067 Dresden, Germany{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg
                className="line-4"
                height="71"
                viewBox="0 0 0 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0L3.10351e-06 71"
                  stroke="#C3C6C6"
                  strokeLinecap="round"
                  strokeDasharray="5 5"
                />
              </svg>

              <div className="frame-58">
                <div className="frame-562">
                  <div className="_22-08-2023-11-10">
                    22.08.2023
                    <br />
                    11:10{" "}
                  </div>
                  <div className="icon-with-text3">
                    <svg
                      className="icons13"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.25 6.6665C13.25 8.69838 11.9257 10.6822 10.4555 12.234C9.73579 12.9938 9.0135 13.616 8.4703 14.0485C8.29117 14.1912 8.13218 14.3127 8 14.4111C7.86782 14.3127 7.70883 14.1912 7.5297 14.0485C6.9865 13.616 6.26421 12.9938 5.54446 12.234C4.0743 10.6822 2.75 8.69838 2.75 6.6665C2.75 5.27412 3.30312 3.93876 4.28769 2.95419C5.27226 1.96963 6.60761 1.4165 8 1.4165C9.39239 1.4165 10.7277 1.96963 11.7123 2.95419C12.6969 3.93876 13.25 5.27412 13.25 6.6665Z"
                        stroke="#5D9B96"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
                        stroke="#5D9B96"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="berlin-germany2">
                      Klingelhöferstraße 23, 107853 Berlin, Germa...{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="icon-with-text4">
                <svg
                  className="icons14"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
                    stroke="#5D9B96"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="berlin-germany3">
                  Dorfstraße, 15910 Bersteland, Germany{" "}
                </div>
              </div>
              <div className="icon-with-text5">
                <svg
                  className="icons15"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
                    stroke="#5D9B96"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="berlin-germany3">
                  Stadtstraße, 16789 Bersteland, Germany{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-88">
        <div className="tabs">
          <div className="ride-to-the-event">Upcoming rides </div>
          <div className="rectangle-48"></div>
        </div>
        <div className="tabs">
          <div className="ride-to-the-event">Past rides </div>
        </div>
      </div>
      <div className="ride-card2">
        <div className="event-info">
          <div className="icon-with-text2">
            <svg
              className="icons16"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z"
                stroke="#5D9B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6666 1.3335V4.00016"
                stroke="#5D9B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.33337 1.3335V4.00016"
                stroke="#5D9B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 6.6665H14"
                stroke="#5D9B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="berlin-germany">28.08.2023 at 18:00 </div>
          </div>
          <div className="ecology-forum-for-climate-change-and-sol">
            Zero waste: philosophy or way of living{" "}
          </div>
        </div>
        <div className="group-12">
          <div className="frame-50">
            <div className="avatar-and-name">
              <div className="avatar2">
                <img className="ellipse-33" src="ellipse-33.png" />
              </div>
              <div className="host">Host </div>
              <div className="name-surname">Hanna Seid </div>
            </div>
            <div className="route-small">
              <div className="frame-59">
                <div className="frame-57">
                  <div className="frame-56">
                    <div className="_22-08-2023-09-00">
                      22.08.2023
                      <br />
                      09:00{" "}
                    </div>
                    <div className="icon-with-text2">
                      <svg
                        className="icons17"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.25 6.6665C13.25 8.69838 11.9257 10.6822 10.4555 12.234C9.73579 12.9938 9.0135 13.616 8.4703 14.0485C8.29117 14.1912 8.13218 14.3127 8 14.4111C7.86782 14.3127 7.70883 14.1912 7.5297 14.0485C6.9865 13.616 6.26421 12.9938 5.54446 12.234C4.0743 10.6822 2.75 8.69838 2.75 6.6665C2.75 5.27412 3.30312 3.93876 4.28769 2.95419C5.27226 1.96963 6.60761 1.4165 8 1.4165C9.39239 1.4165 10.7277 1.96963 11.7123 2.95419C12.6969 3.93876 13.25 5.27412 13.25 6.6665Z"
                          stroke="#5D9B96"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
                          stroke="#5D9B96"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <div className="berlin-germany">
                        Schloßstraße 2, 01067 Dresden, Germany{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg
                className="line-42"
                height="71"
                viewBox="0 0 0 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0L3.10351e-06 71"
                  stroke="#C3C6C6"
                  strokeLinecap="round"
                  strokeDasharray="5 5"
                />
              </svg>

              <div className="frame-58">
                <div className="frame-562">
                  <div className="_22-08-2023-11-10">
                    22.08.2023
                    <br />
                    11:10{" "}
                  </div>
                  <div className="icon-with-text3">
                    <svg
                      className="icons18"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.25 6.6665C13.25 8.69838 11.9257 10.6822 10.4555 12.234C9.73579 12.9938 9.0135 13.616 8.4703 14.0485C8.29117 14.1912 8.13218 14.3127 8 14.4111C7.86782 14.3127 7.70883 14.1912 7.5297 14.0485C6.9865 13.616 6.26421 12.9938 5.54446 12.234C4.0743 10.6822 2.75 8.69838 2.75 6.6665C2.75 5.27412 3.30312 3.93876 4.28769 2.95419C5.27226 1.96963 6.60761 1.4165 8 1.4165C9.39239 1.4165 10.7277 1.96963 11.7123 2.95419C12.6969 3.93876 13.25 5.27412 13.25 6.6665Z"
                        stroke="#5D9B96"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
                        stroke="#5D9B96"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="berlin-germany2">
                      Klingelhöferstraße 23, 107853 Berlin, Germa...{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="icon-with-text4">
                <svg
                  className="icons19"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
                    stroke="#5D9B96"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="berlin-germany3">
                  Dorfstraße, 15910 Bersteland, Germany{" "}
                </div>
              </div>
              <div className="icon-with-text5">
                <svg
                  className="icons20"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
                    stroke="#5D9B96"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="berlin-germany3">
                  Stadtstraße, 16789 Bersteland, Germany{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


<Footer/>
    </div>
    );
}

export default Profile;