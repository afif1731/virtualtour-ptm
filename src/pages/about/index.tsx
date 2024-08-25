import React from 'react';
import Footer from '@/components/Footer/footer';
import Layout from '@/components/layout';
import VideoProfile from '@/components/Virtualtour/video-profile';
import { aboutPTMData, visiMisiPTMData, sejarahPTMData, manfaatPTMData } from '@/assets/ptm-data';
import { IoArrowForward, IoCloseSharp } from 'react-icons/io5';
import DynaminNav from '@/components/Navbar/dynamic_navbar';
import {
    Dialog,
    DialogHeader,
    DialogBody,
  } from '@material-tailwind/react';

const idList = [
    {
        name: 'profile',
        href: 'profile'
    },
    {
        name: 'visi-misi',
        href: 'visi-misi'
    },
    {
        name: 'sejarah',
        href: 'sejarah'
    },
    {
        name: 'keunggulan',
        href: 'keunggulan'
    }
]

interface IKeunggulan {
    title: string;
    subtitle: string;
    img_url: string;
    detail: string;
}

const AboutPage = () => {
    const offTopic: IKeunggulan = {
        title: 'closed',
        subtitle: '',
        img_url: '',
        detail: ''
    }
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [keunggulanTopic, setKeunggulanTopic] = React.useState(offTopic);
    
    const handleDialog = (topic: IKeunggulan) => {
        if(topic.title === 'closed' || !topic) setDialogOpen(false);
        else setDialogOpen(true);
        setKeunggulanTopic(topic);
    };

    return (
        <Layout title='About Us'>
            <header>
                <DynaminNav
                title='About Us'
                items={idList}
                />
            </header>
            <main className=' min-h-screen h-auto'>
                <div id={idList[0].href} className='px-[5%] lg:min-h-screen'>
                    <div className=' md:pt-28 pt-24 pb-10'>
                        <h1 className=' ptm-h1 text-center md:px-[20%] px-[6%]'>About Pesantren Teknologi Majapahit</h1>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row lg:gap-10 gap-5 justify-evenly lg:px-0 px-[10%]'>
                        <div className=' flex flex-col lg:w-[40%] w-full'>
                            <div className=' lg:flex hidden flex-col lg:w-[90%]'>
                                <h3 className='ptm-h3'>Pesantren</h3>
                                <h3 className='ptm-h3'>Teknologi Majapahit</h3>
                            </div>
                            <div className=' py-5'>
                                <p className=' ptm-p'>{aboutPTMData.message}</p>
                            </div>
                        </div>
                        <VideoProfile/>
                    </div>
                </div>

                <div id={idList[1].href} className='bg-[url(/about_visimisi_bg.jpg)] bg-cover bg-[length: 2048px]'>
                    <div className='bg-black/30 px-[10%] pb-20 pt-32 grid sm:grid-cols-2 grid-cols-1 xl:gap-32 gap-10 xl:min-h-screen'>
                        <div className='bg-white rounded-xl p-8 flex flex-col col-span-1 h-auto'>
                            <h2 className=' ptm-h2'>Visi</h2>
                            <p className=' ptm-p3 pt-5'>{visiMisiPTMData.visi}</p>
                        </div>
                        <div className='bg-white rounded-xl p-8 flex flex-col col-span-1 h-auto'>
                            <h2 className=' ptm-h2'>Misi</h2>
                            <ul className=' list-decimal lg:pl-10 pl-5 pt-5'>
                                {
                                    visiMisiPTMData.misi.map((buf) => {
                                        return (
                                            <li key={buf} className=' ptm-p3'>{buf}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div id={idList[2].href} className='px-[5%] pt-10 relative'>
                        <h1 className=' ptm-h1 pt-20 pb-10'>Sejarah Pesantren Teknologi Majapahit</h1>
                        <ul className=' py-5 gap-5 pl-[4%] pr-[3%] list-disc'>
                            {
                                sejarahPTMData.map((buffa) => {
                                    return (
                                        <li key={buffa} className=' ptm-p py-3 pl-[2%]'>{buffa}</li>
                                    )
                                })
                            }
                        </ul>
                </div>
                <div id={idList[3].href} className=' h-auto pt-24 pb-20 px-[5%] bg-[#DFDFDF] rounded-t-[3rem]'>
                    <div className=' text-center'>
                        <h1 className=' ptm-h1 px-[6%]'>Keunggulan dan Manfaat Pesantren Teknologi Majapahit</h1>
                        <p className=' ptm-p4 md:px-[20%] px-[10%] pt-8'>Berikut adalah Keunggulan dan Manfaat jika Anda masuk Pesantren Teknologi Majapahit</p>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-10 items-center'>
                            {
                                manfaatPTMData.map((manfaat) => {
                                    return (
                                        <button onClick={() => handleDialog(manfaat)} key={manfaat.title} className=' bg-cover bg-[length: 512px] bg-center rounded-2xl hover:scale-105 duration-300' style={{backgroundImage: `url(${manfaat.img_url})`}}>
                                            <div className=' flex flex-col justify-end col-span-1 bg-black/30 w-full rounded-2xl aspect-square p-8 gap-5'>
                                                <p className=' ptm-card-title text-white text-left'>{manfaat.title}</p>
                                                <div className='flex'>
                                                    <div className=' flex px-3 items-center bg-white/30 rounded-xl border-white border'>
                                                        <span className='ptm-card-btn text-white'>Read More</span>
                                                        <IoArrowForward className=' text-white ml-2'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    )
                                })
                            }
                    </div>
                    <div>
                        <Dialog
                            open= {dialogOpen}
                            size='lg'
                            handler={handleDialog}
                            className=' bg-cover bg-center min-h-[40vh] rounded-2xl'
                            style={{backgroundImage: `url(${keunggulanTopic.img_url ?? ''})`}}
                        >
                            <div className=' bg-black/60 h-full min-h-[40vh] items-start rounded-2xl px-8'>
                                <div className='flex flex-row justify-between items-start'>
                                    <DialogHeader className='flex text-white w-[50%]'>
                                        <p className='ptm-h2'>
                                            {
                                                keunggulanTopic.title
                                            }
                                        </p>
                                    </DialogHeader>
                                    <button onClick={() => handleDialog(offTopic)} className='p-5'>
                                        <IoCloseSharp className=' text-white size-16' />
                                    </button>
                                </div>
                                <DialogBody className=' text-white text-justify'>
                                    <p className='ptm-p4'>
                                        {
                                            keunggulanTopic.detail
                                        }
                                    </p>
                                </DialogBody>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </main>
            <footer className='relative bottom-0 w-full'>
                <Footer />
            </footer>
        </Layout>
    )
}

export default AboutPage;