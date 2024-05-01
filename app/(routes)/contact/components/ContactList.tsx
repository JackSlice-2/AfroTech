import React, { useState } from 'react';
import { ContactInfo } from '@/app/data/textData/ComponentText';
import Image from 'next/image';
import Modal from '@/app/components/Modal';

const ContactList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQRCode, setSelectedQRCode] = useState<string | null>(null); // State to hold the selected QR code

  const openModal = (qrCodeSrc: string) => {
    setSelectedQRCode(qrCodeSrc); // Set the selected QR code
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

 return (
    <div className="w-full flex flex-col gap-4 px-20 py-5">
      {ContactInfo.map((item, index) => (
        <a href={item.url}  key={index} target='_blank' id={item.label} >
        <div className="flex items-center p-4 rounded-xl bg-blue-400/20 hover:bg-blue-900/30 hover:text-blue-500 shadow-md cursor-pointer">
          <div className="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full">
            {React.cloneElement(item.icon, { size: 24 })}
          </div>
          <div className="ml-4 p-1">
            <h2 className='font-thin text-gray-300'>{item.type}</h2>
            <h3 className='text-lg font-semibold'>{item.label}</h3>
            <p className='text-gray-300'>{item.info}</p>
          </div>
          <div className='ml-auto'>
            {item.qrCode && <Image src={item.qrCode} alt={item.label} width={85} height={85} onClick={(e) => {
              e.preventDefault();
              openModal(item.qrCode);
            }}/>}
          </div>
        </div>
        </a>
      ))}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} qrCodeSrc={selectedQRCode || ''} />
    </div>
  );
};

export default ContactList;




