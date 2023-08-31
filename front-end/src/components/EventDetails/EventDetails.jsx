import React from 'react';
import './EventDetails.css';
import Navbar from '../Navbar/Navbar'; // Adjust the path based on your file structure
import Agenda from '../Agenda/Agenda';
import OfferedRides from '../OfferedRides/OfferedRides';
import Footer from '../Footer/Footer';
const EventDetails = () => {
  return (
    <div id="EventDetailsWrapper">

      
      <div id ="navbar">
      <Navbar />
    </div>

<div id='homeeventslink'>
<a href="" target="_blank" rel="noopener noreferrer">Home /</a>
<a href="" target="_blank" rel="noopener noreferrer"> Event details </a>

</div>
<span id='ecologyformtitle'>ecology forum for climate change</span>
<span id='aboutevnttitle'>About event</span>


<p id='abouteventparagraph'>Lorem ipsum dolor sit amet consectetur. In integer ipsum nisi adipiscing. Ullamcorper vitae varius pellentesque risus 
convallis dui dictum augue tristique. 
Vel eu eget nunc vestibulum. Eget diam pellentesque ut et. Hendrerit consequat tortor non quam enim quis penatibus sollicitudin euismod. 
Pharetra interdum sapien viverra aliquet tempus. Est ultricies sed ultrices turpis tincidunt aliquet. Curabitur metus eleifend in amet at mi.
 Varius volutpat pharetra vestibulum fermentum.</p>






 <span id='when-and-where-title'>
 When and where?
 </span>

 <div id='when-and-where-container'>
     
    
    </div>

    <div id='date-and-time-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#4BA7A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V6" stroke="#4BA7A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 2V6" stroke="#4BA7A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10H21" stroke="#4BA7A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div id='date-and-time'>22.08.2023 at 14:00</div>
      <div id='location'>Klingelhöferstraße 23, 10785 Berlin, Germany</div>

        
    <div id='location-icon'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#4BA7A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4BA7A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>

            <div id='viw-on-map-link'>
        {/* Link inside the div */}
        <a href="https://www.example.com">View on map</a>
    </div>

    <span id='agenda-titlee'> Agenda</span>
    <div id='agenda-content'>
      <Agenda/>
    </div>

    <span id='conatcat-event-oraganizer-title'>conatct event organizer</span>
    <div>
      <div id='contact-event-organizer-link'>
        <a href="http://">stopclimatechange.org</a>
        {/* SVG arrow icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4.66602 11.3333L11.3327 4.66667" stroke="#5D9B96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.66602 4.66667H11.3327V11.3333" stroke="#5D9B96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
     <div id='contact-event-organizer-icons-linkedin'>
      {/* SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#ED8A37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 9H2V21H6V9Z" stroke="#ED8A37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#ED8A37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* Link */}
          <a href="http://"></a>
    </div>
    <div id='contact-event-organizer-icons-email'>
      {/* SVG icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#ED8A37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 6L12 13L2 6" stroke="#ED8A37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          {/* Link */}
          <a href="http://"></a>
    </div>

    <div id='contact-event-organizer-icons-facebook'>
      {/* SVG icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#ED8A37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          {/* Link */}
          <a href="http://"></a>
    </div>

    
    <div id='contact-event-organizer-icons-instagram'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#ED8A37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.9997 11.37C16.1231 12.2022 15.981 13.0522 15.5935 13.799C15.206 14.5458 14.5929 15.1514 13.8413 15.5297C13.0898 15.9079 12.2382 16.0396 11.4075 15.9059C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1902 8.22744 13.4229 8.09377 12.5922C7.96011 11.7615 8.09177 10.9099 8.47003 10.1584C8.84829 9.40685 9.45389 8.79374 10.2007 8.40624C10.9475 8.01874 11.7975 7.87658 12.6297 8C13.4786 8.12588 14.2646 8.52146 14.8714 9.1283C15.4782 9.73515 15.8738 10.5211 15.9997 11.37Z" stroke="#ED8A37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.5 6.5H17.51" stroke="#ED8A37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          {/* Link */}
          <a href="http://"></a>
    </div>


    <button className="offer-ride-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        flex-shrink= "0"

      >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_314_2806)">
    <path d="M10 11.3333H12V12.6666H10V11.3333Z" fill="#FDF3EB"/>
    <path d="M17.632 9.44662C16.4497 7.51182 14.8367 5.87603 12.9187 4.66662C12.0326 4.10504 11.0226 3.76891 9.9767 3.68757C8.93082 3.60622 7.88094 3.78213 6.9187 4.19995C6.07703 4.59695 5.34466 5.19286 4.78482 5.93622C4.22497 6.67958 3.85449 7.54805 3.70536 8.46662C3.65203 8.77995 3.61203 9.07995 3.57203 9.37328C2.94786 9.47445 2.37995 9.79412 1.96965 10.2752C1.55935 10.7564 1.33337 11.3676 1.33203 12V16.0866C1.33203 16.4402 1.47251 16.7794 1.72256 17.0294C1.9726 17.2795 2.31174 17.42 2.66536 17.42V12C2.66536 11.6463 2.80584 11.3072 3.05589 11.0571C3.30594 10.8071 3.64508 10.6666 3.9987 10.6666H16.4854C17.7702 10.6684 19.002 11.1796 19.9105 12.0881C20.8191 12.9967 21.3303 14.2284 21.332 15.5133V16H19.9987C19.7171 15.3134 19.1926 14.7545 18.5253 14.4299C17.8579 14.1054 17.0945 14.0379 16.3805 14.2404C15.6666 14.4429 15.0522 14.9011 14.6546 15.5277C14.257 16.1542 14.104 16.9053 14.2248 17.6375C14.3456 18.3696 14.7318 19.0317 15.3096 19.4973C15.8874 19.963 16.6165 20.1995 17.3576 20.1619C18.0987 20.1243 18.8 19.8151 19.3278 19.2934C19.8555 18.7717 20.1726 18.0739 20.2187 17.3333H21.332C21.6857 17.3333 22.0248 17.1928 22.2748 16.9428C22.5249 16.6927 22.6654 16.3536 22.6654 16V15.5133C22.6627 14.0746 22.1587 12.6818 21.24 11.5745C20.3214 10.4673 19.0455 9.71482 17.632 9.44662ZM7.33203 9.33328H4.6187C4.6187 9.12662 4.6787 8.91328 4.7187 8.66662C4.83388 7.93426 5.13446 7.24353 5.59187 6.66009C6.04928 6.07666 6.64832 5.61992 7.33203 5.33328V9.33328ZM8.66536 9.33328V5.05328C9.91 4.89166 11.1723 5.16483 12.2387 5.82662C13.6945 6.7334 14.951 7.9264 15.932 9.33328H8.66536ZM17.1987 18.92C16.8691 18.92 16.5468 18.8222 16.2727 18.6391C15.9987 18.4559 15.785 18.1956 15.6589 17.8911C15.5328 17.5865 15.4997 17.2514 15.5641 16.9281C15.6284 16.6048 15.7871 16.3079 16.0202 16.0748C16.2533 15.8417 16.5502 15.683 16.8735 15.6186C17.1968 15.5543 17.532 15.5873 17.8365 15.7135C18.141 15.8396 18.4013 16.0533 18.5845 16.3273C18.7676 16.6014 18.8654 16.9236 18.8654 17.2533C18.8654 17.6953 18.6898 18.1192 18.3772 18.4318C18.0646 18.7444 17.6407 18.92 17.1987 18.92Z" fill="#FDF3EB"/>
    <path d="M9.447 16C9.16543 15.3134 8.64094 14.7545 7.97358 14.43C7.30623 14.1054 6.54275 14.038 5.82883 14.2404C5.1149 14.4429 4.50052 14.9012 4.10291 15.5277C3.7053 16.1543 3.5523 16.9053 3.67311 17.6375C3.79392 18.3697 4.18008 19.0318 4.7579 19.4974C5.33572 19.963 6.06475 20.1996 6.80588 20.162C7.54701 20.1244 8.24834 19.8152 8.77606 19.2935C9.30378 18.7717 9.62093 18.074 9.667 17.3333H13.2003V17.1667C13.1871 16.7733 13.2321 16.3802 13.3337 16H9.447ZM6.667 18.92C6.33736 18.92 6.01513 18.8223 5.74105 18.6391C5.46696 18.456 5.25334 18.1957 5.1272 17.8911C5.00105 17.5866 4.96804 17.2515 5.03235 16.9282C5.09666 16.6049 5.2554 16.3079 5.48848 16.0748C5.72157 15.8417 6.01854 15.683 6.34185 15.6187C6.66515 15.5544 7.00026 15.5874 7.3048 15.7135C7.60935 15.8397 7.86964 16.0533 8.05278 16.3274C8.23591 16.6015 8.33366 16.9237 8.33366 17.2533C8.33366 17.6954 8.15807 18.1193 7.84551 18.4318C7.53295 18.7444 7.10902 18.92 6.667 18.92Z" fill="#FDF3EB"/>
  </g>
  <defs>
    <clipPath id="clip0_314_2806">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>      </svg>
<div id='offer-ride-button-txt'>
      Offer ride </div>
    
    </button>

    
    <button className="join-waitlist-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        flex-shrink= "0"

      >
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#2D3536" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.5 6V12L16.5 14" stroke="#2D3536" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>     </svg>
<div id='join-waitlist-button-txt'>
      join waiting list </div>
    
    </button>
     
     <span id='offer-rides-title'>
     offered Rides
     </span>
  
<div id='rides-to-the-event-link'>
Rides to the event
</div>

<div id='rides-from-the-event-link'>
Rides from the event
</div>



<div id="id100">
<OfferedRides/>
</div>

<div className="frame-97">
      <div className="load-more">Load more</div>
    </div>








<div id='footer'>
<Footer/>
</div>
    </div>
  );

}

export default EventDetails;