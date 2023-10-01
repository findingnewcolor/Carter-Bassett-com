import Image from 'next/image'
import Header from './components/Header/Header'
import Github from '@/app/components/Github'
import About from '@/app/components/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className='w-screen h-48 flex justify-center	items-center'>
        <div className='grid'>
          <h1 className='text-center text-3xl'>Nicholas Hellmers Davalos</h1>
          <h3 className='text-center text-2xl'>Software Engineer</h3>
        </div>
      </div>

      <About />

      <Projects />

      {/* @ts-expect-error Server Component */}
      <Github />

      <Footer />
      
    </>
  )
}