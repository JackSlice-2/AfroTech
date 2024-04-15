import React from 'react'

const ContactForm = () => {
  return (
    
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
  )
}

export default ContactForm
