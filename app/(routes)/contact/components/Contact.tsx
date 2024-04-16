import React from 'react';
import Navbar from '../../../components/Navbar';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { ToastContainer } from 'react-toastify';

const Contact: React.FC = () => {
    return (
      <section className="flex flex-col justify-center items-center lg:px-40 xl:px-40">
        <ToastContainer />
        <Navbar />
        <div className="relative flex justify-center items-center flex-col lg:px-20 xl:px-20">
        <div className="bg-blue-400/20 w-full rounded-3xl mx-10 px-20 text-center">
            <h2 className='text-4xl text-medium p-4 py-5'>Quem somos</h2>
            <p className='text-medium py-3 pb-6'>
            Estamos ansiosos para ouvir de você e transformar suas 
            ideias em realidade. Entre em contato conosco agora mesmo 
            para iniciar uma conversa sobre seus projetos e objetivos. 
            Estamos aqui para oferecer soluções personalizadas e criar uma 
            parceria que leve o seu negócio para o próximo nível. 
            Clique abaixo para nos enviar uma mensagem e solicitar um orçamento. 
            Mal podemos esperar para trabalhar juntos!
              </p>
        </div>
        <div className="w-full flex justify-center m-5 flex-col lg:flex-row xl:flex-row">
        <ContactList />
          <div className="text-center justify-center align-center px-10">
            <ContactForm />
          </div>
        </div>
        </div>
</section>
    );
};

export default Contact;