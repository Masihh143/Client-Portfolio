import React from 'react'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

import Achivements from './components/Achivements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />

      <Achivements />
      <Contact />
      <Footer />
    </>
  )
}

export default App
