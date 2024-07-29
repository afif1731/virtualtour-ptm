import Footer from '@/components/Footer/footer';
import Layout from '@/components/layout';
import VideoProfile from '@/components/Virtualtour/video-profile';
import { aboutPTMData, visiMisiPTMData, sejarahPTMData, manfaatPTMData } from '@/assets/ptm-data';
import { IoArrowForward } from "react-icons/io5";

const AboutPage = () => {
    return (
        <Layout title='About Us | Pesantren Teknologi Majapahit'>
            <main className=' min-h-screen h-auto'>
                <div id='profile' className='px-[5%] lg:min-h-screen'>
                    <div className=' pt-32 pb-10'>
                        <h1 className=' ptm-h1 text-center px-[20%]'>About Pesantren Teknologi Majapahit</h1>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row lg:gap-10 gap-5 justify-evenly'>
                        <div className=' flex flex-col lg:w-[40%] w-full'>
                            <div className=' lg:flex hidden flex-col w-[90%]'>
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

                <div id='visi-misi' className='bg-[url(/about_visimisi_bg.jpg)] bg-cover bg-[length: 2048px]'>
                    <div className='bg-black/30 px-[10%] pb-20 pt-32 grid sm:grid-cols-2 grid-cols-1 xl:gap-32 gap-20 xl:min-h-screen'>
                        <div className='bg-white rounded-xl p-10 flex flex-col col-span-1 h-auto'>
                            <h2 className=' ptm-h2'>Visi</h2>
                            <p className=' ptm-p'>{visiMisiPTMData.visi}</p>
                        </div>
                        <div className='bg-white rounded-xl p-10 flex flex-col col-span-1 h-auto'>
                            <h2 className=' ptm-h2'>Misi</h2>
                            <ul className=' list-decimal lg:pl-10 pl-5'>
                                {
                                    visiMisiPTMData.misi.map((buf) => {
                                        return (
                                            <li key={buf} className=' ptm-p'>{buf}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='px-[5%] pt-20 relative'>
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
                <div className=' h-auto py-20 px-[5%] bg-[#DFDFDF] rounded-t-[3rem]'>
                    <div className=' text-center'>
                        <h1 className=' ptm-h1 px-[6%]'>Keunggulan dan Manfaat Pesantren Teknologi Majapahit</h1>
                        <p className=' ptm-p px-[25%] pt-10'>Berikut adalah Keunggulan dan Manfaat jika Anda masuk Pesantren Teknologi Majapahit</p>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-10 items-center'>
                            {
                                manfaatPTMData.map((manfaat) => {
                                    return (
                                        <button key={manfaat.title} className=' bg-cover bg-[length: 512px] bg-center rounded-2xl hover:scale-105 duration-300' style={{backgroundImage: `url(${manfaat.img_url})`}}>
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
                </div>
            </main>
            <footer className='relative bottom-0 w-full'>
                <Footer />
            </footer>
        </Layout>
    )
}

export default AboutPage;