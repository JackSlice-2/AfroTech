import React from 'react';
import Navbar from '../../../components/Navbar';
import styled from 'styled-components';
import Image from 'next/image';

const Button = styled.button`
transform: translateY(20px) translateX(-150px);
`;

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-between items-center">
      <Navbar />

<div className='justify-center items-center mx-8'>

      <div className="h-screen w-full flex sm:flex-col justify-center flex-col lg:flex-row xl:flex-row rounded-xl border-gray-200 border-x-2 px-3 bg-gray-500/20 hover:bg-gray-500/30 m-2 mt-3">

        <div className="flex flex-col justify-center gap-3 lg:gap-10 xl:gap-10 flex-1 mx-10 translate-x-8">
          <h1 className="text-6xl text-start text-40">&rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-start gap-3">
            <div className="flex self-start gap-2 justify-center items-center">
              <Image src="/img/line.png" alt="line" height={10} width={50} />
              <h2 className="text-pink-400">What we do
              </h2>
            </div>            
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-start">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-start font-medium w-36 py-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-blue-900">
            <a href="/about">Learn More</a>
          </button>
        </div>

        <div className="flex-1 relative">
          <img className='lg:w-[850px] lg:h-[700px] w-[425px] h-[350px] object-contain absolute inset-0 mx-auto bottom-10 lg:bottom-0 xl:bottom-0' 
            src="./img/MacRS.png"/>
          <img className='lg:w-[640px] lg:h-[320px] h-[160px] top-48 object-contain absolute inset-0 mx-auto lg:top-96 left-96' src="./img/IphoneRS.png" />
          <img className='lg:w-[640px] lg:h-[320px] h-[160px] top-48 object-contain absolute inset-0 mx-auto lg:top-96 left-72' src="./img/AndroidRS.png" />          <a href='https://redeexames.netlify.app/'>
            <Button 
              className='w-[90px] h-[80px] object-contain absolute inset-0 mx-auto top-3/4 lg:top-3/4 xl:top-3/4 left-full bg-yellow-500 text-black rounded hover:bg-red-700 hover:text-white'>
              See Live Demo!</Button>
          </a>
        </div>

      </div>

      <div className="h-screen w-full flex justify-center flex-col lg:flex-row xl:flex-row rounded-xl border-gray-200 border-x-2 px-3 bg-gray-500/20 hover:bg-gray-500/30 m-2 mt-3">

      <div className="flex-1 relative flex-2 order-2 lg:order-1 xl:order-1">
          <img className='lg:w-[850px] lg:h-[700px] w-[425px] :h-[350px] object-contain absolute inset-0 mx-auto' 
            src="./img/MacRS.png"/>
          <img className='lg:w-[640px] lg:h-[320px] h-[160px] top-48 object-contain absolute inset-0 mx-auto lg:top-96 left-96' src="./img/IphoneRS.png" />
          <img className='lg:w-[640px] lg:h-[320px] h-[160px] top-48 object-contain absolute inset-0 mx-auto lg:top-96 left-72' src="./img/AndroidRS.png" />
          <a href='https://redeexames.netlify.app/'>
            <Button 
              className='w-[90px] h-[80px] object-contain absolute inset-0 mx-auto top-3/4 lg:top-3/4 xl:top-3/4 left-full bg-yellow-500 text-black rounded hover:bg-red-700 hover:text-white'>
              See Live Demo!</Button>
          </a>
        </div>

        <div className="flex flex-col justify-center gap-3 lg:gap-10 xl:gap-10 flex-1 xl:flex-1 mx-10 order-1 lg:order-2 xl:order-2 translate-x-8">
        <h1 className="text-6xl text-start text-40">&rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-start gap-3">
            <div className="flex self-start gap-2 justify-center items-center">
              <Image src="/img/line.png" alt="line" height={10} width={50} />
              <h2 className="text-pink-400">What we do
              </h2>
            </div>            
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-start">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-start font-medium w-36 py-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-blue-900">
            <a href="/about">Learn More</a>
          </button>
        </div>

      </div>

</div>
    </section>
  );
};

export default Hero;





