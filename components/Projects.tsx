'use client';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

export default function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            CASE STUDIES
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, i) => (
                <div className='h-screen w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 '>
                <motion.img 
                    initial={{
                        y:-300,
                        opacity: 0,
                    }}
                    transition = {{duration: 1.2}}
                    whileInView = {{opacity:1, y: 0}}
                    viewport = {{once: true }}
                    src="/YRK1.png"
                />

                <div>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/50'>
                            Case Study {i+1} of {projects.length}: 
                        </span>{" "}
                         OTIZ vs MADIGO
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    The about section on a solo practitioner website should provide potential clients with an overview of the attorney's background, experience, and qualifications. It should also convey the attorney's personal 
                    approach to practicing law and highlight any unique skills or strengths that set them apart from other lawyers in their field.
                    </p>
                </div>
                </div>

            ))}

        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 '>

        </div>
    </div>
  );
}