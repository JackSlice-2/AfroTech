import React from 'react';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';

const Root = () => {
  return (
    <div className=" flex flex-col justify-center items-center px-2">
      <Navbar />
    <div className="h-full w-full md:flex-row lg:flex-row xl:flex">
       
        <div className="flex flex-col justify-center gap-5 flex-1 w-full items-center md:p-10 lg:px-56 xl:px-56">
          <h1 className="text-center text-4xl sm:text-6xl lg:text-6xl xl:text-6xl pt-10">
            &rdquo;Paciencia é a chave na resoluçao de problemas&rdquo;
          </h1>
          <div className="flex items-center gap-3 justify-center">
            <Image src="/img/line.png" alt="line" height={10} width={50} />
              <h2 className="text-pink-400">O que Fazemos</h2>
            <Image src="/img/line.png" alt="line" height={10} width={50} />
          </div>
          <p className="text-2xl text-gray-300 text-center">
            Nós nos esforçamos para criar a interface de usuário 
            mais intuitiva e sofisticada
            para a melhor experiência do usuário em  applicativos Web, iOS e Android.
          </p>
          <button className="bg-blue-900 text-white font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Saiba Mais</a>
          </button>

          {/*SMALL SCREEN IMAGES */}
          <div className="relative p-10 lg:hidden xl:hidden">
            <Image src="/img/hacker7.png" alt="line" height={600} width={400}
              className='animate-float' />
          </div>
        </div>
          {/*LARGE SCREEN IMAGES */}
        <div className="flex-1 hidden mt-32 relative md:hidden lg:block xl:block">
          <Image width={400} height={350} alt=''
            className='object-contain absolute inset-0 mx-auto animate-float pb-5' 
            src="/img/hacker7.png"/>
        </div>
      </div>
    </div>
  );
};

export default Root;