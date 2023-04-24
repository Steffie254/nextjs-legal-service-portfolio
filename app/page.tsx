import About from '@/components/About'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
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

        <section id='hero' className='snap-center'>
          <Hero />
        </section>

        <section id='about' className='snap-center'>
          <About />
        </section>

        <section id='experience' className='snap-center'>
            <Experience />
        </section> 

        
        <section id='services' className='snap-start'>
            <Services />
        </section>
        {/* Case Studies */}
        {/* Contact me */}
      </div>
    
  )
}
