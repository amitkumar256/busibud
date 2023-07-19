import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Sectionf from '@/components/Sectionf'
import Sections from '@/components/Sections'
import Sectiont from '@/components/Sectiont'
import Sectione from '@/components/Sectione'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Sectionf/>
     <Sections/>
     <Sectiont/>
     <Sectione/>
     <Footer/>
    </div>
  )
}
