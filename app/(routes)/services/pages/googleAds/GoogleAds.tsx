import Navbar from '@/app/components/Navbar';
import React from 'react';
import { GoogleAdsInfo, GoogleAdsText } from '@/app/data/subServicesData/GoogleAds';
import ServiceModal from '../../../../components/ServicesModal';

interface GoogleAdsProps {
  props?: any;
}

const GoogleAds: React.FC<GoogleAdsProps> = ({props}) => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-8 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 rounded-3xl bg-gray-100/10">
       <ServiceModal
          mainTitle={GoogleAdsText.title}
          mainDescription={GoogleAdsText.description}
          items={GoogleAdsInfo}
       />
      </div>
    </div>
    );
   };

export default GoogleAds;
