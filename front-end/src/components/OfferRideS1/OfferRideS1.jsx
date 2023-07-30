import React from 'react'
import './OfferRideS1.css'

const OfferRideS1 = () => {
  return (

    <div id="container">
<div className="overflow-hidden bg-[#fffefe] flex flex-row justify-between w-full items-center pt-8 px-12 rounded-lg">
  <div className="flex flex-col gap-2 w-2/3 h-[350px] items-start mt-5 mb-12">
    <div id="offer-ride-title" className="whitespace-nowrap text-xl font-['Now'] font-medium leading-[26px] uppercase text-[#2d3536] mb-8 w-[115px]">
      Offer ride
    </div>
    <div id="step1" className="whitespace-nowrap font-['Now'] font-medium leading-[20.8px] uppercase text-[#5d9b96] w-24 mb-8 ml-px">
      Step 1 of 4
    </div>
    <div id="select-event" className="whitespace-nowrap font-['Now'] font-medium leading-[20.8px] text-[#2d3536] w-32">
      Select an event
    </div>
    <div id="placeholder" className="border-solid border-[#5d9b96] overflow-hidden self-stretch flex flex-row justify-between h-16 shrink-0 items-center mb-5 mr-16 px-5 border rounded-lg">
    <div id ="searchbar">
  <input type="text" id="searchInput" placeholder="Search..." />
</div>
<div>



<div id="picker"  className="self-stretch flex flex-row justify-between mb-8 items-center">

  <label>
    <input type="radio" name="option" value="option1" /> To the event

  </label>
  <label >
    <input type="radio" name="option" value="option2" /> From the event
  </label>
  <label>
    <input type="radio" name="option" value="option3" />   Return ride
  </label>
</div>
     
    </div>
 
  
    </div>
    <div id="nxt-button" >
      <div >
        Next 
      </div>
    </div>
  </div>
 
</div>





</div>

    ) 
}

  export default OfferRideS1