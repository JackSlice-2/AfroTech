import React from 'react';
import Navbar from '@/app/components/Navbar';
import TextImageCard from './TextImageCard';
import ImageTextCard from './ImageTextCard';

const Websites = () => {
  return (
    <section className="h-screen flex flex-col justify-between items-center">
      <Navbar />
      <div className='justify-center items-center mx-72 md:mx-40'>
        <TextImageCard />
        <ImageTextCard />
      </div>
    </section>
  );
};

export default Websites;





