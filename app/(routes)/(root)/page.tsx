"use client";

import Navbar from "@/app/components/Navbar";
import { RootText } from "@/app/data/textData/MainText";
import Button from "@/app/components/Button";
import Image from "next/image";

const App: React.FC = (props) => {
  return (
    <>
      <div
        className="h-screen overflow-y-auto overflow-x-hidden
       text-gray-300 w-max-full"
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
        <div className=" flex flex-col justify-center items-center px-2">
      <Navbar />
    <div className="h-full w-full md:flex-row lg:flex-row xl:flex">
       
        <div className="flex flex-col justify-center gap-5 flex-1 w-full items-center md:p-10 lg:px-56 xl:px-56">
          <h1 className="text-center text-4xl sm:text-6xl lg:text-6xl xl:text-6xl lg:pt-32 xl:pt-32">
            &rdquo;{RootText.title}&rdquo;
          </h1>
          <div className="flex items-center gap-3 justify-center">
            <Image src="/img/line.png" alt="line" height={10} width={50} />
              <h2 className="text-pink-400">{RootText.pink}</h2>
            <Image src="/img/line.png" alt="line" height={10} width={50} />
          </div>
          <p className="text-2xl text-gray-300 text-center"> 
          {RootText.description}
          </p>
          <Button
            label={RootText.buttonLabel}
            more
            url='/services'
          />
          {/*SMALL SCREEN IMAGES */}
          <div className="relative p-10 lg:hidden xl:hidden">
            <Image src="/img/hacker7.png" alt="line" height={600} width={400}
              className='animate-float' />
          </div>
        </div>
          {/*LARGE SCREEN IMAGES */}
        <div className="flex-1 hidden mt-32 relative md:hidden lg:block xl:block">
          <Image width={400} height={350} alt=''
            className='object-contain absolute inset-0 mx-auto animate-float pb-5' 
            src="/img/hacker7.png"/>
        </div>
      </div>
    </div>      </div>
    </>
  );
};

export default App;
