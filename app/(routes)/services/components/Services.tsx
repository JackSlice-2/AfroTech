import React from 'react';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import { ServiceInfo } from '../../../data/textData/ComponentText';
import { ServicesText } from '@/app/data/textData/MainText';

const Services = () => {
 return (
    <div className="flex flex-col justify-center items-center px-2">
    <Navbar />
    <div className="h-full w-full md:flex-row lg:flex-row xl:flex justify-center p-1">
      <div className="font-medium text-center">
        <h1 className='text-4xl'>
          {ServicesText.title}
        </h1>
        <div className='my-10'>
        <p className='p-5 text-xl bg-blue-800/20 rounded-2xl'>
        {ServicesText.subtitle}<br/>
        {ServicesText.subSubtitle}</p>
        </div>
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pb-10 m-15 justify-center items-center">
          {ServiceInfo.map((item: any, index: any) => (
            <Link href={item.url} key={index} 
            className="bg-blue-900/20 rounded-3xl p-6 py-10 hover:bg-blue-800/40 transition-shadow duration-300 cursor-pointer max-w-96 min-h-[200px] flex flex-col justify-between hover:scale-110">
              <div className="flex justify-center text-blue-500">
              {React.cloneElement(item.icon, { size: 50 })}
              </div>
              <div>
              <h2 className="text-lg font-semibold my-2">{item.label}</h2>
              <p className="text-gray-600 my-2">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
 );
};

export default Services;
