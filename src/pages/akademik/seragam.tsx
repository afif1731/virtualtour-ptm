import React from 'react';
import Layout from '@/components/layout';
import Footer from '@/components/Footer/footer';
import { Carousel } from '@material-tailwind/react';
import { seragamData } from '@/assets/ptm-data';
import {
    Dialog,
  } from '@material-tailwind/react';

interface ISeragam {
    title: string;
    alt: string;
    image: string;
}

const SeragamAkademik = () => {
    const offSeragam: ISeragam = {
        title: 'closed',
        alt: '',
        image: ''
    }
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [seragamTopic, setSeragamTopic] = React.useState(offSeragam);

    const handleDialog = (topic: ISeragam) => {
        if(topic.title === 'closed' || !topic) setDialogOpen(false);
        else setDialogOpen(true);
        setSeragamTopic(topic);
    };

    return (
        <Layout title='Seragam'>
            <header className=' absolute top-0 w-full'>
                <div className=' flex flex-row pt-10 pb-5 px-[5%] rounded-t-xl justify-between'>
                    <p className=' ptm-p3 text-black1'>Akademik - Seragam</p>
                    <a href='/akademik' className=' ptm-p3 text-black1 hover:underline'>Kembali</a>
                </div>
            </header>
            <main className=' w-full h-screen bg-white pt-24 pb-2 xl:px-[35%] px-[5%]'>
                <Carousel
                    className='rounded-xl'
                    loop
                    autoplay
                    transition={{type: 'tween', duration: 0.5}}
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                          <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                            }`}
                            onClick={() => setActiveIndex(i)}
                          />
                        ))}
                      </div>
                    )}
                >
                    {
                        seragamData.map((seragam) => {
                            return (
                                <div onClick={() => handleDialog(seragam)} className=' relative h-full w-full cursor-pointer' key={seragam.alt}>
                                    <img src={seragam.image} alt={seragam.alt} className=' h-full w-full object-top object-cover'/>
                                    <div className=' absolute bottom-0 w-full'>
                                        <div className=' flex flex-row w-full h-full justify-center items-center pb-10'>
                                            <h3 className='ptm-h3 text-white text-center'>{seragam.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
                <Dialog
                    open={dialogOpen}
                    size='sm'
                    handler={handleDialog}
                    className='rounded-2xl h-auto !min-w-0 !max-w-full !w-auto bg-black/30 flex justify-center items-center'
                >
                    <div className='flex md:h-[95vh] h-full justify-center items-center'>
                        {
                            <img src={seragamTopic.image} alt={seragamTopic.alt} className='rounded-2xl flex object-contain bg-cover aspect-auto h-full' />
                        }
                    </div>
                </Dialog>
            </main>
            <footer>
                <Footer/>
            </footer>
        </Layout>
    )
}

export default SeragamAkademik;