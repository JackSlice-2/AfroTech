"use client";

import Navbar from "@/app/components/Navbar";
import { RootText, MainInfo, MainSubInfo, Dashboards } from "@/app/data/textData/MainText";
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

        <hr className="py-10"/>
        
        <div>
        <div className='p-5 rounded-2xl'>
        <div className='text-3xl md:text-4xl pb-10'>
        {RootText.footTitle}
        </div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 m-15 justify-center items-center align-middle">
          {MainInfo.map((item: any, index: any) => (
              <div key={index} 
              className="bg-blue-900/20 rounded-3xl p-4 pb-10 transition-shadow duration-300 min-h-[450px] flex flex-col justify-between w-full">
                <div className="flex justify-center text-blue-500 relative 
                h-[210px] lg:h-[290px] xl:h-[290px]">
                <Image src={item.imageUrl} alt={item.label} width={500} height={500} className="hover:scale-105 rounded-3xl"
                 style={{ width: '100%', height: '100%' }}
                 />
                </div>
                <div>
                  <h2 className="text-lg font-semibold my-5">{item.label}</h2>
                  <p className="text-gray-400 my-5 text-md">{item.description}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="w-full my-10 py-10 bg-blue-900/20 rounded-3xl">
          <div className="text-4xl pb-10">
          Dashboards de Administração
          </div>
        <div className="grid grid-cols-1 md:px-30 md:p-52 lg:p-10 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center align-middle">
          {Dashboards.map((item: any, index: any) => (
              <div key={index} 
              className="p-4 pb-10 transition-shadow duration-300 flex flex-col justify-between">
                <div className="flex justify-center text-blue-500 relative 
                h-[210px] lg:h-[290px] xl:h-[290px]">
                <Image src={item.imageUrl} alt={item.type} width={500} height={500} className="hover:scale-105 rounded-3xl"
                 style={{ width: '100%', height: '100%' }}
                 />
                </div>
                <div>
                  <h2 className="text-lg font-semibold my-5">{item.type}</h2>
                  <p className="text-gray-400 my-5 text-md">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
        </div>


        <hr className="my-8 mt-16"/>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 m-15 pt-10 justify-center items-center align-middle">
          
          {MainSubInfo.map((item: any, index: any) => (
              <div key={index} 
              className="bg-blue-900/20 rounded-3xl p-4 pb-10 transition-shadow duration-300 min-h-[450px] flex flex-col justify-between w-full">
                <div className="flex justify-center text-blue-500 relative lg:w-90 lg:h-72 xl:w-90 xl:h-72">
                <Image src={item.imageUrl} alt={item.label} width={500} height={500} className="hover:scale-105 rounded-3xl"
                 style={{ width: '100%', height: '100%' }} 
                 />
                </div>
                <div>
                  <h2 className="text-lg font-semibold my-5">{item.label}</h2>
                  <p className="text-gray-400 my-5 text-md">{item.description}</p>
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
                url='/contact'
            />
    </div>
    </div>
    </div>      
    </div>
    </>
  );
};

export default App;
