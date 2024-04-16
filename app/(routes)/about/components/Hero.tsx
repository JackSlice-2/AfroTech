import Button from '@/app/components/Button';
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
              Diante de você, encontra-se uma equipe de exploradores implacáveis
              da empresa Afrotech. Somos pessoas com afinidade para desvendar as
              complexidades dos diversos desafios e erros estruturais
               do nosso mundo moderno. 
               Conquistadores naturais de reinos inexplorados, 
               prosperamos na aprendizagem perpétua, 
               transformando o desconhecido em uma caixa de areia de possibilidades.
              </div>
              <div className='pt-2'>
              <Button
                  url='/contact'
                  label='Chame Agora!'
                  more
                />       
                </div>

          </div>
            <div className='flex-2 flex flex-col justify-center lg:mr-32 xl:mr-32 py-4'>
              <div className='w-96 h-96 pb-5 object-contain m-auto hover:scale-125 transition'>
              <Image src="/img/hacker6.png" alt='' width={800} height={800} className='rounded-3xl' />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
