import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter> 
      <Nav /> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/project" element={<Project />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  //   <BrowserRouter>  {/* Wrap your app with BrowserRouter */}
  //   {/* <Navbar /> */}
  //   <Nav/>
  // <Home/>
  // <About/>
  // <Project/>
  // <Contact/>
  // </BrowserRouter>

  )
}

export default App