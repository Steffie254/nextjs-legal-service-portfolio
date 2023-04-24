'use client';
import { motion } from 'framer-motion'
import React from 'react'
import Service from './Service'

type Props = {}

export default function Services({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left
     md:flex-row max-w-full px-50 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Services</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>What I can do for you</h3>

        <div className='grid grid-cols-4 gap-5'>
            <Service directionLeft={false} />
            <Service directionLeft={false} />
            <Service directionLeft={false} />
            <Service directionLeft={false} />
            <Service directionLeft={false} />
            <Service directionLeft={false} />
            <Service directionLeft={true} />
            <Service directionLeft={false} />
            <Service directionLeft={false} />
            <Service directionLeft={false} />
            <Service directionLeft={false} />
            <Service directionLeft={false} />

        
        </div>
    </motion.div>
  )
}