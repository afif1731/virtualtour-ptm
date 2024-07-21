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
        </div>
      </main>
    </Layout>
  )
}
