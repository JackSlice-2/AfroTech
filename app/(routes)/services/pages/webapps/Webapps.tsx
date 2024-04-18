import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import React from 'react';
import { WebappsInfo, WebappsText } from '@/app/data/subServicesData/WebappsInfo';
import ServiceModal from '../components/ServicesModal';

interface WebappsProps {
  props?: any;
}


const Webapps: React.FC<WebappsProps> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 md:px-8">
  <Navbar />
  <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 rounded-3xl bg-gray-100/10">
   <ServiceModal
      mainTitle={WebappsText.title}
      mainDescription={WebappsText.description}
      items={WebappsInfo}
   />
  </div>
</div>
);
};

export default Webapps;
