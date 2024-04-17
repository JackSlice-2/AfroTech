import React from 'react'
import Button from './Button'

const MacNPhones = () => {
  return (
    <div className="flex-1 relative px-10">
        <img 
          className='lg:w-[800px] lg:h-[700px] md:w-[425px] h-[350px] w-[318px] h-[262px] object-contain absolute inset-0 mx-auto bottom-10 lg:bottom-0 xl:bottom-0 p-2' 
         src="./img/MacRS.png"
        />
        <img 
          className='lg:w-[640px] lg:h-[320px] h-[180px] top-32 object-contain absolute inset-0 mx-auto lg:top-96 left-64 md:left-96 lg:left-96' 
          src="./img/IphoneRS.png"
        />
        <Button label='Testa o Demo!'
        url='https://kycnot.me/'
        live={true}
        newTab={true}
        />
    </div>
  )
}

export default MacNPhones