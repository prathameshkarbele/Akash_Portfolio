import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";

function Contact() {
  return (
    <div className="bg-black text-white py-20 w-full" id="contact">
    <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Contact Me</h2>
  
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-2xl sm:text-3xl bg-gradient-to-r from-green-500 to-blue-600 text-transparent font-bold bg-clip-text mb-5">
            Let's Talk...
          </h2>
          <p>I'm open to discussing web development projects or partnership opportunities.</p>
          <div className="mb-4 mt-8">
            <FaEnvelope className="inline-block text-green-400 mr-2" />
            <a href="mailto:akashdhomase16@gmail.com" className="hover:underline">
              akashdhomase16@gmail.com
            </a>
          </div>
          <div className="mb-4">
            <FaPhone className="inline-block text-green-400 mr-2" />
            <span>+8805682894</span>
          </div>
          <div className="mb-4">
            <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
            <span>Street, City, Province, Country</span>
          </div>
        </div>
  
       
        <div className="flex-1 w-full">
          <form className="space-y-4" action="https://formsubmit.co/akashdhomase16@gmail.com" method="POST">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400"
                placeholder="Enter Your Name"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400"
                placeholder="Enter Your Email"
                name="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400"
                rows="5"
                placeholder="Enter Your Message"
                name="message"
              />
            </div>
  
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
  
      <div className="mt-8 text-center">
        <a href="/">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-110 px-6 py-2 rounded-full">
            Go to Home
          </button>
        </a>
      </div>
    </div>
  </div>
  
  );
}

export default Contact;
