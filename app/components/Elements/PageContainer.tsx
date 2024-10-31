import React from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'

const PageContainer = ({
    children,
  }: {
    children: React.ReactNode
  }) => {

  return (
    <div className="h-screen overflow-y-auto text-gray-300 w-full">
         <section className="flex flex-col justify-center items-center">
        <ToastContainer />
        <Navbar />
      {children}
      </section> 
    </div>
  )
}

export default PageContainer
