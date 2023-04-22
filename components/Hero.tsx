'use client';
import { count } from 'console'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { text } from 'stream/consumers'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Nassil Otieno",
            "Legal Service Provider",
            "Let's see what your problem is",
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' 
        src="/nassil1.png" alt="Nassil Otieno"/>
        
    <div className="z-20">    
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            Legal practice
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#services">
            <button className='heroButton'>Services</button>
            </Link>
            <Link href="#casestudies">
            <button className='heroButton'>Case Studies</button>
            </Link>
            
        </div>
    </div>
    </div>
  )
}