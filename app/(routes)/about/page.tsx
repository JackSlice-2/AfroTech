"use client";

import Navbar from "@/app/components/Navbar";
import { AboutText } from "@/app/data/textData/MainText";
import Button from "@/app/components/Button";
import Image from "next/image";

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
              <div className='pt-2'>
              <Button
                  url='/contact'
                  label={AboutText.buttonLabel}
                  more
                />       
                </div>
          </div>
            <div className='flex-2 flex flex-col justify-center lg:mr-32 xl:mr-32 py-4'>
              <div className='w-96 h-96 pb-5 object-contain m-auto hover:scale-110 transition'>
              <Image src="/img/hacker6.png" alt='' width={800} height={800} className='rounded-3xl' />
            </div>
          </div>
      </div>
    </div>    </div>
  );
}

export default App;
