import Image from 'next/image';
import React from 'react';

interface Item {
 title: string;
 description: string;
 img: string;
}

interface ServiceModalProps {
 mainTitle: string;
 mainDescription: string;
 items: Item[];
}

const ServiceModal: React.FC<ServiceModalProps> = ({
     mainTitle,
     mainDescription,
     items,
    }) => {
 return (
    <>
      <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl pt-2">
          {mainTitle}
        </h1>
        <p className="m-5 text-base text-gray-300 sm:text-lg md:text-xl lg:py-2">
          {mainDescription}
        </p>
      </div>

      <div className="mt-7 grid gap-10 max-w-2xl mx-auto lg:max-w-none">
        {items.map((item, index) => (
          <div key={index} className={`flex  transition hover:scale-110 flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
          <div className="flex-shrink-0 md:w-1/2 transition">
            <Image className="h-full w-full md:w-full" src={item.img} alt={item.title} width={1000} height={1000} />
          </div>
          <div className="flex-1 bg-white p-5 flex flex-col justify-between">
            <div className="flex-1">
             <p className="text-2xl md:text-xl lg:text-2xl font-semibold text-indigo-600 p-2">
                {item.title}
                </p>
                <p className="text-lg md:text-base p-2 font-medium lg:text-lg text-gray-900">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
 );
};

export default ServiceModal;
