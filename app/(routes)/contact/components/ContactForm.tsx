import React from 'react'

const ContactForm = () => {
 return (
    <div className="p-8 bg-blue-400/20 rounded-3xl shadow-lg">
      <div className="titleWrapper text-center">
        <h2 className='text-2xl mb-5 font-semibold text-gray-300'>Entre em contato</h2>
        <p className='text-gray-100'>Por favor preencha os campos abaixo para podermos entrar em contato.</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-200">Nome Completo:</label>
          <input type="text" id="name" name="name" required
            className='rounded-lg bg-gray-400/30 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
        </div>

        <div className="flex flex-col">
          <h3 className='text-gray-200'>Selecione um das Opçoes abaixo:</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <input type="radio" id="budget" name="SubjectOption" value="Budget" 
                className='mr-2'></input>
              <label htmlFor="budget" className="text-gray-200">Orçamento</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="other" name="SubjectOption" value="Other"
                className='mr-2'></input>
              <label htmlFor="other" className="text-gray-200">Outro</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="tech" name="SubjectOption" value="Tech Support"
                className='mr-2'></input>
              <label htmlFor="tech" className="text-gray-200">Support Técnico</label>
            </div>
          </div>
          <input type="hidden" id="subject" name="Subject" value=""></input>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-200">Message:</label>
          <textarea name="message" id="message" placeholder="Your Message" rows={6} cols={35} required
            className='bg-gray-400/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
        </div>

        <div className="bg-blue-900 font-bold rounded-md hover:bg-blue-500 hover:text-blue-800 p-2 text-center">
          <input type="submit" value="Submit" className="text-white"></input>
        </div>
      </div>
    </div>
 )
}

export default ContactForm
