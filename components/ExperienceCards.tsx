import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCards({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-900px snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-50'>
        
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>LEGAL INTERN</h4>
            <p className='font-bold text-2xl mt-1'>WORKPLACE</p>
            <p className='uppercase py-5 text-gray-500'>STARTED....ENDED...</p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>Summary of roles performedSummary of roles performed</li>
                <li>Summary of roles performedSummary of roles performedSummary of roles performed</li>
                <li>Summary of roles performedSummary of roles performedSummary of roles performed</li>
                <li>Summary of roles performedSummary of roles performedSummary of roles performed</li>
                <li>Summary of roles performedSummary of roles performedSummary of roles performed</li>
            </ul>
        </div>
        
    </article>
  )
}