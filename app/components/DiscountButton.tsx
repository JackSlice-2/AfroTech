// components/DiscountButton.js
import React from 'react';

const DiscountButton = () => {
 return (
    <div 
      className="bg-yellow-500 rounded-xl font-bold p-1 border-4 border-yellow-300 hover:bg-yellow-300 hover:border-red-500 hover:text-red-900 text-center justify-center hover:scale-110">
      <div>
        <h2 className="text-center text-yellow-800 text-3xl p-2">
          10% Discount
        </h2>
        <p className="text-center p-2 text-2xl">For Payments in</p>
        <div className="flex justify-center items-center gap-2">
          <span className="text-3xl">$</span>
          <h2>BTC(Bitcoin), XMR(Monero), MATIC(Polygon) & BNB(BinanceCoin)</h2>
          <span className="text-3xl">$</span>
        </div>
      </div>
    </div>
 );
};

export default DiscountButton;
