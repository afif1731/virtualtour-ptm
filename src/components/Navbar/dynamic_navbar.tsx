import Image from 'next/image'
import Logo from '../../assets/logo-ptm-9-sayap.png'

import { MdOutlineKeyboardDoubleArrowDown} from 'react-icons/md';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    mobileNavListVariant,
    mobileNavExitProps,
} from '../../data/animation.config'

type NavProps = {
    title?: string;
    items?: {
        name: string,
        href: string
    }[]
}

export default function DynaminNav({
    items = [
        {
            name: 'item#1',
            href: ''
        },
        {
            name: 'item#2',
            href: ''
        },
        {
            name: 'item#3',
            href: ''
        },
    ],
    title = 'ini judul'
}: NavProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='flex flex-nowrap fixed top-0 w-full items-center justify-between bg-white shadow-md shadow-black/10 px-10 py-3 z-10'>
            <div className='flex flex-row hover:scale-105 duration-300 items-center'>
                <a href='/' className=' flex items-center md:size-[64px] size-[48px]'>
                    <Image src={Logo} alt='Logo' width={64} height={64}></Image>
                </a>
            </div>
            <div onClick={toogle} className=' flex flex-col'>
                <div className=' cursor-pointer flex flex-row items-center gap-1 hover:bg-black/10 rounded-2xl px-3 py-1'>
                    <p className=' cursor-pointer ptm-h4'>{title}</p>
                    <MdOutlineKeyboardDoubleArrowDown className={`font-extrabold size-8 ${isOpen? 'rotate-0' : 'rotate-180'} transition-all`}/>
                </div>
                <div className=' relative z-30'>
                    <AnimatePresence mode='wait'>
                        {
                            isOpen && (
                                <motion.div
                                layout='position'
                                variants={mobileNavListVariant} {...mobileNavExitProps}
                                initial='hidden'
                                animate='show'
                                className='absolute top-2 bg-white w-full rounded-xl shadow-md shadow-black/10'>
                                    <div className=' flex flex-col gap-2 p-2'>
                                        {
                                            items.map((item) => {
                                                return (
                                                    <a key={item.name} className='hover:bg-black/5 rounded-xl text-center ptm-p' href={`#${item.href}`}>{item.name}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
            </div>
            <div>
                <p className=' hidden'></p>
            </div>
        </nav>
    )
}