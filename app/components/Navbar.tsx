import { GithubIcon, LinkedinIcon } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar: React.FC = () => {

  const router = useRouter()

  const MenuItems = [
    { name: 'Home', link: '/' },
    { name: 'Websites', link: '/websites' },
    { name: 'Apps', link: '/apps' },
    { name: 'Games', link: '/games' },
    { name: 'About', link: '/about' },
  ];

  return (
      <div>

        <div className='md:flex lg:flex xl:flex flex-row justify-between items-center gap-36 p-2'>

          <div className='items-center justify-center py-4'>
            <div className='pl-10 md:pl-0 lg:pl-0 xl:pl-0'>
              <a href='/'>
                <Image src="/img/LogoWhite.png" alt='logo' width={300} height={100}
              className='animate-opacityPulse hover:opacity-100 hover:animate-none'/>
              </a>
            </div>
          </div>
          
            <div className='flex flex-row justify-center items-center gap-9 py-3'>
              {MenuItems.map((item) => (
                <div key={item.name} className='p-1.5 cursor-pointer hover:scale-150 lg:hover:scale-100 md:hover:scale-100 xl:hover:scale-100 hover:text-medium hover:bg-blue-300/30 rounded-lg hover:text-blue-600'>
                  <a onClick={() => router.push(item.link)}>{item.name}</a>
                </div>
              ))}
            </div>
          </div>

          <div className='flex justify-end py-2'>

            <div className='p-1 flex justify-end'>

              <div className='p-1'>
                <button className='border-blue-800 border-2 p-1 rounded-lg hover:scale-125 hover:bg-blue-400/30 fill-blue-900'>
                  <a href='https://github.com/JackSlice-2'>
                    <GithubIcon />
                  </a>
                </button>
              </div>

              <div className='p-1'>
                <button className='border-blue-800 border-2 p-1 rounded-lg hover:scale-125 hover:bg-blue-400/30'>
                  <a href='https://www.linkedin.com/in/pc-nunes-8a26a2248/'>
                    <LinkedinIcon /></a>
                </button>
              </div>

            </div>

            <div className='justify-center text-center flex items-center p-2'>
              <div onClick={() => router.push('/hirenow')}
                className='rounded-lg bg-red-800 text-white border-none cursor-pointer flex hover:scale-125 p-2'>
                Hire Now!
              </div>
            </div>

          </div>

      </div>
  );
};

export default Navbar;
