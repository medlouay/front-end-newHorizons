import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./RideDetails.css";

export const RideDetails = ({ ...props }) => {
  return (
    
    <div>
        <Navbar/>
    <div className="ride-details">
<div className="frame-66-1">
        <div className="frame-18">
          <svg
            className="users"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 22V20C17 18.9391 16.5786 17.9217 15.8284 17.1716C15.0783 16.4214 14.0609 16 13 16H5C3.93913 16 2.92172 16.4214 2.17157 17.1716C1.42143 17.9217 1 18.9391 1 20V22"
              stroke="#4BA7A8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z"
              stroke="#4BA7A8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 21.9999V19.9999C22.9993 19.1136 22.7044 18.2527 22.1614 17.5522C21.6184 16.8517 20.8581 16.3515 20 16.1299"
              stroke="#4BA7A8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 4.12988C16.8604 4.35018 17.623 4.85058 18.1676 5.55219C18.7122 6.2538 19.0078 7.11671 19.0078 8.00488C19.0078 8.89305 18.7122 9.75596 18.1676 10.4576C17.623 11.1592 16.8604 11.6596 16 11.8799"
              stroke="#4BA7A8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="_1-seat-available">1 seat available</div>
        </div>

        <div className="frame-14">
          <svg
            className="clarity-car-line"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_397_150)">
              <path d="M10 11.3333H12V12.6667H10V11.3333Z" fill="#4BA7A8" />
              <path
                d="M17.632 9.44662C16.4497 7.51182 14.8367 5.87603 12.9187 4.66662C12.0326 4.10504 11.0226 3.76891 9.9767 3.68757C8.93082 3.60622 7.88094 3.78213 6.9187 4.19995C6.07703 4.59695 5.34466 5.19286 4.78482 5.93622C4.22497 6.67958 3.85449 7.54805 3.70536 8.46662C3.65203 8.77995 3.61203 9.07995 3.57203 9.37328C2.94786 9.47445 2.37995 9.79412 1.96965 10.2752C1.55935 10.7564 1.33337 11.3676 1.33203 12V16.0866C1.33203 16.4402 1.47251 16.7794 1.72256 17.0294C1.9726 17.2795 2.31174 17.42 2.66536 17.42V12C2.66536 11.6463 2.80584 11.3072 3.05589 11.0571C3.30594 10.8071 3.64508 10.6666 3.9987 10.6666H16.4854C17.7702 10.6684 19.002 11.1796 19.9105 12.0881C20.8191 12.9967 21.3303 14.2284 21.332 15.5133V16H19.9987C19.7171 15.3134 19.1926 14.7545 18.5253 14.4299C17.8579 14.1054 17.0945 14.0379 16.3805 14.2404C15.6666 14.4429 15.0522 14.9011 14.6546 15.5277C14.257 16.1542 14.104 16.9053 14.2248 17.6375C14.3456 18.3696 14.7318 19.0317 15.3096 19.4973C15.8874 19.963 16.6165 20.1995 17.3576 20.1619C18.0987 20.1243 18.8 19.8151 19.3278 19.2934C19.8555 18.7717 20.1726 18.0739 20.2187 17.3333H21.332C21.6857 17.3333 22.0248 17.1928 22.2748 16.9428C22.5249 16.6927 22.6654 16.3536 22.6654 16V15.5133C22.6627 14.0746 22.1587 12.6818 21.24 11.5745C20.3214 10.4673 19.0455 9.71482 17.632 9.44662ZM7.33203 9.33328H4.6187C4.6187 9.12662 4.6787 8.91328 4.7187 8.66662C4.83388 7.93426 5.13446 7.24353 5.59187 6.66009C6.04928 6.07666 6.64832 5.61992 7.33203 5.33328V9.33328ZM8.66536 9.33328V5.05328C9.91 4.89166 11.1723 5.16483 12.2387 5.82662C13.6945 6.7334 14.951 7.9264 15.932 9.33328H8.66536ZM17.1987 18.92C16.8691 18.92 16.5468 18.8222 16.2727 18.6391C15.9987 18.4559 15.785 18.1956 15.6589 17.8911C15.5328 17.5865 15.4997 17.2514 15.5641 16.9281C15.6284 16.6048 15.7871 16.3079 16.0202 16.0748C16.2533 15.8417 16.5502 15.683 16.8735 15.6186C17.1968 15.5543 17.532 15.5873 17.8365 15.7135C18.141 15.8396 18.4013 16.0533 18.5845 16.3273C18.7676 16.6014 18.8654 16.9236 18.8654 17.2533C18.8654 17.6953 18.6898 18.1192 18.3772 18.4318C18.0646 18.7444 17.6407 18.92 17.1987 18.92Z"
                fill="#4BA7A8"
              />
              <path
                d="M9.447 16C9.16543 15.3134 8.64094 14.7545 7.97358 14.43C7.30623 14.1054 6.54275 14.038 5.82883 14.2404C5.1149 14.4429 4.50052 14.9012 4.10291 15.5277C3.7053 16.1543 3.5523 16.9053 3.67311 17.6375C3.79392 18.3697 4.18008 19.0318 4.7579 19.4974C5.33572 19.963 6.06475 20.1996 6.80588 20.162C7.54701 20.1244 8.24834 19.8152 8.77606 19.2935C9.30378 18.7717 9.62093 18.074 9.667 17.3333H13.2003V17.1667C13.1871 16.7733 13.2321 16.3802 13.3337 16H9.447ZM6.667 18.92C6.33736 18.92 6.01513 18.8223 5.74105 18.6391C5.46696 18.456 5.25334 18.1957 5.1272 17.8911C5.00105 17.5866 4.96804 17.2515 5.03235 16.9282C5.09666 16.6049 5.2554 16.3079 5.48848 16.0748C5.72157 15.8417 6.01854 15.683 6.34185 15.6187C6.66515 15.5544 7.00026 15.5874 7.3048 15.7135C7.60935 15.8397 7.86964 16.0533 8.05278 16.3274C8.23591 16.6015 8.33366 16.9237 8.33366 17.2533C8.33366 17.6954 8.15807 18.1193 7.84551 18.4318C7.53295 18.7444 7.10902 18.92 6.667 18.92Z"
                fill="#4BA7A8"
              />
            </g>
            <defs>
              <clipPath id="clip0_397_150">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="mazda-cx-5-2020">Mazda CX 5 2020</div>
        </div>

        <div className="frame-64">
          <svg
            className="ph-hand-coins"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_373_3291)">
              <path
                d="M21.5934 13.2244C21.3144 13.0096 20.9895 12.8622 20.6442 12.7934C20.2988 12.7246 19.9422 12.7364 19.6022 12.8278L15.6797 13.7297C15.7709 13.3442 15.7738 12.943 15.6879 12.5563C15.6021 12.1695 15.4298 11.8072 15.1841 11.4965C14.9383 11.1858 14.6254 10.9347 14.2688 10.7622C13.9122 10.5896 13.5212 10.5 13.125 10.5H8.43188C8.03775 10.499 7.64733 10.5761 7.28319 10.7269C6.91904 10.8777 6.58838 11.0991 6.31031 11.3784L4.18969 13.5H1.5C1.10218 13.5 0.720644 13.658 0.43934 13.9393C0.158035 14.2206 0 14.6022 0 15L0 18.75C0 19.1478 0.158035 19.5294 0.43934 19.8107C0.720644 20.092 1.10218 20.25 1.5 20.25H11.25C11.3113 20.25 11.3724 20.2425 11.4319 20.2275L17.4319 18.7275C17.4701 18.7184 17.5075 18.7058 17.5434 18.69L21.1875 17.1394L21.2288 17.1206C21.579 16.9456 21.8789 16.6843 22.1002 16.3614C22.3215 16.0385 22.457 15.6645 22.4939 15.2747C22.5307 14.8849 22.4678 14.4922 22.3109 14.1335C22.154 13.7748 21.9084 13.4619 21.5972 13.2244H21.5934ZM1.5 15H3.75V18.75H1.5V15ZM20.5716 15.7697L17.0091 17.2866L11.1562 18.75H5.25V14.5603L7.37156 12.4397C7.51035 12.2998 7.67555 12.1889 7.85758 12.1134C8.03961 12.0379 8.23482 11.9994 8.43188 12H13.125C13.4234 12 13.7095 12.1185 13.9205 12.3295C14.1315 12.5405 14.25 12.8266 14.25 13.125C14.25 13.4234 14.1315 13.7095 13.9205 13.9205C13.7095 14.1315 13.4234 14.25 13.125 14.25H10.5C10.3011 14.25 10.1103 14.329 9.96967 14.4697C9.82902 14.6103 9.75 14.8011 9.75 15C9.75 15.1989 9.82902 15.3897 9.96967 15.5303C10.1103 15.671 10.3011 15.75 10.5 15.75H13.5C13.5565 15.7498 13.6127 15.7436 13.6678 15.7313L19.9491 14.2866L19.9781 14.2791C20.1699 14.2258 20.3745 14.2454 20.5527 14.334C20.7309 14.4226 20.87 14.5739 20.9433 14.7589C21.0167 14.9439 21.0189 15.1495 20.9498 15.3361C20.8806 15.5227 20.7449 15.6771 20.5687 15.7697H20.5716ZM15.375 9C15.5603 9.00021 15.7453 8.98516 15.9281 8.955C16.1338 9.56582 16.51 10.105 17.0124 10.5088C17.5147 10.9125 18.1222 11.164 18.763 11.2335C19.4037 11.3029 20.051 11.1875 20.6282 10.9008C21.2054 10.614 21.6884 10.168 22.0202 9.61547C22.352 9.06291 22.5186 8.42691 22.5004 7.78266C22.4821 7.1384 22.2798 6.51284 21.9173 5.97993C21.5548 5.44702 21.0473 5.02905 20.4548 4.77543C19.8623 4.52181 19.2096 4.44315 18.5737 4.54875C18.3757 3.96023 18.0192 3.43774 17.5434 3.03879C17.0676 2.63984 16.4909 2.37988 15.8769 2.28753C15.2629 2.19519 14.6353 2.27402 14.0631 2.51537C13.491 2.75672 12.9966 3.15122 12.6342 3.65547C12.2719 4.15971 12.0556 4.75414 12.0093 5.37335C11.963 5.99256 12.0885 6.61254 12.3718 7.16506C12.6552 7.71758 13.0854 8.18123 13.6153 8.50497C14.1452 8.82872 14.7541 9.00001 15.375 9ZM21 7.875C21 8.24584 20.89 8.60835 20.684 8.91669C20.478 9.22504 20.1851 9.46536 19.8425 9.60727C19.4999 9.74919 19.1229 9.78632 18.7592 9.71397C18.3955 9.64163 18.0614 9.46305 17.7992 9.20083C17.537 8.9386 17.3584 8.60451 17.286 8.24079C17.2137 7.87708 17.2508 7.50008 17.3927 7.15747C17.5346 6.81486 17.775 6.52202 18.0833 6.31599C18.3916 6.10997 18.7542 6 19.125 6C19.6223 6 20.0992 6.19754 20.4508 6.54917C20.8025 6.90081 21 7.37772 21 7.875ZM15.375 3.75C15.784 3.7502 16.1818 3.88416 16.5076 4.13145C16.8334 4.37874 17.0695 4.72578 17.1797 5.11969C16.7956 5.38996 16.4721 5.73744 16.2299 6.13989C15.9878 6.54234 15.8323 6.9909 15.7734 7.45688C15.6425 7.48515 15.509 7.4996 15.375 7.5C14.8777 7.5 14.4008 7.30246 14.0492 6.95083C13.6975 6.59919 13.5 6.12228 13.5 5.625C13.5 5.12772 13.6975 4.65081 14.0492 4.29917C14.4008 3.94754 14.8777 3.75 15.375 3.75Z"
                fill="#5D9B96"
              />
            </g>
            <defs>
              <clipPath id="clip0_373_3291">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="_15-eur">15 EUR</div>
        </div>
      </div>

      <div className="frame-59">
        <div className="frame-57">
          <div className="frame-56">
            <div className="_22-08-2023-09-00">
              22.08.2023
              <br />
              09:00
            </div>

            <div className="frame-13">
              <svg
                className="map-pin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="#4BA7A8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#4BA7A8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="schlo-stra-e-2-01067-dresden-germany">
                Schloßstraße 2, 01067 Dresden, Germany
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="line-3"
        height="60"
        viewBox="0 0 0 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L2.62268e-06 60"
          stroke="#C3C6C6"
          strokeLinecap="round"
          strokeDasharray="5 5"
        />
      </svg>

      <div className="frame-58">
        <div className="frame-56">
          <div className="_22-08-2023-11-10">
            22.08.2023
            <br />
            11:10
          </div>

          <div className="frame-13">
            <svg
              className="map-pin2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                stroke="#4BA7A8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#4BA7A8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="klingelh-ferstra-e-23-10785-berlin-germany">
              Klingelhöferstraße 23, 10785 Berlin, Germany
            </div>
          </div>
        </div>
      </div>

      <div className="lorem-ipsum-dolor-sit-amet-consectetur-aenean-nulla-gravida-vestibulum-at-dictum-ultricies">
        Lorem ipsum dolor sit amet consectetur. Aenean nulla gravida vestibulum
        at dictum ultricies.
      </div>

      <div className="people-s-interests-in-the-ride">
        People&#039;s interests in the ride
      </div>

      <div className="host-s-comment">Host&#039;s comment</div>

      <div className="frame-32">
        <div className="frame-31">
          <div className="solar-energy">solar energy</div>
        </div>

        <div className="frame-29">
          <div className="ecology">ecology</div>
        </div>

        <div className="frame-30">
          <div className="solar-energy">solar energy</div>
        </div>

        <div className="frame-322">
          <div className="environment">environment</div>
        </div>

        <div className="frame-33">
          <div className="wildlife-protection">wildlife protection</div>
        </div>

        <div className="frame-34">
          <div className="global-warming">global warming</div>
        </div>

        <div className="frame-35">
          <div className="wind-energy">wind energy</div>
        </div>

        <div className="frame-36">
          <div className="wildlife">wildlife</div>
        </div>

        <div className="frame-41">
          <div className="animals">animals</div>
        </div>

        <div className="frame-38">
          <div className="forests">forests</div>
        </div>

        <div className="frame-39">
          <div className="marine-conservation">marine conservation</div>
        </div>

        <div className="frame-40">
          <div className="air-polution">air polution</div>
        </div>
      </div>

      <div className="frame-332">
        <svg
          className="user-plus"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="#FDF3EB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
            stroke="#FDF3EB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 8V14"
            stroke="#FDF3EB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 11H17"
            stroke="#FDF3EB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="join-ride">Join ride</div>
      </div>

      <div className="frame-65">
        <div className="frame-60">
          <div className="frame-54">
            <img className="ellipse-4" src="src\assets\ellipse-12.png" />

            <div className="host">Host</div>

            <div className="oliver-bern">Oliver Bern</div>
          </div>
        </div>

        <div className="frame-61">
          <div className="frame-54">
            <img className="ellipse-42" src="src/assets/ellipse-13.png" />

            <div className="passenger">Passenger</div>

            <div className="kira-schneider">Kira Schneider</div>
          </div>
        </div>

        <div className="frame-62">
          <div className="frame-54">
            <img className="ellipse-42" src="src/assets/ellipse-14.png" />

            <div className="passenger">Passenger</div>

            <div className="ben-petterson">Ben Petterson</div>
          </div>
        </div>

        <div className="frame-63">
          <div className="frame-54">


       
        

            <div className="passenger">Passenger</div>

            <div className="seat-for-you">Seat for you</div>
          </div>
        </div>
      </div>

      <div className="frame-342">
        <svg
          className="message-circle"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
            stroke="#2D3536"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="message-a-host">Message a host</div>
      </div>

      <div className="frame-69">
        
        <div className="frame-70-1">
          <div className="this-host-also-offers-a-ride-back">
            This host also offers a ride back.
          </div>

          <div className="see-ride-details">See ride details</div>
        </div>
        
      </div>

      <div className="frame-97-1">


        <div className="frame-70">

            
          <div className="_5-km-away-from-the-venue">
            5 km away from the venue
          </div>
        </div>
      </div>

      <div className="frame-94">
        <div className="view-on-map">View on map</div>

        <svg
          className="chevron-left"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6L8 10L4 6"
            stroke="#467471"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

   

      <div className="event-details2">Event details</div>

      <div className="event-details2">Event details</div>

      <div className="meet-your-companions">Meet your companions</div>

      <div className="ride-details3">Ride details</div>

      <div className="frame-96">
        <div className="frame-75">
          <div className="frame-482">
            <svg
              className="calendar"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="#4BA7A8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="#4BA7A8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="#4BA7A8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="#4BA7A8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="_22-08-2023-at-14-00">22.08.2023 at 14:00</div>
          </div>

          <div className="frame-74">
            <div className="frame-73">
              <div className="frame-13">
                <svg
                  className="map-pin3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="#4BA7A8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#4BA7A8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="klingelh-ferstra-e-23-10785-berlin-germany">
                  Klingelhöferstraße 23, 10785 Berlin, Germany
                </div>
              </div>

              <div className="frame-72">
                <div className="view-on-map">View on map</div>

                <svg
                  className="chevron-left2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6L8 10L4 6"
                    stroke="#467471"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
          className="info"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16V12"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8H12.01"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="info-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16V12"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8H12.01"
            stroke="#ED8A37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
    </div>
    
    <Footer/>
    </div>

  );
};