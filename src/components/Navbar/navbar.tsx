import Image from 'next/image'
import Logo from '../../assets/logo-ptm-9-sayap.png'
import { TiChevronRightOutline } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    mobileNavContainerVariant,
    mobileNavListVariant,
    mobileNavExitProps,
} from '../../data/animation.config'

const NavList = () => {
    return (
        <>
            <ul className=' flex lg:flex-row flex-col items-center lg:gap-[3vw] md:gap-[4vw] gap-[6vw]'>
                <li><a href='#' className=' hover:text-yellow-300 duration-300'>ABOUT US</a></li>
                <li><a href='#' className=' hover:text-yellow-300 duration-300'>AKADEMI</a></li>
                <li><a href='#' className=' hover:text-yellow-300 duration-300'>FASILITAS</a></li>
                <li><a href='#' className=' hover:text-yellow-300 duration-300'>BERITA PTM</a></li>
                <li><a href='#' className=' hover:text-yellow-300 duration-300'>PROGRAM</a></li>
                <li><a href='#' className=' hover:text-yellow-300 duration-300'>GALERI</a></li>
                <li><a href='#' className=' hover:text-yellow-300 duration-300'>BIO</a></li>
                <li className='block lg:hidden hover:scale-105 duration-300'>
                    <a href='https://psb.ponpestekmajapahit.sch.id' target='_blank' rel='noopener noreferrer' className=' flex align-middle items-center bg-yellow-300 rounded-full p-1'>
                        <span className=' text-black'>APPLY NOW</span>
                        <TiChevronRightOutline className=' mx-1 bg-black rounded-full text-yellow-300 w-8 h-8' />
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
        <div className=' bg-gray-500 absolute min-w-full'>
            <div className=' py-4 sm:py-2 px-10 mx-auto'>
                <div className='flex justify-between items-center font-bold text-lg text-slate-100'>
                    <div className=' hover:scale-105 duration-300'>
                        <a href='/' className=' flex items-center'>
                            <Image src={Logo} alt='Logo' width={64} height={64}></Image>
                        </a>
                    </div>
                    <div className=' lg:static lg:block hidden bg-gray-500 lg:min-h-fit min-h-[60vh] left-0 top-[95%] lg:w-auto w-full py-3'>
                        <NavList/>
                    </div>
                    <div className=' lg:hidden hover:text-yellow-300 duration-300'>
                        <button onClick={toogleBurger}>
                            {
                                isOpen
                                ? <IoCloseSharp className=' w-8 h-8' />
                                : <GiHamburgerMenu className=' w-8 h-8'/>
                            }
                        </button>
                    </div>
                    <AnimatePresence mode='wait'>
                        {
                            isOpen && (
                                <motion.div
                                    layout='position'
                                    variants={mobileNavContainerVariant}
                                    initial='hidden'
                                    animate='show'
                                    className=' lg:static absolute lg:hidden bg-gray-500 lg:min-h-fit min-h-[85vh] left-0 top-[100%] lg:w-auto w-full py-3'
                                >
                                    <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
                                        <NavList/>
                                    </motion.div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                    <div className=' hidden lg:block hover:scale-105 duration-300'>
                        <a href='https://psb.ponpestekmajapahit.sch.id' target='_blank' rel='noopener noreferrer' className=' flex align-middle items-center bg-yellow-300 rounded-full p-1'>
                            <span className=' text-black'>APPLY NOW</span>
                            <TiChevronRightOutline className=' mx-1 bg-black rounded-full text-yellow-300 w-8 h-8' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}