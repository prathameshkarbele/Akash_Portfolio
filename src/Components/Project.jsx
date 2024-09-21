import React from 'react'
import pathology from '../assets/pathology.jpg' 
import YouTube from '../assets/YouTube.jpg' 
import portFolio from '../assets/folio.jpg' 



const projects = [
  {
    id: 2,
    name: "You-Tube clone",
    technologies: "React-js , Tailwind CSS ,Redux-ToolKit",
    image: YouTube,
   github: "https://github.com/Akash16121997/youtubeclone",
  },
  
    {
      id: 1,
      name: "Pathology Lab Management",
      technologies: "Spring-boot hibernate , React-js",
      image: pathology,
      github: "https://github.com/Akash16121997/Pathology-Lab-Management-System",
    },
    
   
    {
      id: 3,
      name: "Portfolio website",
      technologies: "MERN Stack",
      image: portFolio,
     github: "https://github.com/Akash16121997/portFolio",
    },
  ];

function Project() {
  return (
    <div className="bg-black text-white py-20 w-full" id="project">
  <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">My Projects</h2>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.name}
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
          <p className="text-gray-300 mb-4">{project.technologies}</p>
          <a
            href={project.github}
            className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      ))}
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

  )
}

export default Project
