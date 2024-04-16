import Navbar from '@/app/components/Navbar';
import React from 'react';

const MaintainenceInfo = [
 {
    title: 'Perfil de Consumo de Energia',
    description: 'Acompanhe o perfil de consumo de fábricas, máquinas e instalações. Saiba onde está concentrado o maior consumo permitindo que você possa tomar medidas para reduzir o consumo',
    img: '/img/test.png/',
 },
 {
    title: 'Alertas inteligentes',
    description: 'Através de ferramentas de inteligência artificial a plataforma da Allexo consegue detectar comportamentos de consumo fora do padrão normal de funcionamento alertado via e-mail, SMS e Telegram em caso de alguma anomalia seja detectada.',
    img: '/img/test.png/',
 },
 {
    title: 'Alertas inteligentes',
    description: 'Através de ferramentas de inteligência artificial a plataforma da Allexo consegue detectar comportamentos de consumo fora do padrão normal de funcionamento alertado via e-mail, SMS e Telegram em caso de alguma anomalia seja detectada.',
    img: '/img/test.png/',
 },
 {
    title: 'Alertas inteligentes',
    description: 'Através de ferramentas de inteligência artificial a plataforma da Allexo consegue detectar comportamentos de consumo fora do padrão normal de funcionamento alertado via e-mail, SMS e Telegram em caso de alguma anomalia seja detectada.',
    img: '/img/test.png/',
 },
 {
    title: 'Alertas inteligentes',
    description: 'Através de ferramentas de inteligência artificial a plataforma da Allexo consegue detectar comportamentos de consumo fora do padrão normal de funcionamento alertado via e-mail, SMS e Telegram em caso de alguma anomalia seja detectada.',
    img: '/img/test.png/',
 },
];

const Maintainence = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-8 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
          Maintainence
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Através da plataforma IoTHINGS acompanhe em tempo real o perfil de consumo de suas instalações com rateio por máquinas e equipamentos bem como a produção de energia de suas plantas fotovoltaicas. Verifique se o seu contrato com a concessionária está adequado bem como receba do módulo de Inteligência Artificial.
          </p>
        </div>

        <div className="mt-12 grid gap-20 max-w-2xl mx-auto lg:max-w-none">
          {MaintainenceInfo.map((item, index) => (
            <div key={index} className={`flex  hover:scale-125 transition flex-col md:flex-row rounded-xl shadow-lg overflow-hidden ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className="flex-shrink-0 md:w-1/3 transition">
                <img className="h-full w-full object-cover md:w-full" src={item.img} alt={item.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                 <p className="text-2xl font-medium text-indigo-600 p-2">
                    {item.title}
                 </p>
                 <p className="text-lg p-2 font-semibold text-gray-900">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
   };

export default Maintainence;
