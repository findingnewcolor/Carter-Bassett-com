import Image from 'next/image'
import Header from '../Components/Header/Header'
import Github from '@/Components/Header/Github'


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

      <Github />

      
    </>
  )
}