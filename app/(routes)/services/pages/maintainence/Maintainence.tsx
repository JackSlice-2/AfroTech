import Navbar from '@/app/components/Navbar';
import React from 'react';
import { MaintainenceInfo, MaintainenceText } from '@/app/data/subServicesData/MaintainenceInfo';
import ServiceModal from '../components/ServicesModal';

interface MaintainenceProps {
  props?: any;
}

const Maintainence: React.FC<MaintainenceProps> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 md:px-8">
  <Navbar />
  <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 rounded-3xl bg-gray-100/10">
   <ServiceModal
      mainTitle={MaintainenceText.title}
      mainDescription={MaintainenceText.description}
      items={MaintainenceInfo}
   />
  </div>
</div>
);
};

export default Maintainence;
