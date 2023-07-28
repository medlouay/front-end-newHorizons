import React from 'react'
import './Event.css'
import Navbar from "../Navbar/Navbar"
import Agenda  from '../Agenda/Agenda'

const Event = () => {
  return (

    
    <div >
<Navbar/>

  <div classname="overflow-hidden bg-[#fff9f4] flex flex-col gap-3 w-full h-[4674px] items-start py-10">

    <div id ="text1">
      Ecology forum for cliMate change
    </div>
    <div classname="flex flex-row justify-between w-3/5 items-center mb-2 ml-32">
      <div id = "txt2">
        About event
      </div>
      <div id = "txt3">
        When and where?
      </div>
    </div>
    <div id ="about-event-txt">
      <div classname="font-['Now'] leading-[25.6px] text-[#2d3536] w-1/2">
        Lorem ipsum dolor sit amet consectetur. In integer ipsum nisi
        adipiscing. Ullamcorper vitae varius pellentesque risus convallis dui
        dictum augue tristique. Vel eu eget nunc vestibulum. Eget diam
        pellentesque ut et. Hendrerit consequat tortor non quam enim quis
        penatibus sollicitudin euismod. Pharetra interdum sapien viverra aliquet
        tempus. Est ultricies sed ultrices turpis tincidunt aliquet. Curabitur
        metus eleifend in amet at mi. Varius volutpat pharetra vestibulum
        fermentum.
      </div>
      <div agenda>
        <Agenda/>
      </div>
      <div id="f72">
        <div classname="flex flex-row gap-2 w-1/2 items-center">
          <img
            src="https://file.rendit.io/n/MqPDOQpfXnRd7TPC9I0Z.svg"
            classname="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-40">
            22.08.2023 at 14:00
          </div>
        </div>
        <div classname="flex flex-row mr-10 gap-1 items-start">
          <img
            src="https://file.rendit.io/n/yg7Kn2fyB2tcFuESpL50.svg"
            classname="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div classname="flex flex-col mt-px gap-2 w-[352px]">
            <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536]">
              Klingelhöferstraße 23, 10785 Berlin, Germany
            </div>
            <div classname="flex flex-row ml-px items-center">
              <div classname="whitespace-nowrap text-sm font-['Now'] underline leading-[18.2px] text-[#467471] w-24">
                View on map
              </div>
              <img
                src="https://file.rendit.io/n/yrMBMRuYcGpHpft2Dl9O.svg"
                classname="min-h-0 min-w-0 w-4 shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div classname="">
     
      <div classname="whitespace-nowrap text-xl font-['Now'] font-medium leading-[26px] uppercase text-[#2d3536] w-[297px] shrink-0">
        Contact event organizer
      </div>
    </div>
    <div classname="flex flex-row justify-between ml-32 w-3/5 items-start">
    
      <div classname="flex flex-row items-center">
        <div classname="text-sm font-['Now'] underline leading-[18.2px] text-[#467471] w-40">
          stopclimatechange.org
        </div>
        <img
          src="https://file.rendit.io/n/k4SSGxYmRCY34y7Lu54A.svg"
          classname="min-h-0 min-w-0 w-4 shrink-0"
        />
      </div>
    </div>
    <div classname="relative flex flex-col justify-end pt-16">
      <div classname="w-[522px] text-xl font-['Now'] leading-[26px] text-[#2d3536] absolute top-2 left-[208px] h-20">
        Lorem ipsum dolor sit amet consectetur. In integer ipsum nisi
        adipiscing. Ullamcorper vitae varius pellentesque risus convallis dui
        dictum augue tristique
      </div>
      <div classname="w-3/5 h-8 absolute top-0 left-32 flex flex-row justify-between items-start">
        <div classname="flex flex-row mt-2 gap-1 w-20 shrink-0 items-center">
          <div classname="whitespace-nowrap text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-12">
            15:00{"{"}" "{"}"}
          </div>
          <div classname="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-3 shrink-0">
            –
          </div>
        </div>
        <div classname="flex flex-row justify-between gap-5 items-center">
          <img
            src="https://file.rendit.io/n/dO9aMuaulKjDaZffMWml.svg"
            classname="min-h-0 min-w-0 w-6 shrink-0"
          />
          <img
            src="https://file.rendit.io/n/QsRstaXVGH7Oq89eojKa.svg"
            classname="min-h-0 min-w-0 w-6 shrink-0"
          />
          <img
            src="https://file.rendit.io/n/rVIh7xCym0RZ3fdStHgE.svg"
            classname="min-h-0 min-w-0 w-6 shrink-0"
          />
          <img
            src="https://file.rendit.io/n/ERFRGrZJnhdvHsQGcNgG.svg"
            classname="min-h-0 min-w-0 w-6 shrink-0"
          />
        </div>
      </div>
      <div classname="relative flex flex-col justify-end items-start pt-[1269px] px-32">
        <div classname="w-[1440px] h-[1863px] bg-[url(https://file.rendit.io/n/IZ87ThrK0VA6gzzht9kI.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0 flex flex-col gap-5 px-32 py-8">
          <div classname="flex flex-row justify-between gap-1 items-center">
            <div classname="whitespace-nowrap text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-12 shrink-0">
              15:30{"{"}" "{"}"}
            </div>
            <div classname="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-3 shrink-0">
              –
            </div>
            <div classname="text-xl font-['Now'] leading-[26px] text-[#2d3536] w-[495px]">
              Lorem ipsum dolor sit amet consectetur
            </div>
          </div>
          <div classname="flex flex-row justify-between gap-1 items-center">
            <div classname="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-12 shrink-0">
              16:00
            </div>
            <div classname="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-3 shrink-0">
              –
            </div>
            <div classname="text-xl font-['Now'] leading-[26px] text-[#2d3536] w-[495px]">
              Lorem ipsum dolor sit amet consectetur
            </div>
          </div>
          <div classname="flex flex-row justify-between mb-[114px] gap-1 items-center">
            <div classname="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-12 shrink-0">
              17:30
            </div>
            <div classname="text-xl font-['Now'] font-medium leading-[26px] text-[#2d3536] w-3 shrink-0">
              –
            </div>
            <div classname="text-xl font-['Now'] leading-[26px] text-[#2d3536] w-[495px]">
              Lorem ipsum dolor sit amet consectetur
            </div>
          </div>
          <div classname="text-xl font-['Now'] font-medium leading-[26px] uppercase text-[#2d3536] w-[517px] mb-5 ml-2">
            offered Rides to the event
          </div>
          <div classname="flex flex-row mb-12 gap-5 items-center">
            <div classname="border-solid border-[#5d9b96] bg-[#5d9b96] flex flex-row justify-center gap-2 w-56 shrink-0 h-10 items-center border rounded-lg">
              <img
                src="https://file.rendit.io/n/AD81PWqFsUSyh4uHDpWm.svg"
                classname="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#fdf3eb] w-20 shrink-0">
                Offer ride
              </div>
            </div>
            <div classname="border-solid border-[#5d9b96] flex flex-row justify-center gap-2 w-56 shrink-0 h-10 items-center border rounded-lg">
              <img
                src="https://file.rendit.io/n/wg4jcMA6rRd2rfnrkAkY.svg"
                classname="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-1/2">
                Join waiting list
              </div>
            </div>
          </div>
          <div classname="flex flex-row mb-10 gap-5 items-center">
            <div classname="shadow-[0px_4px_8px_0px_#f2e8e0] overflow-hidden bg-[#fffefe] flex flex-col gap-1 w-1/2 h-[686px] items-start p-8 rounded-lg">
              <div classname="flex flex-row mr-20 gap-2 items-start">
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-20 shrink-0">
                  22.08.2023
                  <br />
                  09:00{"{"}" "{"}"}
                </div>
                <div classname="flex flex-col gap-1 w-[352px]">
                  <div classname="flex flex-row gap-1 items-center">
                    <img
                      src="https://file.rendit.io/n/yg7Kn2fyB2tcFuESpL50.svg"
                      classname="min-h-0 min-w-0 w-6 shrink-0"
                    />
                    <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-[323px]">
                      Schloßstraße 2, 01067 Dresden, Germany
                    </div>
                  </div>
                  <img
                    src="https://file.rendit.io/n/IeEsxzTHHSNy0P4OcWHU.svg"
                    classname="min-h-0 min-w-0 ml-3 w-px"
                  />
                </div>
              </div>
              <div classname="flex flex-row gap-2 items-start mb-5 mr-12">
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-20 shrink-0">
                  22.08.2023
                  <br />
                  11:10{"{"}" "{"}"}
                </div>
                <div classname="flex flex-row gap-1 w-[381px] items-center">
                  <img
                    src="https://file.rendit.io/n/yg7Kn2fyB2tcFuESpL50.svg"
                    classname="min-h-0 min-w-0 w-6 shrink-0"
                  />
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-[352px]">
                    Klingelhöferstraße 23, 10785 Berlin, Germany
                  </div>
                </div>
              </div>
              <div classname="flex flex-row gap-16 items-center mb-px mr-4">
                <img
                  src="https://file.rendit.io/n/845QmoQ2q94gMQcqJ18W.png"
                  classname="min-h-0 min-w-0 mr-px w-20 shrink-0"
                />
                <img
                  src="https://file.rendit.io/n/1jj0hEWYsb1VHWuzHauP.png"
                  classname="min-h-0 min-w-0 mr-2 w-20 shrink-0"
                />
                <img
                  src="https://file.rendit.io/n/RNI34iQejMibOl0JthhH.png"
                  classname="min-h-0 min-w-0 w-20 shrink-0"
                />
                <img
                  src="https://file.rendit.io/n/2LFjQxjJBlg1kGx20heD.svg"
                  classname="min-h-0 min-w-0 w-20 shrink-0"
                />
              </div>
              <div classname="flex flex-row gap-16 items-center mb-px ml-6 mr-5">
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] mr-5 w-8 shrink-0">
                  Host
                </div>
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] mr-2 w-16 shrink-0">
                  Passenger
                </div>
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-16 shrink-0">
                  Passenger
                </div>
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-16 shrink-0">
                  Passenger
                </div>
              </div>
              <div classname="flex flex-row gap-12 items-center mb-10 ml-px mr-3">
                <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] mr-px w-20 shrink-0">
                  Oliver Bern
                </div>
                <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] w-24 shrink-0">
                  Kira Schneider
                </div>
                <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] w-24 shrink-0">
                  Ben Petterson
                </div>
                <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#ed8a37] w-20 shrink-0">
                  Seat for you
                </div>
              </div>
              <div classname="flex flex-row mb-10 gap-8 w-1/2 items-center">
                <div classname="flex flex-row gap-2 w-3/5 items-center">
                  <img
                    src="https://file.rendit.io/n/yVocjaiIkN3GBK3ctkle.svg"
                    classname="min-h-0 min-w-0 w-6 shrink-0"
                  />
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-32">
                    1 seat available
                  </div>
                </div>
                <div classname="flex flex-row gap-2 w-20 shrink-0 items-center">
                  <img
                    src="https://file.rendit.io/n/W8TGBiAmETGKunR7Z7XR.svg"
                    classname="min-h-0 min-w-0 w-6 shrink-0"
                  />
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-3/5">
                    15 EUR
                  </div>
                </div>
              </div>
              <div classname="whitespace-nowrap font-['Now'] font-medium leading-[20.8px] text-[#2d3536] w-56 mb-2 ml-px">
                People's interests in the ride
              </div>
              <div classname="flex flex-row justify-between items-center mb-px ml-px mr-2">
                <div classname="bg-[#eff5f5] flex flex-col justify-center h-10 px-2 rounded-lg">
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px]">
                    solar energy
                  </div>
                </div>
                <div classname="bg-[#eff5f5] flex flex-col justify-center w-20 shrink-0 h-10 px-2 rounded-lg">
                  <div classname="font-['Now'] leading-[20.8px]">ecology</div>
                </div>
                <div classname="bg-[#eff5f5] flex flex-col justify-center h-10 px-2 rounded-lg">
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px]">
                    solar energy
                  </div>
                </div>
                <div classname="bg-[#eff5f5] flex flex-col justify-center h-10 px-2 rounded-lg">
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px]">
                    wildlife protection
                  </div>
                </div>
              </div>
              <div classname="whitespace-nowrap text-sm font-['Now'] underline leading-[18.2px] text-[#467471] w-20 mb-10 ml-px">
                See 3 more
              </div>
              <div classname="flex flex-row mb-10 gap-2 w-2/3 items-center">
                <img
                  src="https://file.rendit.io/n/B0vUd1yAblfWKEiCpjj8.svg"
                  classname="min-h-0 min-w-0 w-6 shrink-0"
                />
                <div classname="flex flex-row gap-1 w-[331px] items-center">
                  <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] w-56">
                    This host also offers a ride back.
                  </div>
                  <div classname="whitespace-nowrap text-sm font-['Now'] underline leading-[18.2px] text-[#467471] w-[108px] shrink-0">
                    See ride details
                  </div>
                </div>
              </div>
              <div classname="flex flex-row gap-16 items-center">
                <div classname="border-solid border-[#5d9b96] flex flex-row justify-center gap-2 w-2/5 h-10 items-center border rounded-lg">
                  <img
                    src="https://file.rendit.io/n/xvonfy8M6kXMJsTVBRRD.svg"
                    classname="min-h-0 min-w-0 w-6 shrink-0"
                  />
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-1/2">
                    Message a host
                    {"{"}" "{"}"}
                  </div>
                </div>
                <div classname="border-solid border-[#5d9b96] bg-[#5d9b96] flex flex-row justify-center gap-2 w-2/5 h-10 items-center border rounded-lg">
                  <img
                    src="https://file.rendit.io/n/ZMa3NNSBKwyEUYL7eqOw.svg"
                    classname="min-h-0 min-w-0 w-6 shrink-0"
                  />
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#fdf3eb] w-16 shrink-0">
                    Join ride
                  </div>
                </div>
              </div>
            </div>
            <div classname="shadow-[0px_4px_8px_0px_#f2e8e0] overflow-hidden bg-[#fffefe] flex flex-col gap-1 w-1/2 h-[686px] items-start p-8 rounded-lg">
              <div classname="flex flex-row mr-20 gap-2 items-start">
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-20 shrink-0">
                  22.08.2023
                  <br />
                  09:00{"{"}" "{"}"}
                </div>
                <div classname="flex flex-col gap-1 w-[352px]">
                  <div classname="flex flex-row gap-1 items-center">
                    <img
                      src="https://file.rendit.io/n/yg7Kn2fyB2tcFuESpL50.svg"
                      classname="min-h-0 min-w-0 w-6 shrink-0"
                    />
                    <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-[323px]">
                      Schloßstraße 2, 01067 Dresden, Germany
                    </div>
                  </div>
                  <img
                    src="https://file.rendit.io/n/IeEsxzTHHSNy0P4OcWHU.svg"
                    classname="min-h-0 min-w-0 ml-3 w-px"
                  />
                </div>
              </div>
              <div classname="flex flex-row gap-2 items-start mb-5 mr-12">
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-20 shrink-0">
                  22.08.2023
                  <br />
                  11:10{"{"}" "{"}"}
                </div>
                <div classname="flex flex-row gap-1 w-[381px] items-center">
                  <img
                    src="https://file.rendit.io/n/yg7Kn2fyB2tcFuESpL50.svg"
                    classname="min-h-0 min-w-0 w-6 shrink-0"
                  />
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-[352px]">
                    Klingelhöferstraße 23, 10785 Berlin, Germany
                  </div>
                </div>
              </div>
              <div classname="flex flex-row gap-16 items-center mb-px mr-4">
                <img
                  src="https://file.rendit.io/n/845QmoQ2q94gMQcqJ18W.png"
                  classname="min-h-0 min-w-0 mr-px w-20 shrink-0"
                />
                <img
                  src="https://file.rendit.io/n/1jj0hEWYsb1VHWuzHauP.png"
                  classname="min-h-0 min-w-0 mr-2 w-20 shrink-0"
                />
                <img
                  src="https://file.rendit.io/n/RNI34iQejMibOl0JthhH.png"
                  classname="min-h-0 min-w-0 w-20 shrink-0"
                />
                <img
                  src="https://file.rendit.io/n/2LFjQxjJBlg1kGx20heD.svg"
                  classname="min-h-0 min-w-0 w-20 shrink-0"
                />
              </div>
              <div classname="flex flex-row gap-16 items-center mb-px ml-6 mr-5">
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] mr-5 w-8 shrink-0">
                  Host
                </div>
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] mr-2 w-16 shrink-0">
                  Passenger
                </div>
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-16 shrink-0">
                  Passenger
                </div>
                <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-16 shrink-0">
                  Passenger
                </div>
              </div>
              <div classname="flex flex-row gap-12 items-center mb-10 ml-px mr-3">
                <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] mr-px w-20 shrink-0">
                  Oliver Bern
                </div>
                <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] w-24 shrink-0">
                  Kira Schneider
                </div>
                <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] w-24 shrink-0">
                  Ben Petterson
                </div>
                <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#ed8a37] w-20 shrink-0">
                  Seat for you
                </div>
              </div>
              <div classname="flex flex-row mb-10 gap-8 w-1/2 items-center">
                <div classname="flex flex-row gap-2 w-3/5 items-center">
                  <img
                    src="https://file.rendit.io/n/yVocjaiIkN3GBK3ctkle.svg"
                    classname="min-h-0 min-w-0 w-6 shrink-0"
                  />
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-32">
                    1 seat available
                  </div>
                </div>
                <div classname="flex flex-row gap-2 w-20 shrink-0 items-center">
                  <img
                    src="https://file.rendit.io/n/Lh4shno1zAgpfP9KnHlP.svg"
                    classname="min-h-0 min-w-0 w-6 shrink-0"
                  />
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-3/5">
                    15 EUR
                  </div>
                </div>
              </div>
              <div classname="whitespace-nowrap font-['Now'] font-medium leading-[20.8px] text-[#2d3536] w-56 mb-2 ml-px">
                People's interests in the ride
              </div>
              <div classname="flex flex-row justify-between items-center mb-px ml-px mr-2">
                <div classname="bg-[#eff5f5] flex flex-col justify-center h-10 px-2 rounded-lg">
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px]">
                    solar energy
                  </div>
                </div>
                <div classname="bg-[#eff5f5] flex flex-col justify-center w-20 shrink-0 h-10 px-2 rounded-lg">
                  <div classname="font-['Now'] leading-[20.8px]">ecology</div>
                </div>
                <div classname="bg-[#eff5f5] flex flex-col justify-center h-10 px-2 rounded-lg">
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px]">
                    solar energy
                  </div>
                </div>
                <div classname="bg-[#eff5f5] flex flex-col justify-center h-10 px-2 rounded-lg">
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px]">
                    wildlife protection
                  </div>
                </div>
              </div>
              <div classname="whitespace-nowrap text-sm font-['Now'] underline leading-[18.2px] text-[#467471] w-20 mb-10 ml-px">
                See 3 more
              </div>
              <div classname="flex flex-row mb-10 gap-2 w-2/3 items-center">
                <img
                  src="https://file.rendit.io/n/B0vUd1yAblfWKEiCpjj8.svg"
                  classname="min-h-0 min-w-0 w-6 shrink-0"
                />
                <div classname="flex flex-row gap-1 w-[331px] items-center">
                  <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] w-56">
                    This host also offers a ride back.
                  </div>
                  <div classname="whitespace-nowrap text-sm font-['Now'] underline leading-[18.2px] text-[#467471] w-[108px] shrink-0">
                    See ride details
                  </div>
                </div>
              </div>
              <div classname="flex flex-row gap-16 items-center">
                <div classname="border-solid border-[#5d9b96] flex flex-row justify-center gap-2 w-2/5 h-10 items-center border rounded-lg">
                  <img
                    src="https://file.rendit.io/n/xvonfy8M6kXMJsTVBRRD.svg"
                    classname="min-h-0 min-w-0 w-6 shrink-0"
                  />
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-1/2">
                    Message a host
                    {"{"}" "{"}"}
                  </div>
                </div>
                <div classname="border-solid border-[#5d9b96] bg-[#5d9b96] flex flex-row justify-center gap-2 w-2/5 h-10 items-center border rounded-lg">
                  <img
                    src="https://file.rendit.io/n/ZMa3NNSBKwyEUYL7eqOw.svg"
                    classname="min-h-0 min-w-0 w-6 shrink-0"
                  />
                  <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#fdf3eb] w-16 shrink-0">
                    Join ride
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div classname="text-xl font-['Now'] font-medium leading-[26px] uppercase text-[#2d3536] ml-2 w-[517px]">
            offered Rides from the event
          </div>
        </div>
        <div classname="shadow-[0px_4px_8px_0px_#f2e8e0] overflow-hidden bg-[#fffefe] relative flex flex-col gap-1 w-1/2 h-[686px] shrink-0 items-start p-8 rounded-lg">
          <div classname="flex flex-row mr-20 gap-2 items-start">
            <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-20 shrink-0">
              22.08.2023
              <br />
              09:00{"{"}" "{"}"}
            </div>
            <div classname="flex flex-col gap-1 w-[352px]">
              <div classname="flex flex-row gap-1 items-center">
                <img
                  src="https://file.rendit.io/n/yg7Kn2fyB2tcFuESpL50.svg"
                  classname="min-h-0 min-w-0 w-6 shrink-0"
                />
                <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-[323px]">
                  Schloßstraße 2, 01067 Dresden, Germany
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/IeEsxzTHHSNy0P4OcWHU.svg"
                classname="min-h-0 min-w-0 ml-3 w-px"
              />
            </div>
          </div>
          <div classname="flex flex-row gap-2 items-start mb-5 mr-12">
            <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-20 shrink-0">
              22.08.2023
              <br />
              11:10{"{"}" "{"}"}
            </div>
            <div classname="flex flex-row gap-1 w-[381px] items-center">
              <img
                src="https://file.rendit.io/n/yg7Kn2fyB2tcFuESpL50.svg"
                classname="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-[352px]">
                Klingelhöferstraße 23, 10785 Berlin, Germany
              </div>
            </div>
          </div>
          <div classname="flex flex-row gap-16 items-center mb-px mr-4">
            <img
              src="https://file.rendit.io/n/845QmoQ2q94gMQcqJ18W.png"
              classname="min-h-0 min-w-0 mr-px w-20 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/1jj0hEWYsb1VHWuzHauP.png"
              classname="min-h-0 min-w-0 mr-2 w-20 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/RNI34iQejMibOl0JthhH.png"
              classname="min-h-0 min-w-0 w-20 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/AkEcyrT8xRiZBE0BUIow.svg"
              classname="min-h-0 min-w-0 w-20 shrink-0"
            />
          </div>
          <div classname="flex flex-row gap-16 items-center mb-px ml-6 mr-5">
            <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] mr-5 w-8 shrink-0">
              Host
            </div>
            <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] mr-2 w-16 shrink-0">
              Passenger
            </div>
            <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-16 shrink-0">
              Passenger
            </div>
            <div classname="text-sm font-['Now'] font-medium leading-[18.2px] text-[#2d3536] w-16 shrink-0">
              Passenger
            </div>
          </div>
          <div classname="flex flex-row gap-12 items-center mb-10 ml-px mr-3">
            <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] mr-px w-20 shrink-0">
              Oliver Bern
            </div>
            <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] w-24 shrink-0">
              Kira Schneider
            </div>
            <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] w-24 shrink-0">
              Ben Petterson
            </div>
            <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#ed8a37] w-20 shrink-0">
              Seat for you
            </div>
          </div>
          <div classname="flex flex-row mb-10 gap-8 w-1/2 items-center">
            <div classname="flex flex-row gap-2 w-3/5 items-center">
              <img
                src="https://file.rendit.io/n/iLBLRoqI22QyiNWQrqWx.svg"
                classname="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-32">
                1 seat available
              </div>
            </div>
            <div classname="flex flex-row gap-2 w-20 shrink-0 items-center">
              <img
                src="https://file.rendit.io/n/P97pzuXBWL9XLNoNX15M.svg"
                classname="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-3/5">
                15 EUR
              </div>
            </div>
          </div>
          <div classname="whitespace-nowrap font-['Now'] font-medium leading-[20.8px] text-[#2d3536] w-56 mb-2 ml-px">
            People's interests in the ride
          </div>
          <div classname="flex flex-row justify-between items-center mb-px ml-px mr-2">
            <div classname="bg-[#eff5f5] flex flex-col justify-center h-10 px-2 rounded-lg">
              <div classname="whitespace-nowrap font-['Now'] leading-[20.8px]">
                solar energy
              </div>
            </div>
            <div classname="bg-[#eff5f5] flex flex-col justify-center w-20 shrink-0 h-10 px-2 rounded-lg">
              <div classname="font-['Now'] leading-[20.8px]">ecology</div>
            </div>
            <div classname="bg-[#eff5f5] flex flex-col justify-center h-10 px-2 rounded-lg">
              <div classname="whitespace-nowrap font-['Now'] leading-[20.8px]">
                solar energy
              </div>
            </div>
            <div classname="bg-[#eff5f5] flex flex-col justify-center h-10 px-2 rounded-lg">
              <div classname="whitespace-nowrap font-['Now'] leading-[20.8px]">
                wildlife protection
              </div>
            </div>
          </div>
          <div classname="whitespace-nowrap text-sm font-['Now'] underline leading-[18.2px] text-[#467471] w-20 mb-10 ml-px">
            See 3 more
          </div>
          <div classname="flex flex-row mb-10 gap-2 w-2/3 items-center">
            <img
              src="https://file.rendit.io/n/B0vUd1yAblfWKEiCpjj8.svg"
              classname="min-h-0 min-w-0 w-6 shrink-0"
            />
            <div classname="flex flex-row gap-1 w-[331px] items-center">
              <div classname="whitespace-nowrap text-sm font-['Now'] leading-[18.2px] text-[#2d3536] w-56">
                This host also offers a ride back.
              </div>
              <div classname="whitespace-nowrap text-sm font-['Now'] underline leading-[18.2px] text-[#467471] w-[108px] shrink-0">
                See ride details
              </div>
            </div>
          </div>
          <div classname="flex flex-row gap-16 items-center">
            <div classname="border-solid border-[#5d9b96] flex flex-row justify-center gap-2 w-2/5 h-10 items-center border rounded-lg">
              <img
                src="https://file.rendit.io/n/xvonfy8M6kXMJsTVBRRD.svg"
                classname="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#2d3536] w-1/2">
                Message a host
                {"{"}" "{"}"}
              </div>
            </div>
            <div classname="border-solid border-[#5d9b96] bg-[#5d9b96] flex flex-row justify-center gap-2 w-2/5 h-10 items-center border rounded-lg">
              <img
                src="https://file.rendit.io/n/ZMa3NNSBKwyEUYL7eqOw.svg"
                classname="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div classname="whitespace-nowrap font-['Now'] leading-[20.8px] text-[#fdf3eb] w-16 shrink-0">
                Join ride
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );

  
}

export default Event