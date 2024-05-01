import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const ContactForm = () => {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    option: '',
    message: '',
 });

 const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data); // Log the response to the console

    // Show a toast notification
    toast.success('Form submitted successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Refresh the page
    window.location.reload();
 };

 return (

  <form onSubmit={handleSubmit} className="p-4 bg-blue-400/20 rounded-3xl shadow-lg">
  <div className="titleWrapper text-center">
        <h2 className='text-2xl mb-3 font-semibold text-gray-300'>Entre em contato</h2>
        <p className='text-gray-100'>Preencha os campos abaixo para entrar em contato diretamente pelo site!</p>
      </div>

      <div className="flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-gray-200">Nome Completo:</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
            className='rounded-lg bg-gray-400/30 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
          
          <label htmlFor="phone" className="text-gray-200">Telefone:</label>
          <input type="text" id="phone" name="phone" required placeholder='+55 55 98555-5555' value={formData.phone} onChange={handleChange}
            className='rounded-lg bg-gray-400/30 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'></input>

          <label htmlFor="email" className="text-gray-200">Email:</label>
          <input type="text" id="email" name="email" required placeholder='afrotech@afrotech.com' value={formData.email} onChange={handleChange}
            className='rounded-lg bg-gray-400/30 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'></input>


        </div>


        <div className="flex flex-col">
          <h3 className='text-gray-200'>Selecione uma das Opçoes abaixo:</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <input type="radio" id="budget" name="option" value="Budget" checked={formData.option === 'Budget'} onChange={handleChange}
                className='mr-2'></input>
              <label htmlFor="budget" className="text-gray-200">Orçamento</label>
            </div>
            
            <div className="flex items-center">
              <input type="radio" id="tech" name="option" value="Tech Support" checked={formData.option === 'Tech Support'} onChange={handleChange}
                className='mr-2'></input>
              <label htmlFor="tech" className="text-gray-200">Suporte Técnico</label>
            </div>

            <div className="flex items-center">
              <input type="radio" id="other" name="option" value="Other" checked={formData.option === 'Other'} onChange={handleChange}
                className='mr-2'></input>
              <label htmlFor="other" className="text-gray-200">Outro</label>
            </div>
          </div>
          <input type="hidden" id="subject" name="message"></input>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-200">Escreva sua Mensagem:</label>
          <textarea name="message" id="message" placeholder="Sua Mensagem" rows={5} cols={30} required
            className='bg-gray-400/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' value={formData.message} onChange={handleChange}></textarea>
        </div>

          <input  type="submit" value="Enviar" className="text-white bg-blue-900 font-bold rounded-md hover:bg-blue-500 hover:text-blue-800 p-2 text-center w-full"></input>
      </div>
    </form>
 )
}

export default ContactForm
