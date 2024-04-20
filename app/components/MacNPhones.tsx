import React from 'react';
import Button from './Button';
import Image from 'next/image'; // Import the Image component

const MacNPhones = () => {
 return (
    <div className="flex-1 relative px-10">
      <div className="absolute inset-0 mx-5 bottom-10 lg:bottom-0 xl:bottom-0 p-2">
        <Image
          src="/img/MacRS.png" // Adjust the path as necessary
          alt="MacRS"
          layout="fill"
          objectFit="contain"
          className="lg:w-[800px] lg:h-[700px] md:w-[425px] w-[318px] h-[262px]"
        />
      </div>
      <div className="absolute inset-0 mx-5 lg:mb-20 lg:top-80 left-64 md:left-96 lg:left-96">
        <Image
          src="/img/IphoneRS.png" // Adjust the path as necessary
          alt="IphoneRS"
          layout="fill"
          objectFit="contain"
          className="lg:w-[640px] lg:h-[320px] h-[180px]"
        />
      </div>
      <Button label='Testa o Demo!'
        url='https://kycnot.me/'
        live={true}
        newTab={true}
      />
    </div>
 );
};

export default MacNPhones;
