import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    skills: ["Core Java", "Advanced Java", "DSA", "C#", "ASP.NET MVC"],
  },
  {
    id: 3, 
    title: "Software Testing",
    description: "Testing websites and Android applications.",
    skills: ["Manual Testing", "Automation Testing", "Selenium Testing with Java"],
  }
];

function Services() {

  const [selectedServices, setSelectServices] = useState(null);

  const closePopup =()=>{
   setSelectServices(null);
  }

  const handleRead =(item)=>{
    setSelectServices(item);
  }
  return (
    <div className="bg-black text-white py-20 w-full" id="Services">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.10 }}
        >
          My Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {services.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300"
              whileHover={{ scale: 1.05 }} // Hover scale animation
              initial={{ opacity: 0, y: 50 }} // Fade and slide up animation
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.10 }}
            >
             
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-blue-400"
              >
                {item.id}
              </div>

             
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
              >
                {item.title}
              </h3>

             
              <p className="mt-2 text-gray-300">{item.description}</p>

             
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500 underline"
                onClick={() => handleRead(item)}
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>

        
        <motion.div className="mt-8 text-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
          >
            <motion.button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full">
              Go to Home
            </motion.button>
          </motion.a>
        </motion.div>

      
        {selectedServices && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }} 
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-gray-900 text-white p-8 rounded-lg relative w-3/4 max-w-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }} 
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 underline">{selectedServices?.title} Skills</h3>
              <ul className="mb-6">
                {selectedServices?.skills?.map((skill, index) => (
                  <li key={index} className="text-white">
                    {skill}
                  </li>
                ))}
              </ul>
              <button
                onClick={closePopup}
                className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-white"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

  


export default Services;
