import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';

const Hero: React.FC = () => {
    return (
        <div className=" flex flex-col justify-center items-center px-2">
        <Navbar />
        <div className="h-[100vh] pt-5  w-full md:flex lg:flex xl:flex">
                <div className='gap-7 justify-center flex-2 flex flex-col'>
                    <h1 className='text-6xl'>Coming Soon...</h1>
                    <div className='flex items-center gap-2'>
                        <img src="./img/line.png" alt="line" className='h-2'/>
                        <h2 className='text-pink-300'>Dont Worry, I will update this page as soon as i can! For now, enjoy what we have so far !</h2>
                    </div>
                </div>
                <div className='relative w-3/4'>
                </div>
            </div>
        </div>
    );
};

export default Hero;