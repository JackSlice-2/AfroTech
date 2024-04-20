import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import React from 'react';
import { ConsultInfo, ConsultText } from '@/app/data/subServicesData/ConsultInfo';
import ServiceModal from '../../../../components/ServicesModal';

interface ConsultProps {
  props?: any;
}


const Consult: React.FC<ConsultProps> = (props) => {
    return (
      <div className="flex flex-col justify-center items-center px-4 py-8 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 rounded-3xl bg-gray-100/10">
       <ServiceModal
          mainTitle={ConsultText.title}
          mainDescription={ConsultText.description}
          items={ConsultInfo}
       />
      </div>
    </div>
    );
   };

export default Consult;
