import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-black text-white w-full py-8">
    <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-8">
        {/* Branding Section */}
        <div className="flex-1 mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Akash</h3>
          <p className="text-gray-400">
            Front-end Developer based in Mumbai, specializing in web and software development.
          </p>
        </div>
  
       
        <div className="flex-1 w-full">
          <form className="flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto p-2 mb-4 sm:mb-0 sm:mr-2 rounded-lg sm:rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg sm:rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
  
      
      <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Akash. All rights reserved.
        </p>
  
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/akash-dhomase-83a571215/" className="text-gray-400 hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://github.com/" className="text-gray-400 hover:text-white">
            <FaGithub />
          </a>
        </div>
  
        {/* Links (Privacy, Terms of Service) */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  );
}

export default Footer;
