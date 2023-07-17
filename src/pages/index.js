import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import LandingPage from '@/components/LandingPage'
import History from '@/components/History'
import Alumni from '@/components/Alumni'
import Faculty from '@/components/Faculty'
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className='bg-gradient-to-br from-[#FEFDFC] to-[#F8F7EE]'>
        <Navbar />
        <LandingPage />
        <History />
        <Alumni />
        <Faculty/>
        <Courses/>
      </div>
      <Footer/>
    </>
  )
}
