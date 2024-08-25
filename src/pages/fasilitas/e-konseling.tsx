import Layout from '@/components/layout';
import Footer from '@/components/Footer/footer';

const LearningCommunityFacility = () => {
    return (
        <Layout title='E-Konseling'>
            <header className=' absolute top-0 w-full'>
                <div className=' flex flex-row pt-10 pb-5 px-[5%] rounded-t-xl justify-between'>
                    <p className=' ptm-p3 text-black1'>Fasilitas - E-Konseling</p>
                    <a href='/fasilitas' className=' ptm-p3 text-black1 hover:underline'>Kembali</a>
                </div>
            </header>
            <main className=' w-full min-h-screen bg-white'>
                <div className=' text-center h-screen px-20 flex flex-col gap-3 items-center justify-center'>
                    <h1 className=' text-black ptm-h1'>Coming Soon</h1>
                    <h3 className=' text-black ptm-h3'>Stay Tune for the update</h3>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </Layout>
    )
}

export default LearningCommunityFacility;