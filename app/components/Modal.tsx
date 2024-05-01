// Modal.tsx
import React from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  qrCodeSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, qrCodeSrc }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="p-6 rounded-t-lg">
            <button onClick={onRequestClose} className="absolute top-0 right-0 mt-2 mr-2" aria-label="Close modal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image src={qrCodeSrc} alt="Selected QR Code" width={300} height={300} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
