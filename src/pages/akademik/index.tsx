import Footer from '@/components/Footer/footer';
import Layout from '@/components/layout';

import { ptmAkademikData } from '@/assets/ptm-data';
import { FaArrowRight } from 'react-icons/fa';

const AkademikPage = () => {
    return (
        <Layout title='Akademik'>
            <header className=' absolute top-0 w-full'>
                <div className=' flex flex-row pt-10 pb-5 px-[5%] rounded-t-xl justify-between'>
                    <p className=' ptm-p3 text-black1'>Akademik</p>
                    <a href='/' className=' ptm-p3 text-black1 hover:underline'>Kembali</a>
                </div>
            </header>
            <main className='w-full pt-24 pb-16 px-[5%]'>
                <div className='akademik-part1 lg:h-screen h-auto flex flex-col gap-5 lg:mb-0 mb-5'>
                    <div className=' md:text-left text-center'>
                        <h1 className=' ptm-h1'>Akademik PTM</h1>
                    </div>
                    <div className='w-full h-[68%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-3 md:grid-rows-2 grid-rows-1 gap-5'>
                        {
                            ptmAkademikData.list.map((akademik) => {
                                return (
                                    <a key={akademik.name} className=' grid-cols-1 grid-rows-1' href={`akademik/${akademik.href}`}>
                                        <div className=' bg-[#DFDFDF] w-full h-full rounded-2xl p-5 hover:scale-105 duration-200 cursor-pointer'>
                                            <div className='flex flex-row gap-3 items-center w-full h-full'>
                                                <img src={akademik.img} alt={akademik.name} className=' size-[64px] text-black'></img>
                                                <div className='flex flex-col text-left'>
                                                    <h5 className='ptm-h5'>{akademik.name}</h5>
                                                    <p className='ptm-p3'>{akademik.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='akademik-part2 h-auto bg-[#D9D9D9] rounded-3xl flex lg:flex-row flex-col lg:gap-10 gap-5 p-10 lg:mt-0 mt-10'>
                    <div className=' lg:w-[50%] w-full'>
                        <div className='bg-[url(/prestasi.png)] lg:aspect-square bg-cover bg-center rounded-3xl'>
                            <div className='flex flex-col gap-5 p-8 bg-black/50 w-full h-full rounded-3xl justify-end text-white'>
                                <h2 className='ptm-h2'>Prestasi PTM</h2>
                                <p className='ptm-p2'>Ikuti perjuangan para peraih prestasi di PTM</p>
                                <a className='flex' href='https://www.instagram.com/ponpestekmajapahit/' target='_blank' rel='noopener noreferrer'>
                                    <div className='flex flex-row bg-white/30 rounded-3xl border-2 border-white px-2 py-1 gap-4 items-center hover:scale-105 duration-300 cursor-pointer'>
                                        <p className='ptm-card-btn'>Read More</p>
                                        <FaArrowRight/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full flex flex-col gap-5'>
                        <div className='flex h-[50%] w-full bg-[url(/berita.png)] bg-cover bg-center rounded-3xl'>
                            <div className='flex flex-col gap-5 p-8 bg-black/50 w-full h-full rounded-3xl justify-end text-white'>
                                <h2 className='ptm-h2'>Berita PTM</h2>
                                <p className='ptm-p2'>Baca berita terbaru seputar PTM</p>
                                <a className='flex' href='https://ponpestekmajapahit.sch.id/berita-ptm/' target='_blank' rel='noopener noreferrer'>
                                    <div className='flex flex-row bg-white/30 rounded-3xl border-2 border-white px-2 py-1 gap-4 items-center hover:scale-105 duration-300 cursor-pointer'>
                                        <p className='ptm-card-btn'>Read More</p>
                                        <FaArrowRight/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='flex h-[50%] w-full bg-[url(/galeri.png)] bg-cover bg-center rounded-3xl'>
                            <div className='flex flex-col gap-5 p-8 bg-black/50 w-full h-full rounded-3xl justify-end text-white'>
                                <h2 className='ptm-h2'>Galeri PTM</h2>
                                <p className='ptm-p2'>Simak keseruan PTM yang terabadikan</p>
                                <a className='flex' href='https://ponpestekmajapahit.sch.id/galeri-ptm/' target='_blank' rel='noopener noreferrer'>
                                    <div className='flex flex-row bg-white/30 rounded-3xl border-2 border-white px-2 py-1 gap-4 items-center hover:scale-105 duration-300 cursor-pointer'>
                                        <p className='ptm-card-btn'>Read More</p>
                                        <FaArrowRight/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
            <footer>
                <Footer/>
            </footer>
        </Layout>
    )
}

export default AkademikPage;