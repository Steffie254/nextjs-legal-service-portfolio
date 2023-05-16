import React from 'react'
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid"

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            CONTACT ME
        </h3>
        <div className='flex flex-col space-y-5'>
        <h4 className='text-4xl font-semibold text-center'>
            What do you need?{" "}
            <span className='underline decoration-[#F7AB0A]/50 '>
                 Let's Talk
            </span>
                        
         </h4>

         <div className='space-y-5'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>+25471234567</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>nassilotieno@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>123 Moi Drive</p>
            </div>

         </div>
         <form className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input placeholder='Name' className='contactInput' type='text'/>
                <input placeholder='Email'  className='contactInput' type='text'/>
            </div>

            <input placeholder='Subject' className='contactInput' type='text'/>
            <textarea className='contactInput'/>
            <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
         </form>
        </div>
    </div>
  )
}