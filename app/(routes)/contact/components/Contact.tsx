import React from 'react';
import Navbar from '../../../components/Navbar';
import { Mail, Phone } from 'lucide-react';
import DiscountButton from '@/app/components/DiscountButton';


const ContactInfo = [
    { icon: <Phone />, label: 'WhatsApp', info: '+55 51 98559-0254' },
    { icon: <Phone />, label: 'WhatsApp', info: '+55 51 98579-0398' },
    { icon: <Phone />, label: 'Telegram', info: '+55 51 98559-0254' },
    { icon: <Phone />, label: 'Signal', info: '+55 51 98559-0254' },
    { icon: <Mail />, label: 'Email', info: 'AfroTech@proton.me'},
  ]

const Contact: React.FC = () => {
    return (
      <section className="flex flex-col justify-center items-center lg:px-40 xl:px-40">
        <Navbar />
        <div className="relative flex justify-center items-center flex-col lg:px-20 xl:px-20">
        
        <div className="bg-blue-400/20 w-full rounded-3xl mx-10 px-20 text-center">
            <h2 className='text-4xl text-medium p-4'>Quem somos</h2>
            <p className='text-medium p-3 pb-5'>A Allexo é uma empresa de tecnologia fundada em 2016 com o objetivo de desenvolver soluções de Internet das Coisas para pequenas, médias e grandes indústrias visando tornar acessível as modernas tecnologias da Indústria 4.0 para qualquer tipo de empresa, para empresas de qualquer tamanho.</p>
        </div>

        <div className="w-full flex justify-center m-5 flex-col lg:flex-row xl:flex-row">
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

            <div className="text-center justify-center align-center px-10">

                <div className="p-5 bg-blue-400/20 rounded-3xl shadow-sm">
                    <div className="titleWrapper">
                        <h2 className='text-center mb-5 font-medium text-xl'>Entre em contato</h2>
                        <p className='p-2'>Por favor preencha os campos abaixo para podermos entrar em contato.</p>
                    </div>
            
                    <div className="p-1 flex gap-1 justify-center items-center text-center">
                    <span>Nome Completo:</span>
                        <input type="text" name="name" required
                        className='rounded-lg bg-gray-400/30 p-1'></input>
                    </div>    
            
                    <div className="p-2 flex-col gap-2 justify-center items-center">
                        <h3 className='p-2'>Selecione um das Opçoes abaixo:</h3>
                        <div>
                            <div>
                                <input type="radio" id="budget" name="SubjectOption" value="Budget" 
                                 className='p-2'></input>
                                <label >Orçamento</label>
                            </div>
                            <div>
                                <input type="radio" id="other" name="SubjectOption" value="Other"
                                 className='p-2'></input>
                                <label >Outro</label>
                            </div>
                            <div>
                                <input type="radio" id="tech" name="SubjectOption" value="Tech Support"
                                 className='p-2'></input>
                                <label >Support Técnico</label>
                            </div>
                        </div>
                        <input type="hidden" id="subject" name="Subject" value=""></input>
                    </div>
                    <span className='p-2'>Message:</span>            
                    <div className="text-medium p-2">
                        <textarea name="message" placeholder="Your Message" rows={6} cols={35} required
                        className='bg-gray-400/30 rounded-lg p-1'></textarea>
                    </div>
                    <div className="bg-blue-900 font-bold rounded-md hover:bg-blue-500 hover:text-blue-800 p-2 justify-cener items-center">
                        <input type="submit" value="Submit"></input>
                    </div>
                    </div>
                    </div>
                  </div>
                  </div>
</section>
    );
};

export default Contact;