// components/DiscountButton.js
import React from 'react';
import { DiscountButtonText } from '../data/textData/ComponentText';

const DiscountButton = () => {
 return (
    <div 
      className="bg-yellow-500 rounded-xl font-bold p-1 border-4 border-yellow-300 hover:bg-yellow-300 hover:border-red-500 hover:text-red-900 text-center justify-center hover:scale-110">
      <div>
        <h2 className="text-center text-yellow-800 text-3xl p-2">
          {DiscountButtonText.title}
        </h2>
        <p className="text-center p-2 text-2xl">
          {DiscountButtonText.description}
        </p>
        <div className="flex justify-center items-center gap-2">
          <span className="text-3xl">$</span>
          <h2>
            {DiscountButtonText.paymentMethods}
          </h2>
          <span className="text-3xl">$</span>
        </div>
      </div>
    </div>
 );
};

export default DiscountButton;
