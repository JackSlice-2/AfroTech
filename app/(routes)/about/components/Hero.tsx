import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className=" flex flex-col justify-center items-center px-5">
      <Navbar />
      <div className="h-full w-full md:flex-row lg:flex-row xl:flex">
        <div className="flex flex-col justify-center flex-1 w-full md:p-10 lg:px-56 xl:px-56 gap-2">
          <div className='text-center text-8xl text-medium lg:text-start xl:text-start'>
                <h1>Imaginar.</h1>
                <h1>Aprender.</h1>
                <h1> Solucionar.</h1>
              </div>
              <div className='flex gap-2 py-1 items-center justify-center lg:justify-start xl:justify-start'>
                <Image src="/img/line.png" alt="line" width={35} height={5} />
                <p className='text-pink-400'>Dificil Leva um Dia</p>
                <Image src="/img/line.png" alt="line" width={35} height={5} />
              </div>
              <div className='flex gap-2 py-1 items-center justify-center lg:justify-start xl:justify-start'>
                <Image src="/img/line.png" alt="line" width={35} height={5} />
                <p className='text-pink-400'>O Impossivel, uma Semana</p>
                <Image src="/img/line.png" alt="line" width={35} height={5} />
              </div>
              <div className='text-xl color-gray-200'>
                Before you, lies a relentless explorer with an affinity for unraveling the complexities of our modern world&apos;s diverse software,
                languages, and frameworks. A silent conqueror of uncharted realms, I thrive in the realm of perpetual learning,
                turning the unknown into a sandbox of possibilities.
              </div>
              <div className='pt-2'>       
                <div /*BUTTON*/
                className='bg-blue-600 text-white text-center font-medium w-36 p-1 rounded-md cursor-pointer hover:bg-blue-800 hover:text-blue-100'>
                <a href='/contact' >Chama Agora!</a></div></div>

          </div>
            <div className='flex-2 flex flex-col justify-center lg:mr-32 xl:mr-32 py-4'>
              <div className='w-96 h-96 pb-5 object-contain m-auto'>
              <Image src="/img/hacker6.png" alt='' width={800} height={800} className='rounded-3xl' />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
