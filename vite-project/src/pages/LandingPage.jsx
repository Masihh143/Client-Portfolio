import React from 'react'
import Navbar from "../components/Navbar"
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import ProjectCards from '../components/ProjectCards'
import Achivements from '../components/Achivements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <>
    <Navbar />
      <Home />
      <About />
      <Skills />
      <ProjectCards />
      <Achivements />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage