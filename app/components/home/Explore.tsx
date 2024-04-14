import React, { useEffect, useState } from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import Link from 'next/link';
import Pictures from './Pictures';
import Image from 'next/image';

const data: string[] = [
    "Intuitive Designs",
    "Clean UE/UI",
    "Interactivity",
    "Unique Layouts",
    "Fast & Secure",
    "Responsive",
    "Hire Now"
];

const Button = styled.button`
    background-color: darkblue;
    color: white;
    font-weight: 500;
    width: 150px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 3;
    position: relative;

    @media only screen and (max-width: 768px) {
    flex:3;
    height:100%
    width: 10%;
  }
    
`;
const Img = styled.img`
    width: 1100px;
    height: 850px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 150px;
    right: 0;
    margin: auto;
    z-index: 1;

    @media only screen and (max-width: 768px) {
    width: 100%;
    height: 39%;
    bottom: 25px;
    right: 500px;
    left: -420px;
`;

const ListItem = styled.li<{ text: string }>`
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    color: gray;
    -webkit-text-stroke: 1px gray;
    position: relative;

    @media only screen and (max-width: 768px) {
        font-size: 24px;
    }

    &::after {
        content: "${(props) => props.text}";
        position: absolute;
        font-size: 70px;
        top: 0;
        left: 0;
        color: darkblue;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
        -webkit-text-stroke: 1px darkblue;

        @media only screen and (max-width: 768px) {
            font-size: 30px;
        }
    }

    &:hover {
        &::after {
            animation: moveText 0.5s linear both;

            @keyframes moveText {
                to {
                    width: 100%;
                }
            }
        }
    }
`;

const Hero: React.FC = () => {
    const [selectedWork, setSelectedWork] = useState<string | null>(null);

    const setWork = (item: string) => {
        setSelectedWork(item);
    };

    const handleDocumentClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!data.includes(target.textContent || '')) {
            setSelectedWork(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'text'}>
            <div className=' flex flex-col items-center justify-center px-5'>
                <div className=' w-full md:pl-52 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between h-[110vh] md:h-full'>
                    <div className='flex-2 flex flex-col justify-center g-6 p-5'>
                        <h1 className='text-5xl md:text-7xl'>
                            &ldquo;Explore .&rdquo;
                        </h1>
                        <div className='flex flex-row align-center justify-center gap-2'>
                            <h2 className='text-pink-400 font-medium p-2 md:text-2xl'>
                                Tailor made to suit every need, and never afraid to innovate
                            </h2>
                        </div>
                    <div className='flex flex-col gap-2 list-none md:gap-6 lg:gap-6 xl:gap-6'>
                        {data.map((item) => (
                            <ListItem key={item} text={item} onClick={() => setWork(item)}>
                                {item}
                            </ListItem>
                        ))}
                    </div>
                        <Link href="/projects">
                            <Button>Learn More</Button>
                        </Link>
                    </div>
                    <Right>
                        <div 
                            className='absolute top-0 bottom-0 left-0 right-0 w-[1000px] h-[1000px] m-auto flex items-center justify-center z-10'>
                            {selectedWork ? (
                                <Pictures selected={selectedWork} />
                            ) : (
                                <Image src="/img/hacker5.png" alt="Default"
                                width={500} height={500} />
                            )}
                        </div>
                    </Right>
                </div>
            </div>
        </StyleSheetManager>

    );
};

export default Hero;
