import React from 'react'
import akash from '../assets/akash.jpg'
import AkashCv from '../assets/AkashCv.pdf'
import { motion } from "framer-motion";


function Hero() {
  return (
    <div className=' bg-black text-white py-14 text-center'>
      <motion.img
      src={akash}
      className="mx-auto mb-8 w-48 h-48 rounded-full object-cover"
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5, ease: "easeOut" }} 
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }} 
    />
<motion.h1
        className="text-4xl font-bold"
        initial={{ x: -200, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Akash Dhomase
        </span>
        , Front-end Developer
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ x: 200, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
      >
        I specialize in building modern and responsive web applications.
      </motion.p>        <div className=' mt-8 space-x-4'>
          <a href='/Contact'> 
          <button className=' bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full'> Contact With Me</button>
          </a>
        
         <a
          href='https://drive.google.com/file/d/1e5IY1POY0w-PCF0qwuMEq5Xs_rEs-tfL/view?usp=sharing'
          download="AkashCv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Resume
          </button>
        </a>
        </div>
    </div>
  )
}

export default Hero
