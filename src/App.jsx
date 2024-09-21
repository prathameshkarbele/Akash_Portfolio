import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Services" element={ <Services />}/> 
          <Route path="/Contact" element={  <Contact />}/> 
        </Routes>
        
        
        {/* <About />
       
        
       
         */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
