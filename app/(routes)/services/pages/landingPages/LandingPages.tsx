import Navbar from '@/app/components/Navbar';
import React from 'react';
import { LandingPagesInfo, LandingPagesText } from '@/app/data/subServicesData/LandingPagesInfo';
import ServiceModal from '../components/ServicesModal';

interface LandingPagesProps {
  props?: any;
}

const LandingPages: React.FC<LandingPagesProps> = ({props}) => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-8 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 rounded-3xl bg-gray-100/10">
       <ServiceModal
          mainTitle={LandingPagesText.title}
          mainDescription={LandingPagesText.description}
          items={LandingPagesInfo}
       />
      </div>
    </div>
    );
   };

export default LandingPages;
