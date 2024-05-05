import { GithubIcon, LinkedinIcon } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from './Button';
import { MenuItems } from '../data/textData/MainText';

const Navbar: React.FC = () => {

  const router = useRouter()

  return (
    <div className=''>
      <div className='md:flex lg:flex xl:flex flex-row justify-between items-center gap-36 p-2 lg:gap-96 xl:gap-96'>
        <div className='items-center justify-center'>
          <div className='pl-9 md:pl-0 lg:pl-0 xl:pl-0 lg:pr-60 xl:pr-60 lg:pt-5 xl:pt-5'>
            <a href='/'>
              <Image src="/img/LogoWhite.png" alt='logo' width={300} height={100}
                className='animate-opacityPulse hover:opacity-100 hover:animate-none'/>
            </a>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-2 md:gap-4 lg:gap-7 pt-4 text-md font-medium'>
          {MenuItems.map((item) => (
            <a onClick={() => router.push(item.link)} key={item.name} href={item.link}>
            <div className='p-1.5 cursor-pointer hover:scale-150 lg:hover:scale-100 md:hover:scale-100 xl:hover:scale-100 hover:text-medium hover:bg-blue-300/30 rounded-lg hover:text-blue-600'>
              {item.name}
            </div>
            </a>
            ))}
          </div>
        </div>
        <div className='flex justify-end py-2'>
          <div className='p-1 flex justify-end'>
            <div className='p-1'>
              <Button 
              url='https://github.com/JackSlice-2'
              iconBtn={true}
              icon={<GithubIcon />}
              newTab={true}
              />
            </div>
            <div className='p-1'>
              <Button 
              iconBtn={true}
              url='https://www.linkedin.com/in/pc-nunes-8a26a2248/'
              icon={<LinkedinIcon />}
              newTab={true}
              />
            </div>
          </div>
          <div className='justify-center text-center flex items-center p-2'>
          <Button 
            label='Contrate Agora!'
            red={true}
            url='https://api.whatsapp.com/send?phone=5551985790398&text=Bom%20dia,%20tenho%20interesse%20de%20fazer%20um%20site%20ou%20applicativo%20para%20minha%20empresa'
            newTab={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
