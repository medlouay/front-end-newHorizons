import React from 'react'
import './Agenda.css'

const Agenda = () => {
  return (
<div agenda>
  


<div id="agenda" className="flex flex-col justify-between w-full h-64">
<div id="agenda-title" className="text-xl font-['Now'] font-medium leading-[26px] uppercase text-[#2d3536] w-full">
  Agenda
</div>
  <div className="self-start flex flex-row justify-between w-3/5 items-center">
    <div className="whitespace-nowrap text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-12 shrink-0">
      14:00{" "}
    </div>
    <div className="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-3 shrink-0">
      –
    </div>
    <div className="whitespace-nowrap text-xl font-['Now'] leading-[26px] text-[#2d3536] w-64">
      Lorem ipsum dolor sit amet
    </div>
  </div>
  <div className="flex flex-row justify-between items-start">
    <div className="whitespace-nowrap text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-12 shrink-0">
      15:00{" "}
    </div>
    <div className="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-3 shrink-0">
      –
    </div>
    <div className="text-xl font-['Now'] leading-[26px] text-[#2d3536] self-center w-[522px]">
      Lorem ipsum dolor sit amet consectetur. In integer ipsum nisi adipiscing.
      Ullamcorper vitae varius pellentesque risus convallis dui dictum augue
      tristique
    </div>
  </div>
  <div className="flex flex-row justify-between mr-6 items-center">
    <div className="whitespace-nowrap text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-12 shrink-0">
      15:30{" "}
    </div>
    <div className="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-3 shrink-0">
      –
    </div>
    <div className="text-xl font-['Now'] leading-[26px] text-[#2d3536] w-[495px]">
      Lorem ipsum dolor sit amet consectetur
    </div>
  </div>
  <div className="flex flex-row justify-between mr-6 items-center">
    <div className="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-12 shrink-0">
      16:00
    </div>
    <div className="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-3 shrink-0">
      –
    </div>
    <div className="text-xl font-['Now'] leading-[26px] text-[#2d3536] w-[495px]">
      Lorem ipsum dolor sit amet consectetur
    </div>
  </div>
  <div className="flex flex-row justify-between mr-8 items-center">
    <div className="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-12 shrink-0">
      17:30
    </div>
    <div className="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-3 shrink-0">
      –
    </div>
    <div className="text-xl font-['Now'] leading-[26px] text-[#2d3536] w-[495px]">
      Lorem ipsum dolor sit amet consectetur
    </div>
  </div>
</div>

        </div>
  )
}

export default Agenda