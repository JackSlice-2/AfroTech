import React from 'react';
import { AboutText, qAInfo, StepsInfo } from "@/app/data/textData/MainText";
import Image from 'next/image';


interface BlueBoxProps {
  items: Array<{ step?: string; imageUrl?:string; label: string; description: string }>;
  bgColor: string;
}

const BlueBox: React.FC<BlueBoxProps> = ({
  items,
  bgColor,
}) => {
  return (
        <div className={`grid gap-10 pb-10 m-15 justify-center items-center align-middle`}>
          {items.map((item, index) => (
            <div key={index} className={`${bgColor}/20 rounded-xl p-6 py-5 pb-10 transition-shadow duration-300 min-h-[250px] flex flex-col justify-between w-full`}>
              {item.imageUrl && (
                 <div className="flex justify-center text-blue-500 relative lg:w-90 lg:h-72 xl:w-90 xl:h-72">
                 <Image src={item.imageUrl} alt={item.label} width={500} height={500} className="hover:scale-105 rounded-3xl"
                  style={{ width: '100%', height: '100%' }} 
                  />
                 </div>
              )}
              <div>
                {item.step && (
                <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-10 h-10">
                  {item.step}
                </div>
                )}
                <h2 className="text-2xl font-semibold mb-4 pt-2">{item.label}</h2>
                <p className="text-gray-400/70 my-2 text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
  );
};

export default BlueBox;
