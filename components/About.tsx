'use client';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    
    <motion.div 
      initial={{ opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='h-screen flex flex-col relative text-center md:text-left md:flex-row 
      max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{opacity: 1, x:0 }}
        viewport={{once: true}}
        src="/nassil4.jpg"
        className=' md:mb-o flex-shrink-0 w-56 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[300px]'
        ></motion.img>

        <div className="space-y-10 px-0 md:px-10">
          <h4 className='text-4xl font-semibold'>
          Welcome to my about section! 
          </h4>
          <p className='text-base'>
          My name is [Insert Name], and I am a solo legal service provider. I received my law degree from [Insert University], and I am licensed to practice law in [Insert State/Region].

I have always been passionate about helping people navigate the legal system and achieve their legal goals. As a solo legal service provider, I am dedicated to providing personalized legal services tailored to the specific needs of each client.

I have experience in [Insert areas of law], and I am committed to staying up-to-date on the latest legal developments and changes to provide my clients with the best possible representation.

I understand that legal issues can be stressful and overwhelming, which is why I strive to make the legal process as smooth and stress-free as possible for my clients. I believe in clear communication, and I am always available to answer any questions or concerns that my clients may have.

In my free time, I enjoy [Insert hobbies/interests], and I believe in giving back to the community. I am actively involved in [Insert organization/charity], where I volunteer to help those in need.
          </p>
      
        </div>
        
    </motion.div> 
  

  )
}