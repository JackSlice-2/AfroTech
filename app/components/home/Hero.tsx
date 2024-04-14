import React from 'react';
import Navbar from '../Navbar';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
    <Navbar />
      <div className="h-[100vh] pt-5  w-full md:flex lg:flex xl:flex">
       
        <div className="flex flex-col justify-center gap-5 flex-1 w-full items-center md:pl-56 lg:pl-56 xl:pl-56">
          <h1 className="text-center text-4xl sm:text-6xl lg:text-6xl xl:text-6xl">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex items-center gap-3 justify-center">
            <Image src="/img/line.png" alt="line" height={10} width={50} />
              <h2 className="text-pink-400">What we do</h2>
            <Image src="/img/line.png" alt="line" height={10} width={50} />
          </div>
          <p className="text-2xl text-gray-300 text-center">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
          {/*SMALL SCREEN IMAGES */}
          <div className="relative md:hidden lg:hidden xl:hidden">
            <Image src="/img/hacker.png" alt="line" height={300} width={300}
              className='animate-float' />
            <div className='transform translate-y-[-290px] translate-x-[85px]'>
            <Image src="/img/Ball.png" alt="line" height={70} width={70} 
              className='animate-rotate' />
            </div>
          </div>
        </div>
             {/*MID SCREEN IMAGES */}
             <div className="flex-1 hidden relative md:block lg:hidden xl:hidden">
          <Image width={400} height={350} alt=''
            className='object-contain absolute inset-0 mx-auto animate-float pb-1' 
            src="/img/hacker.png"/>
            <div className='translate-y-52 translate-x-20'>          
          <Image width={80} height={80} alt='ball'
            className='object-contain absolute inset-0 animate-rotate'
            src="/img/Ball.png" />
            </div>

        </div>

          {/*LARGE SCREEN IMAGES */}
        <div className="flex-1 hidden relative md:hidden lg:block xl:block">
          <Image width={400} height={350} alt=''
            className='object-contain absolute inset-0 mx-auto animate-float pb-5' 
            src="/img/hacker.png"/>
          <Image width={110} height={100} alt='ball'
            className='object-contain absolute inset-0 mx-auto animate-rotate m-auto'
            src="/img/Ball.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;