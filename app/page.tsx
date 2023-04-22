import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
        <Head>
          <title>Nassil Portfolio</title>
        </Head>

        <Header />


        {/* Hero */}
        <section id='hero' className='snap-center'>
          <Hero />

        </section>
        {/* About */}
        <section id='about' className='snap-center'>
          <About />

        </section>
        {/* Experience */}
        {/* Services */}
        {/* Case Studies */}
        {/* Contact me */}
      </div>
    
  )
}
