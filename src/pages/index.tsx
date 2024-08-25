import Layout from '@/components/layout'
import Navbar from '@/components/Navbar/navbar'
import Virtualtour from '@/components/Virtualtour/virtualtour'
import { useState } from 'react'

export default function IndexPage() {
  const [vtStart, setVTStart] = useState(false);

  const toogleVT = () => {
    setVTStart(true);
  }

  const vtLink = process.env.NEXT_PUBLIC_VT_URI as string;
  
  return (
    <Layout title="Virtual Tour">
      <main>
        <div className='h-screen bg-black'>
          <div>
            {
              !vtStart &&
              <div className='bg-black absolute w-full h-full'>
                <div className='flex flex-col h-full gap-5 justify-center items-center text-white'>
                  <h4 className='ptm-h4 text-center w-[70%]'>Click to Start Virtual Tour</h4>
                  <button onClick={toogleVT} className='bg-white/20 rounded-3xl py-1 px-3 border-white border-2 ptm-p3 hover:scale-105 duration-300'>Start</button>
                </div>
              </div>
            }
            {vtStart && <Virtualtour src={vtLink}/>}
          </div>
          <Navbar/>
          <div className='absolute hidden md:block bottom-10 left-10 m-0'>
            {vtStart && <p className=' text-white ptm-p2'>MOJOKERTO, JAWA TIMUR</p>}
          </div>
          <div className=' absolute hidden md:block hover:scale-105 duration-300 bottom-10 right-10 m-0'>
              {
                vtStart &&
                <a href='https://psb.ponpestekmajapahit.sch.id' target='_blank' rel='noopener noreferrer' className=' flex align-middle items-center bg-[#D9D9D9] bg-opacity-30 rounded-full py-1 px-3 border border-white'>
                    <span className=' text-white'>APPLY NOW</span>
                </a>
              }
          </div>
      </div>
      </main>
    </Layout>
  )
}
