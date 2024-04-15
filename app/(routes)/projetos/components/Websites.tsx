import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';

const Websites = () => {
  return (
    <section className="h-screen flex flex-col justify-between items-center">
<Navbar />
<div className='justify-center items-center mx-72 md:mx-40'>

      <div className="h-screen w-full flex sm:flex-col justify-center flex-col lg:flex-row xl:flex-row rounded-xl border-gray-200 border-x-2 px-3 bg-gray-500/20 hover:bg-gray-500/30 m-2 mt-3">

        <div className="flex flex-col justify-center gap-3 lg:gap-10 xl:gap-10 flex-1 mx-10 md:mx-0 translate-x-8 px-5 md:px-0">
          <h1 className="md:text-6xl text-4xl text-start">&rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-start gap-3">
            <div className="flex self-start gap-2 justify-center items-center">
              <Image src="/img/line.png" alt="line" height={10} width={50} />
              <h2 className="text-pink-400">What we do
              </h2>
            </div>            
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="md:text-2xl lg:text-2xl xl:text-2xl text-gray-300 text-start text-xl">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-start font-medium w-36 py-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-blue-900">
            <a href="/contact">Learn More</a>
          </button>
        </div>

        <div className="flex-1 relative px-10">
          <img className='lg:w-[800px] lg:h-[700px] md:w-[425px] md:h-[350px] w-[318px] h-[262px] object-contain absolute inset-0 mx-auto bottom-10 lg:bottom-0 xl:bottom-0 p-2' 
            src="./img/MacRS.png"/>
          <img className='lg:w-[640px] lg:h-[320px] h-[160px] top-48 object-contain absolute inset-0 mx-auto lg:top-96 left-64 md:left-96 lg:left-48' src="./img/IphoneRS.png" />
          <img className='lg:w-[640px] lg:h-[320px] h-[160px] top-48 object-contain absolute inset-0 mx-auto lg:top-96 left-40 md:left-72 lg:left-20' src="./img/AndroidRS.png" />  
            <a href='https://redeexames.netlify.app/' target="_blank">
            <button 
              className='w-[250px] h-[80px] font-medium absolute left-10 top-3/4 lg:top-3/4 xl:top-3/4 bg-yellow-500 text-black rounded hover:bg-red-700 hover:text-white'>
              See Live Demo!</button>
          </a>
        </div>

      </div>

      <div className="h-screen w-full flex justify-center flex-col lg:flex-row xl:flex-row rounded-xl border-gray-200 border-x-2 px-3 bg-gray-500/20 hover:bg-gray-500/30 m-2 mt-3">

      <div className="flex-1 relative flex-2 order-2 lg:order-1 xl:order-1 px-10">
      <img className='lg:w-[800px] lg:h-[700px] md:w-[425px] md:h-[350px] w-[318px] h-[262px] object-contain absolute inset-0 mx-auto bottom-10 lg:bottom-0 xl:bottom-0'
            src="./img/MacRS.png"/>
           <img className='lg:w-[640px] lg:h-[320px] h-[160px] top-48 object-contain absolute inset-0 mx-auto lg:top-96 left-64 md:left-96 lg:left-48' src="./img/IphoneRS.png" />
          <img className='lg:w-[640px] lg:h-[320px] h-[160px] top-48 object-contain absolute inset-0 mx-auto lg:top-96 left-40 md:left-72 lg:left-20' src="./img/AndroidRS.png" />  
             <a href='https://redeexames.netlify.app/' target="_blank">
            <button 
              className='w-[250px] h-[80px] font-medium absolute left-10 top-3/4 lg:top-3/4 xl:top-3/4 bg-yellow-500 text-black rounded hover:bg-red-700 hover:text-white'>
              See Live Demo!</button>
          </a>
        </div>

        <div className="flex flex-col justify-center gap-3 lg:gap-10 xl:gap-10 flex-1 mx-10 md:mx-0 translate-x-8 order-1 px-5 md:px-0">
          <h1 className="md:text-6xl text-4xl text-start">&rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-start gap-3">
            <div className="flex self-start gap-2 justify-center items-center">
              <Image src="/img/line.png" alt="line" height={10} width={50} />
              <h2 className="text-pink-400">What we do
              </h2>
            </div>            
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="md:text-2xl lg:text-2xl xl:text-2xl text-gray-300 text-start text-xl">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-start font-medium w-36 py-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-blue-900">
            <a href="/contact">Learn More</a>
          </button>
        </div>

      </div>

</div>
    </section>
  );
};

export default Websites;





