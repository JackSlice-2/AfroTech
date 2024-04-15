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
    <div className="w-full flex flex-col gap-4 px-24 py-5">
    {ContactInfo.map((item, index) => (
      <div key={index} className="relative flex max-w-96 p-2 rounded-2xl bg-blue-400/20 hover:bg-blue-900/30 hover:text-blue-500">
        <div className="w-14 h-14 bg-white text-black flex justify-center items-center rounded-md text-md color-black m-2">
          {item.icon}
        </div>
        <div className="text">
          <h3 className='p-1'>{item.label}</h3>
          <p>{item.info}</p>
        </div>
      </div>
    ))}
    <DiscountButton />
  </div>
  )
}

export default ContactList
