import Layout from '@/components/layout'
import Navbar from '@/components/Navbar/navbar'
import Virtualtour from '@/components/Virtualtour/virtualtour'

export default function IndexPage() {
  return (
    <Layout title="Virtual Tour PTM">
      <main>
        <div className='min-h-screen'>
          <div>
            <Virtualtour/>
          </div>
          <Navbar/>
          <div className='absolute hidden md:block bottom-10 left-10 m-0'>
            <p className=' text-white ptm-p2'>MOJOKERTO, JAWA TIMUR</p>
          </div>
          <div className=' absolute hidden md:block hover:scale-105 duration-300 bottom-10 right-10 m-0'>
              <a href='https://psb.ponpestekmajapahit.sch.id' target='_blank' rel='noopener noreferrer' className=' flex align-middle items-center bg-[#D9D9D9] bg-opacity-30 rounded-full py-1 px-3 border border-white'>
                  <span className=' text-white'>APPLY NOW</span>
              </a>
          </div>
      </div>
      </main>
    </Layout>
  )
}
