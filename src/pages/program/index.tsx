import Footer from '@/components/Footer/footer';
import Layout from '@/components/layout';
import ProgramSlider from '@/components/Carousel/program_slider';

const ProgramPage = () => {
    return (
        <Layout title='Program'>
            <header className=' absolute top-0 w-full'>
                <div className=' flex flex-row pt-10 pb-5 px-[5%] rounded-t-xl justify-between'>
                    <p className=' ptm-p3 text-black1'>Program</p>
                    <a href='/' className=' ptm-p3 text-black1'>Kembali</a>
                </div>
            </header>
            <main>
                <div className=' min-h-screen md:h-auto h-screen pt-24 pb-5 px-[10%]'>
                    <h2 className=' ptm-h2 text-center lg:px-[20%] px-[3%] indent-1'>Program Pesantren Teknologi Majapahit</h2>
                    <p className=' ptm-p4 text-center lg:px-[25%] px-[3%] py-3'>Berikut adalah progam - progam di Pesantren Teknologi Majapahit yang dapat Anda nikmati. </p>
                    <div className='flex flex-row justify-center lg:py-0 py-5'>
                        <ProgramSlider/>
                    </div>
                </div>
            </main>
            <footer className='relative bottom-0 w-full'>
                <Footer/>
            </footer>
        </Layout>
    )
}

export default ProgramPage;