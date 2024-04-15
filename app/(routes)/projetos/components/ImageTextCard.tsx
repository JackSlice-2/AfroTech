import MacNPhones from '@/app/components/MacNPhones'
import Image from 'next/image'
import React from 'react'

const ImageTextCard = () => {
  return (
    <div className="h-screen w-full flex justify-center flex-col lg:flex-row xl:flex-row rounded-xl border-gray-200 border-x-2 px-3 bg-gray-500/20 hover:bg-gray-500/30 m-2 mt-3">
      <MacNPhones />
        <div className="flex flex-col justify-center gap-3 lg:gap-10 xl:gap-10 flex-1 mx-10 md:mx-0 translate-x-8 order-1 px-5 md:px-0">
          <h1 className="md:text-6xl text-4xl text-start">&rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
            <div className="flex self-start gap-3">
              <div className="flex self-start gap-2 justify-center items-center">
                <Image src="/img/line.png" alt="line" height={10} width={50} />
                <h2 className="text-pink-400">What we do
                </h2>
              </div>            
              <h2 className="text-pink-400">What we do</h2>
            </div>
            <p className="md:text-2xl lg:text-2xl xl:text-2xl text-gray-300 text-start text-xl">
              We strive to create the most intuitive and sophisticated User
              Interface for the best User Experience, in Web, iOS & Android
              applications.
            </p>
          </div>
      </div>
  )
}

export default ImageTextCard
