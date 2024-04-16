import React from 'react';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import { Home, Globe, Database, Clipboard, Wrench, AppWindow } from 'lucide-react';

const ServiceInfo = [
 { icon: <Home />, label: 'Landing Page', description: 'A beautifully designed landing page to showcase your brand.', url: '/services/pages/landingPage' },
 { icon: <Globe />, label: 'Websites', description: 'Custom-built websites tailored to your business needs.', url: '/services/pages/websites' },
 { icon: <AppWindow />, label: 'WebApps', description: 'Innovative web applications to enhance your online presence.', url: '/services/pages/webApps' },
 { icon: <Database />, label: 'Databases', description: 'Secure and efficient database solutions for your data storage needs.', url: '/services/pages/databases' },
 { icon: <Clipboard />, label: 'CRMs e CRUDs', description: 'Comprehensive CRM and CRUD solutions for streamlined operations.', url: '/services/pages/crm-cruds' },
 { icon: <Wrench />, label: 'Manutenção', description: 'Reliable maintenance services to keep your systems running smoothly.', url: '/services/pages/maintenance' },
];


const Services = () => {
 return (
    <div className="flex flex-col justify-center items-center px-2">
    <Navbar />
    <div className="h-full w-full md:flex-row lg:flex-row xl:flex justify-center p-1">
      <div className="font-medium text-center">
        <h1 className='text-4xl'>
          Serviços que Prestamos
        </h1>
        <div className='my-10'>
        <p className='p-5 text-xl bg-blue-800/20 rounded-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet illo eos eligendi nobis nam aspernatur placeat.
        </p>
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
