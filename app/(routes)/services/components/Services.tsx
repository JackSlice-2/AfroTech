import React from 'react';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import { Home, Globe, Database, Clipboard, Wrench, AppWindow } from 'lucide-react';

const ServiceInfo = [
  { icon: <Home />, label: 'Landing Page', 
  description: 'Páginas de destino rápidas e simples, para capturar clientes com um clique!', 
  url: '/services/pages/landingPage' },
  { icon: <Globe />, label: 'Websites', 
  description: 'Sites completos projetados para informar e/ou capturar usuários.', 
  url: '/services/pages/websites' },
  { icon: <AppWindow />, label: 'WebApps', 
  description: 'Aplicativos completos no navegador, para interação, criação e uso.', 
  url: '/services/pages/webApps' },
  { icon: <Database />, label: 'Banco de Dados', 
  description: 'Gestão, manutenção e criação de bancos de dados para otimização.', 
  url: '/services/pages/databases' },
  { icon: <Clipboard />, label: 'CRMs e CRUDs', 
  description: 'Sistemas eficientes de gerenciamento de clientes e dados.', 
  url: '/services/pages/crm-cruds' },
  { icon: <Wrench />, label: 'Manutenção', 
  description: 'Manutenção, edição e atualização de sites e aplicativos.', 
  url: '/services/pages/maintenance' },
 ];

const Services = () => {
 return (
    <div className="flex flex-col justify-center items-center px-2">
    <Navbar />
    <div className="h-full w-full md:flex-row lg:flex-row xl:flex justify-center p-1">
      <div className="font-medium text-center">
        <h1 className='text-4xl'>
          Nossas Especialidades
        </h1>
        <div className='my-10'>
        <p className='p-5 text-xl bg-blue-800/20 rounded-2xl'>
        Saiba como trabalhamos.<br/>
        A distância entre você e um futuro digital está à um Clique.</p>
        </div>
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pb-10 m-15 justify-center items-center">
          {ServiceInfo.map((item, index) => (
            <Link href={item.url} key={index} 
            className="bg-blue-900/20 rounded-3xl p-6 py-10 hover:bg-blue-800/40 transition-shadow duration-300 cursor-pointer max-w-96 min-h-[200px] flex flex-col justify-between hover:scale-110">
              <div className="flex justify-center text-blue-500">
              {React.cloneElement(item.icon, { size: 50 })}
              </div>
              <div>
              <h2 className="text-lg font-semibold my-2">{item.label}</h2>
              <p className="text-gray-600 my-2">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
 );
};

export default Services;
