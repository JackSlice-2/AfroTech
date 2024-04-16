import DiscountButton from '@/app/components/DiscountButton'
import { Mail, Phone } from 'lucide-react'
import React from 'react'

const ContactInfo = [
    { icon: <Phone />, label: 'WhatsApp', info: '+55 51 98559-0254' },
    { icon: <Phone />, label: 'WhatsApp', info: '+55 51 98579-0398' },
    { icon: <Phone />, label: 'Telegram', info: '+55 51 98559-0254' },
    { icon: <Phone />, label: 'Signal', info: '+55 51 98559-0254' },
    { icon: <Mail />, label: 'Email', info: 'AfroTech@proton.me'},
]

const ContactList = () => {
 return (
    <div className="w-full flex flex-col gap-4 px-8 py-5">
      {ContactInfo.map((item, index) => (
        <a href=''  key={index} >
        <div className="flex items-center p-4 rounded-xl bg-blue-400/20 hover:bg-blue-900/30 hover:text-blue-500 shadow-md cursor-pointer">
          <div className="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full">
            {React.cloneElement(item.icon, { size: 24, fill: "currentColor" })}
          </div>
          <div className="ml-4">
            <h3 className='text-lg font-semibold'>{item.label}</h3>
            <p className='text-gray-300'>{item.info}</p>
          </div>
        </div>
        </a>
      ))}
      <DiscountButton />
    </div>
 )
}

export default ContactList