import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import React from 'react';
import { WebappsInfo, WebappsText } from '@/app/data/subServicesData/WebappsInfo';

interface WebappsProps {
  props?: any;
}


const Webapps: React.FC<WebappsProps> = (props) => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-8 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 rounded-3xl bg-gray-100/10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl pt-2">
            {WebappsText.title}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {WebappsText.description}
            </p>
        </div>

        <div className="mt-5 grid gap-10 max-w-2xl mx-auto lg:max-w-none p-10">
          {WebappsInfo.map((item, index) => (
            <div key={index} className={`flex  hover:scale-110 transition flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className="flex-shrink-0 md:w-1/3 transition">
                <Image className="h-full w-full object-cover md:w-full" src={item.img} alt={item.title} width={10} height={10} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                 <p className="text-2xl font-medium text-indigo-600 p-2">
                    {item.title}
                 </p>
                 <p className="text-lg p-2 font-semibold text-gray-900">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
   };

export default Webapps;
