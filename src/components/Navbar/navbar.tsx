import Image from 'next/image'
import Logo from '../../assets/logo-ptm-9-sayap.png'
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    mobileNavContainerVariant,
    mobileNavExitProps,
} from '../../data/animation.config'

const NavList = () => {
    return (
        <>
            <ul className=' flex md:flex-row flex-col items-center md:gap-[2vw] lg:gap-[3vw] gap-[8vw]'>
                {
                    [
                        ['/about', 'ABOUT US'],
                        ['/program', 'PROGRAM'],
                        ['/fasilitas', 'FASILITAS'],
                        ['/akademik', 'AKADEMIK']
                    ].map(([href, title]) => (
                        <li key={title}><a href={href} className='md:ptm-p2 ptm-p4 font-normal hover:text-yellow-300 duration-300'>{title}</a></li>
                    ))
                }
                <li className='block md:hidden hover:scale-105 duration-300 md:py-0 py-28'>
                    <a href='https://psb.ponpestekmajapahit.sch.id' target='_blank' rel='noopener noreferrer' className=' flex align-middle items-center bg-[#D9D9D9] bg-opacity-30 rounded-full py-1 px-3 border border-white'>
                        <span className=' text-white md:ptm-p3 ptm-p4 font-medium'>APPLY NOW</span>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default function navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toogleBurger = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-gradient-to-b from-black/80 md:from-transparent absolute min-w-full'>
            <div className=' py-4 sm:py-2 md:px-10 px-5 mx-auto'>
                <div className='flex justify-between items-center text-slate-100'>
                    <div className='flex flex-row hover:scale-105 duration-300 items-center'>
                        <a href='/' className=' flex items-center md:size-[64px] size-[48px]'>
                            <Image src={Logo} alt='Logo' width={64} height={64}></Image>
                        </a>
                        <div className=' flex flex-col px-3 ptm-p2'>
                            <a href='/'>Pesantren</a>
                            <a href='/'>Teknologi Majapahit</a>
                        </div>
                    </div>
                    <div className=' md:static md:block hidden md:min-h-fit min-h-[60vh] left-0 top-[95%] md:w-auto w-full py-3'>
                        <NavList/>
                    </div>
                    
                    <div className=' md:hidden hover:text-yellow-300 duration-300'>
                        <button onClick={toogleBurger}>
                            {
                                isOpen
                                ? <IoCloseSharp className=' w-8 h-8 hidden' />
                                : <GiHamburgerMenu className=' w-8 h-8'/>
                            }
                        </button>
                    </div>
                    <AnimatePresence mode='wait'>
                        {
                            isOpen && (
                                <motion.div
                                    layout='position'
                                    variants={mobileNavContainerVariant} {...mobileNavExitProps}
                                    initial='hidden'
                                    animate='show'
                                    className=' md:static absolute md:hidden bg-black bg-opacity-70 backdrop-blur-sm md:min-h-fit min-h-screen left-0 top-0 md:w-auto w-full py-5'
                                >
                                    <div className=' flex md:hidden hover:text-yellow-300 duration-300 justify-end px-5 py-2'>
                                        <button onClick={toogleBurger}>
                                            {
                                                isOpen
                                                ? <IoCloseSharp className=' w-8 h-8' />
                                                : <GiHamburgerMenu className=' w-8 h-8'/>
                                            }
                                        </button>
                                    </div>
                                    <div className=' py-8'>
                                        <NavList/>
                                    </div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>

                    <div className=' hidden lg:block hover:scale-105 duration-300 w-[20%]'>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}