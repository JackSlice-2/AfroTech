import React, { useState } from 'react';

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
    console.log(data);
    // Handle response, e.g., show a success message
 };

 return (
    <form onSubmit={handleSubmit} className="p-8 bg-blue-400/20 rounded-3xl shadow-lg">
  
    <div className="p-8 bg-blue-400/20 rounded-3xl shadow-lg">
      <div className="titleWrapper text-center">
        <h2 className='text-2xl mb-5 font-semibold text-gray-300'>Entre em contato</h2>
        <p className='text-gray-100'>Por favor preencha os campos abaixo para podermos entrar em contato.</p>
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
          <h3 className='text-gray-200 p-1'>Selecione um das Opçoes abaixo:</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <input type="radio" id="budget" name="option" value="Budget" checked={formData.option === 'Budget'} onChange={handleChange}
                className='mr-2'></input>
              <label htmlFor="budget" className="text-gray-200">Orçamento</label>
            </div>
            
            <div className="flex items-center">
              <input type="radio" id="tech" name="option" value="Tech Support" checked={formData.option === 'Tech Support'} onChange={handleChange}
                className='mr-2'></input>
              <label htmlFor="tech" className="text-gray-200">Support Técnico</label>
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
          <label htmlFor="message" className="text-gray-200">Message:</label>
          <textarea name="message" id="message" placeholder="Your Message" rows={6} cols={35} required
            className='bg-gray-400/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' value={formData.message} onChange={handleChange}></textarea>
        </div>

        <div className="bg-blue-900 font-bold rounded-md hover:bg-blue-500 hover:text-blue-800 p-2 text-center">
          <input type="submit" value="Submit" className="text-white"></input>
        </div>
      </div>
    </div>
    </form>
 )
}

export default ContactForm
