import Layout from '@/components/layout';
import Footer from '@/components/Footer/footer';
import { ptmFasilitasData } from '@/assets/ptm-data';
import { FaArrowRight } from 'react-icons/fa';

const FacilityPage = () => {
    return (
        <Layout title='Fasilitas'>
            <header className=' absolute top-0 w-full'>
                <div className=' flex flex-row pt-10 pb-5 px-[5%] rounded-t-xl justify-between'>
                    <p className=' ptm-p3 text-black1'>Fasilitas</p>
                    <a href='/' className=' ptm-p3 text-black1 hover:underline'>Kembali</a>
                </div>
            </header>
            <main className=' w-full min-h-screen pt-28 pb-5 px-[5%]'>
                <div className=' flex md:flex-row flex-col'>
                    <div className='flex flex-col md:w-[30%] md:text-left text-center md:gap-10 gap-5'>
                        <h2 className='ptm-h1 leading-tight'>Fasilitas Pesantren Teknologi Majapahit</h2>
                        <p className='ptm-p4 md:pr-[12%]'>Berikut ini fasilitas Pesantren Teknologi Majapahit yang dapat Anda nikmati.</p>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 grid-rows-3 gap-5 w-full min-h-full md:pl-24 px-0 md:pt-0 pt-5'>
                        {
                            ptmFasilitasData.fasilitasList.map((fasilitas) => {
                                return (
                                    <div key={fasilitas.href} className='grid-cols-1 grid-rows-1 bg-[#DFDFDF] rounded-3xl p-5'>
                                        <div className=' flex flex-col gap-5'>
                                            <div className=' flex flex-row gap-3 items-center'>
                                                <img src={fasilitas.icon} className=' size-[64px] rounded-2xl object-cover object-center bg-[#B2B2B2] p-1'></img>
                                                <h4 className='ptm-h4'>{fasilitas.name}</h4>
                                            </div>
                                            <p className='ptm-p2'>{fasilitas.desc}</p>
                                            <div className='bg-black rounded-full p-2 self-end hover:scale-105 duration-300 cursor-pointer'>
                                                <a href={`/fasilitas/${fasilitas.href}`}><FaArrowRight className=' text-white size-6'/></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </Layout>
    )
}

export default FacilityPage;