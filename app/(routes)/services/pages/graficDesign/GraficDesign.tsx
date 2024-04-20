import Navbar from '@/app/components/Navbar';
import React from 'react';
import { GraficDesignInfo, GraficDesignText } from '@/app/data/subServicesData/GraficDesignInfo';
import ServiceModal from '../../../../components/ServicesModal';

interface GraficDesignProps {
  props?: any;
}

const GraficDesign: React.FC<GraficDesignProps> = ({props}) => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-8 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 rounded-3xl bg-gray-100/10">
       <ServiceModal
          mainTitle={GraficDesignText.title}
          mainDescription={GraficDesignText.description}
          items={GraficDesignInfo}
       />
      </div>
    </div>
    );
   };

export default GraficDesign;
