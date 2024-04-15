import React from 'react';
import Navbar from '../../../components/Navbar';

const ContactInfo = [
    { icon: 'fa fa contact', label: 'Address', info: 'porto alegre, Canoas numero 1444' },
    { icon: 'fa fa-envelope', label: 'Email', info: 'isjnvsdjvndkj@sdvsdsdv'},
    { icon: 'fa fa-phone', label: 'Phone', info: '51 999999999' },
    { icon: 'fa fa-clock', label: 'Hours', info: 'Segunda a Sexta 8:00 - 18:00' },
    { icon: 'fa fa-clock', label: 'Hours', info: 'Segunda a Sexta 8:00 - 18:00' },
  ]

const Hero: React.FC = () => {
    return (
      <section className="grid grid-col justify-center items-center lg:px-40 xl:px-40">
        <Navbar />
        <div className="relative grid justify-center items-center grid-col lg:px-20 xl:px-20">
         
        <div className="bg-blue-400/20 w-full rounded-3xl text-center">
            <h2 className='text-4xl text-medium p-1'>Quem somos</h2>
            <p className='text-medium p-3 pb-5'>A Allexo é uma empresa de tecnologia fundada em 2016 com o objetivo de desenvolver soluções de Internet das Coisas para pequenas, médias e grandes indústrias visando tornar acessível as modernas tecnologias da Indústria 4.0 para qualquer tipo de empresa, para empresas de qualquer tamanho.</p>
        </div>
        <div className="w-full grid justify-center m-5 grid-col lg:grid-row xl:grid-row">
        <div className="w-full grid grid-col gap-4 p-12">
          {ContactInfo.map((item, index) => (
            <div key={index} className="relative grid max-w-96 p-2 rounded-2xl bg-blue-400/20 hover:bg-blue-900/30 hover:text-blue-500">
              <div className="w-14 h-14 bg-white grid justify-center items-center rounded-md text-md color-black m-2">
                <i className={item.icon}></i>
              </div>
              <div className="text">
                <h3 className='p-1'>{item.label}</h3>
                <p>{item.info}</p>
              </div>
            </div>
          ))}
        </div>

            <div className="text-center justify-center align-center pr-10">

                <div className="p-5 bg-blue-400/20 rounded-3xl shadow-sm">
                    <div className="titleWrapper">
                        <h2 className='text-center mb-5 font-medium text-xl'>Entre em contato</h2>
                        <p className='p-2'>Por favor preencha os campos abaixo para podermos entrar em contato.</p>
                    </div>
            
                    <div className="p-1 grid gap-1 justify-center items-center text-center">
                    <span>Nome Completo:</span>
                        <input type="text" name="name" required
                        className='rounded-lg bg-gray-400/30 p-1'></input>
                    </div>    
            
                    <div className="p-2 grid-col gap-2 justify-center items-center">
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

export default Hero;