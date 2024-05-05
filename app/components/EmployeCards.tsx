// Import necessary components and hooks from React and Next.js
import React from 'react';
import Image from 'next/image';

interface EmployeCardsProps {
  imageSrc: string;
  name: string;
  job: string;
  specialty: string;
  mission: string;
  linkedIn: string;
}

const EmployeCards: React.FC<EmployeCardsProps> = ({ imageSrc, name, job, specialty, mission, linkedIn }) => {
  return (
    <div className="w-72 bg-blue-600/30 shadow-lg rounded-2xl flex flex-col">
      <div className="w-72 h-72 flex justify-center items-center">
  <Image 
  width={200}
  height={200}
    src={imageSrc} 
    alt={name} 
    className="rounded-2xl hover:scale-105 object-cover" 
    style={{ width: '95%', height: '95%' }} 
  />
</div>
      <div className='pl-3'>
      <h2 className="text-xl p-1 font-bold">{name}</h2>
      <p className="text-gray-400 p-1">{specialty}</p>
      <p className="text-gray-400 p-1">{job}</p>
      <p className="text-gray-400 p-1">Missão: {mission}</p>
      </div>
      <div className='text-center pt-5'>
      <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-white p-2 hover:bg-blue-600 px-20 rounded-full">LinkedIn</a>
      </div>
    </div>
  );
};

export default EmployeCards;
