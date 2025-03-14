import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <p className="copyright py-12 text-gray-200">
      © 2025 Agenda Virtual MediFlux | Criado e Mantido por 
      <br/>
      <Link href="https://afrotech.pro" target="_blank">
        <span className="hover:underline hover:text-white">
          AfroTech
        </span>
      <br/>
        <span className="text-xs -mt-1 text-gray-200">
          soluções em software
        </span>
      </Link>
    </p>
  )
}

export default Footer