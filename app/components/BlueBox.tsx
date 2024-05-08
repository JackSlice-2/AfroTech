// BlueBox.tsx
import React from 'react';
import { AboutText, qAInfo, StepsInfo } from "@/app/data/textData/MainText";


interface BlueBoxProps {
  items: Array<{ step?: string; label: string; description: string }>;
  gridCols: string;
  bgColor: string;
  height: string;
}

const BlueBox: React.FC<BlueBoxProps> = ({
  items,
  gridCols,
  bgColor,
  height,
}) => {
  return (
        <div className={`grid ${gridCols} gap-10 pb-10 m-15 justify-center items-center align-middle`}>
          {items.map((item, index) => (
            <div key={index} className={`${bgColor}/20 ${height} h-[500px] rounded-xl p-6 py-5 pb-10 transition-shadow duration-300 flex flex-col justify-between w-full`}>
              <div>
                {item.step && (
                <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-10 h-10">
                  {item.step}
                </div>
                )}
                <h2 className="text-2xl font-semibold mb-4">{item.label}</h2>
                <p className="text-gray-400/70 my-2 text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
  );
};

export default BlueBox;
