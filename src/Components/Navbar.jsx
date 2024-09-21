import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {

  const handleConnectClick = () => {
    toast.success('Connection request sent');
  };

  return (
    <>
    <nav className='bg-black text-white px-4 md:px-16 lg:px-24 w-full mt-2'>
        <div className='container mx-auto px-4 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center bg-blue-200 border border-gray-300 rounded-xl'>
          
  
          <div className='text-2xl font-bold md:block text-orange-500'>
            AKASH
          </div>
          
          
          <div className='mt-4 md:mt-0 text-black space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center'>
            <a href='/' className='hover:bg-gray-400 hover:underline px-2 py-1 rounded'>Home</a>
            <a href='/About' className='hover:bg-gray-400 hover:underline px-2 py-1 rounded'>About Me</a>
            <a href='/Services' className='hover:bg-gray-400 hover:underline px-2 py-1 rounded'>Services</a>
            <a href='/Project' className='hover:bg-gray-400 hover:underline px-2 py-1 rounded'>Projects</a>
            <a href='/Contact' className='hover:bg-gray-400 hover:underline px-2 py-1 rounded'>Contacts</a>
          </div>
          
         
          <div className='mt-4 md:mt-0'>
            <a href='https://www.linkedin.com/in/akash-dhomase-83a571215/'>
              <button 
                onClick={handleConnectClick} 
                className='bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full'
              >
                Connect me
              </button>
            </a>
          </div>
        </div>
        
        <Hero />
        <Footer />
      </nav>

      <ToastContainer />
    </>
  )
}

export default Navbar
