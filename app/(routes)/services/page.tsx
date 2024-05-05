"use client";

import Navbar from "@/app/components/Navbar";
import { ServicesText } from "@/app/data/textData/MainText";
import React from "react";
import Link from "next/link";
import { ServiceInfo } from "@/app/data/textData/ComponentText";

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
        <div className="flex flex-col justify-center items-center px-2">
    <Navbar />

    <div className="absolute -translate-x-96 inset-0 pointer-events-none servicesBackgroundLG"></div>

       <div className="absolute inset-0 pointer-events-none md:hidden servicesBackgroundSM"></div>


    <div className="h-full w-full md:flex-row lg:flex-row xl:flex justify-center p-1 pb-20">
      <div className="font-medium text-center">
        <h1 className='text-4xl'>
          {ServicesText.title}
        </h1>
        <div className='my-10'>
        <div className='p-5 text-xl bg-blue-800/20 rounded-2xl'>
        <div className='text-2xl p-1'>
        {ServicesText.subtitle}<br/>
        </div>
        {ServicesText.subSubtitle}</div>
        </div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 pb-10 m-15 justify-center items-center align-middle">
       {ServiceInfo.map((item: any, index: any) => (
              <Link href={item.url} key={index} 
              className="bg-blue-900/20 rounded-3xl p-6 py-10 hover:bg-blue-900/40 transition-shadow duration-300 cursor-pointer max-w-96 min-h-[200px] flex flex-col justify-between transition hover:scale-110">
                <div className="flex justify-center text-blue-500">
                {React.cloneElement(item.icon, { size: 50 })}
                </div>
                <div>
                <h2 className="text-lg font-semibold my-2">{item.label}</h2>
                <p className="text-gray-400 my-2">{item.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  </div>      </div>
    </>
  );
};

export default App;
