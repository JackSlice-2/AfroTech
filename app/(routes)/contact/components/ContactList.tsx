import React from 'react'
import { ContactInfo } from '@/app/data/textData/ComponentText'

const ContactList = () => {
 return (
    <div className="w-full flex flex-col gap-4 px-20 py-5">
      {ContactInfo.map((item, index) => (
        <a href={item.url}  key={index} target='_blank' id={item.label} >
        <div className="flex items-center p-4 rounded-xl bg-blue-400/20 hover:bg-blue-900/30 hover:text-blue-500 shadow-md cursor-pointer">
          <div className="w-16 h-16 bg-blue-500 text-white flex justify-center items-center rounded-full">
            {React.cloneElement(item.icon, { size: 35 })}
          </div>
          <div className="ml-7 p-1">
           <h3 className='text-md font-thin'>{item.type}</h3>
            <h3 className='text-lg font-semibold'>{item.label}</h3>
            <p className='text-gray-300'>{item.info}</p>
          </div>
        </div>
        </a>
      ))}
    </div>
 )
}

export default ContactList
