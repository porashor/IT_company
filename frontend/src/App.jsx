import React, { useEffect } from 'react'
import Nav from '../component/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Service from "../pages/Service"
import Contact from "../pages/Contact"
import AOS from "aos"; 
import "aos/dist/aos.css";
import Footer from '../component/Foother'
import TopButton from '../component/TopBtn'







const App = () => {
  useEffect(() => { 
    AOS.init({ 
      duration: 1000, 
      once: false,
    });
    }, []);
  return (
    <div className='' style={{ fontFamily: "'Smooch Sans', sans-serif" }}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
      <TopButton/>
    </div>
  )
}

export default App
