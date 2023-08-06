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
      <Navbar />
      <LandingPage />
      <History />
      <Courses />
      <Footer />
    </>
  )
}
