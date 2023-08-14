import Image from 'next/image'
import Header from './components/Header/Header'
import Github from '@/app/components/Github'
import About from '@/app/components/About'

export default function Home() {
  return (
    <>
      <Header />
      <div className='w-screen h-48 flex justify-center	items-center'>
        <div className='grid'>
          <h1 className='text-center'>Nicholas Hellmers</h1>
          <h3>Software Engineer</h3>
        </div>
      </div>

      <About />

      {/* @ts-expect-error Server Component */}
      <Github />
      
    </>
  )
}