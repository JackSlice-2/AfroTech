"use client";

import Navbar from "@/app/components/Navbar";
import { RootText, MainInfo } from "@/app/data/textData/MainText";
import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";

const App: React.FC = () => {
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
       
        <div className="flex flex-col justify-center gap-5 flex-1 w-full items-center lg:pl-20 xl:pl-20">
           {/*SMALL SCREEN IMAGES */}
           <div className="relative p-10">
            <Image src="/img/hacker7.png" alt="line" height={600} width={400}
              className='animate-float lg:hidden xl:hidden' />
          </div>


          <h1 className="text-center text-4xl lg:text-6xl xl:text-6xl lg:pt-32 xl:pt-32">
            &rdquo;{RootText.title}&rdquo;
          </h1>
          <div className="flex items-center gap-3 justify-center">
            <Image src="/img/line.png" alt="line" height={10} width={50} />
              <h2 className="text-pink-400">{RootText.pink}</h2>
            <Image src="/img/line.png" alt="line" height={10} width={50} />
          </div>
          <p className="text-2xl text-gray-300 text-center  w-[70%]"> 
          {RootText.description}
          </p>
       
         
        </div>
          {/*LARGE SCREEN IMAGES */}
        <div className="flex-1 hidden mt-32 relative md:hidden lg:block xl:block">
          <Image width={450} height={450} alt=''
            className='object-contain absolute inset-0 mx-auto animate-float pb-5' 
            src="/img/hacker7.png"/>
        </div>
      </div>


      <div className="h-full w-full md:flex-row lg:flex-row xl:flex mt-40">
    {/* Image Container */}
 <div className="flex-1 justify-center items-center text-center xl:pl-16 lg:pl-16 pb-20 lg:py-32 xl:py-32 h-full">
    <Image width={500} height={400} alt='' className='object-contain rounded-2xl mx-auto' src="/img/hacker9.png"/>
</div>

    {/* Text Container */}
    <div className="flex-1 w-full lg:w-2/3 xl:w-2/3 flex flex-col justify-center gap-5 items-center md:p-10 lg:px-52 xl:px-52">
        <h1 className="text-center justify-center text-4xl sm:text-6xl lg:text-6xl xl:text-6xl lg:pt-32 xl:pt-32">
            {RootText.subTitle}
        </h1>
        <div className="flex items-center gap-3 justify-center">
            <Image src="/img/line.png" alt="line" height={10} width={50} />
            <h2 className="text-pink-400">{RootText.subPink}</h2>
            <Image src="/img/line.png" alt="line" height={10} width={50} />
        </div>
        <p className="text-2xl text-gray-300 text-center"> 
            {RootText.subDescription}
        </p>
       
    </div>
</div>

<div className="h-full w-[85%] justify-center p-1">
      <div className="font-medium text-center pt-14">
        <hr className="py-10 lg:hidden xl:hidden block"/>
        <div>
        <div className='p-5 rounded-2xl'>
        <div className='text-5xl pb-10'>
        {RootText.footTitle}
        </div>
        </div>
        </div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 pb-10 m-15 justify-center items-center align-middle">
       {MainInfo.map((item: any, index: any) => (
              <div key={index} 
              className="bg-blue-900/20 rounded-3xl p-6 pb-10 transition-shadow duration-300 min-h-[200px] flex flex-col justify-between w-full">
                <div className="flex justify-center text-blue-500">
                <Image src={item.imageUrl} alt={item.label} width={1000} height={1000} className="hover:scale-105 rounded-3xl" 
                 style={{ width: '100%', height: '100%' }} />
                </div>
                <div>
                <h2 className="text-lg font-semibold my-3 mt-5">{item.label}</h2>
                <p className="text-gray-400 my-2 text-md">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>


    <div>
    <div className="py-20 text-center justify-center items-center text-4xl font-semibold">

    E Muito, Muito Mais...
    </div>
    <div className="text-center justify-center items-center pb-20 text-xl">
    <Button
                label={RootText.buttonLabel}
                more
                newTab
                url='https://api.whatsapp.com/send?phone=5551985790398&text=Bom%20dia,%20tenho%20interesse%20de%20fazer%20um%20site%20ou%20applicativo%20para%20minha%20empresa.%20Poderia%20me%20ajudar?'
                name={RootText.buttonLabel}
            />
    </div>
    </div>
    </div>      
    </div>
    </>
  );
};

export default App;
