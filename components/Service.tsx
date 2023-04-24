import { motion } from 'framer-motion'
import React from 'react'

type Props = { directionLeft: boolean;}

export default function Service({ directionLeft}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='group relative flex cursor-pointer object-cover filter transition duration-300 ease-in-out'>
        <p className='uppercase py-5'>Drafting legal documents</p>
    </motion.div>
  )
}