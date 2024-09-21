import React from "react";
import akash from "../assets/akash.jpg";

function About() {
  return (
    <div className="bg-black text-white py-20 w-full" id="about">
    <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl text-white mb-6 font-bold text-center md:text-left">
        About Me
      </h2>
      
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        {/* Image Section */}
        <img
          src={akash}
          className="w-64 h-72 sm:w-72 sm:h-80 rounded object-cover mb-8 md:mb-0"
          alt="Akash"
        />
        
        {/* About Info Section */}
        <div className="text-center md:text-left">
          <p className="text-lg mb-8 px-4 md:px-0">
            I am a passionate full-stack developer with a focus on building modern and responsive web applications. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
          </p>
  
          {/* Skill Progress Bars */}
          <div className="space-y-4">
            {/* HTML & CSS */}
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-3/12 text-sm md:text-base">HTML & CSS</label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-300 w-10/12">
                </div>
              </div>
            </div>
  
            {/* React JS */}
            <div className="flex items-center">
              <label htmlFor="reactjs" className="w-3/12 text-sm md:text-base">React JS</label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-300 w-11/12">
                </div>
              </div>
            </div>
  
            {/* JavaScript */}
            <div className="flex items-center">
              <label htmlFor="javascript" className="w-3/12 text-sm md:text-base">JavaScript</label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-300 w-10/12">
                </div>
              </div>
            </div>
          </div>
  
          {/* Experience and Projects */}
          <div className="mt-12 flex justify-around md:justify-between text-center">
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                2+
              </h3>
              <p className="text-sm md:text-base">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                4+
              </h3>
              <p className="text-sm md:text-base">Projects Completed</p>
            </div>
          </div>
  
          {/* Go to Home Button */}
          <div className="mt-8 text-center md:text-left">
            <a href="/">
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transition-transform duration-300 hover:scale-110 px-6 py-2 rounded-full">
                Go to Home
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default About;
