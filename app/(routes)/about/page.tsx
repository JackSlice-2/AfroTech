"use client";

import Navbar from "@/app/components/Navbar";
import { AboutText, qAInfo, StepsInfo } from "@/app/data/textData/MainText";
import Button from "@/app/components/Button";
import Image from "next/image";
import EmployeCards from "@/app/components/EmployeCards";

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
        <div className="flex flex-col justify-center flex-1 w-full md:p-10 lg:px-56 xl:px-56 gap-2">
          <div className='text-center text-6xl md:text-8xl  text-medium lg:text-start xl:text-start'>
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
            
            
            <div className='gap-10 grid justify-center lg:mr-32 xl:mr-32 pt-32 grid-row-1 md:grid-row-1 xl:grid-row-2 md:ml-32'>
              <EmployeCards 
              name='Paulo Neto (P.C)'
              specialty='Desenvolvedor Senior'
              job='Fundador & CEO'
              mission='Inovar e Criar'
              linkedIn=''
              imageSrc='/img/hacker6.png'
              />
              <EmployeCards 
              name='Bianca Nunes (Bia)'
              specialty='Analista de Marketing'
              job='Co-Fundadora & CMO'
              mission='Propagar e Divulgar'
              linkedIn=''
              imageSrc='/img/fernanda.png'
              />
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
        <div 
          className="grid grid-cols-1 gap-10 pb-10 m-15 justify-center items-center align-middle">
       {StepsInfo.map((item: any, index: any) => (
              <div key={index} 
              className="bg-blue-900/20 rounded-xl p-6 py-5 pb-10 transition-shadow duration-300 min-h-[200px] flex flex-col justify-between w-full">
                <div>
                <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-10 h-10">
                  {item.step}
                </div>
                <h2 className="text-2xl font-semibold mb-4">{item.label}</h2>
                <p className="text-gray-400/70 my-2 text-md">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
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
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 pb-10 m-15 justify-center items-center align-middle">
       {qAInfo.map((item: any, index: any) => (
              <div key={index} 
              className="bg-blue-400/20 rounded-md p-6 py-5 pb-16 transition-shadow duration-300 h-[515px] lg:h-[520px] xl:h-[520px] flex flex-col justify-between w-full">
                <div>
                <h2 className="text-xl font-semibold my-3">{item.label}</h2>
                <p className="text-gray-400/70 my-2 text-md">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>


    </div>    </div>
  );
}

export default App;
