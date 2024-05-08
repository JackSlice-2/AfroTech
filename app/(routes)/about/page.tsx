"use client";

import Navbar from "@/app/components/Navbar";
import { AboutText, qAInfo, StepsInfo } from "@/app/data/textData/MainText";
import Image from "next/image";
import EmployeCards from "@/app/components/EmployeCards";
import { Employees } from "@/app/data/textData/ComponentText";
import BlueBox from "@/app/components/BlueBox";

const App: React.FC = (props) => {
  return (
      <div
        className="h-screen overflow-y-auto overflow-x-hidden
       text-gray-300 w-max-full "
        style={{
background: 'linear-gradient(160deg, #080018 15%, #2A0159 100%, #3C037F)',
          WebkitOverflowScrolling: 'touch', // For smooth scrolling on iOS
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For Internet Explorer
          overflow: '-webkit-paged-x',
        }}>
        {/* For webkit-based browsers (Chrome and Safari) */}
        <style>
          {`::-webkit-scrollbar {
              width: 0px;
              height: 0px;
            }
          `}
        </style>
        <div className=" flex flex-col justify-center items-center px-5">
      <Navbar />
      <div className="h-full w-full md:flex-row lg:flex-row xl:flex">
        <div className="flex flex-col justify-center flex-1 w-full md:p-10 lg:pl-20 xl:pl-20 gap-2">
          <div className='text-center text-6xl md:text-8xl text-medium lg:text-start xl:text-start'>
                <h1>{AboutText.title}</h1>
                <h1>{AboutText.subtitle}</h1>
                <h1>{AboutText.subSubtitle}</h1>
              </div>
              <div className='flex gap-2 py-1 items-center justify-center lg:justify-start xl:justify-start'>
                <Image src="/img/line.png" alt="line" width={35} height={5} />
                <p className='text-pink-400'>{AboutText.pink}</p>
                <Image src="/img/line.png" alt="line" width={35} height={5} />
              </div>
              <div className='flex gap-2 py-1 items-center justify-center lg:justify-start xl:justify-start'>
                <Image src="/img/line.png" alt="line" width={35} height={5} />
                <p className='text-pink-400'>{AboutText.pink2}</p>
                <Image src="/img/line.png" alt="line" width={35} height={5} />
              </div>
              <div className='text-xl color-gray-200'>
              {AboutText.description}
              </div>
          </div>
        
    <div className='gap-1 grid lg:flex xl:flex justify-center lg:mr-40 xl:mr-32 pt-32 grid-row-2'>
      {Employees.map((employee, index) => (
        <EmployeCards
          key={index}
          name={employee.name}
          alias={employee.alias}
          specialty={employee.specialty}
          job={employee.job}
          mission={employee.mission}
          linkedIn={employee.linkedIn}
          imageSrc={employee.imageSrc}
        />
      ))}
    </div>
   </div>

      <div className="h-full w-[85%] justify-center p-1">
      <div className="font-medium text-center">
        <div className='my-10'>
        <div className='p-5 text-xl rounded-2xl'>
        <div className='text-2xl p-1'>
        {AboutText.stepsTitle}<br/>
        </div>
        </div>
        </div>
        {StepsInfo.map((item: any, index: any) => (
              <div key={index} >   
              <BlueBox 
        items={[{
          step: item.step, 
          label: item.label, 
          description: item.description
        },]}
        bgColor='bg-blue-900'
        />
        </div>
        ))}
      </div>
    </div>

    <div className="h-full w-[85%] justify-center p-1">
      <div className="font-medium text-center">
        <div className='my-10'>
        <div className='p-5 text-3xl rounded-2xl'>
        <div className='text-2xl p-1'>
        {AboutText.qATitle}<br/>
        </div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 pb-10 m-15 justify-center items-center align-middle">
       {qAInfo.map((item: any, index: any) => (
              <div key={index} 
              className="bg-blue-400/20 rounded-md p-6 py-5 pb-16 transition-shadow duration-300 h-[650px] lg:h-[590px] xl:h-[590px] flex flex-col justify-between w-full">
                <BlueBox 
              items={[{
                label: item.label,
                description: item.description
              },]}
              bgColor=''
            />
              </div>
            ))}
        </div>
      </div>
    </div>

    </div>    
    </div>
  );
}

export default App;
