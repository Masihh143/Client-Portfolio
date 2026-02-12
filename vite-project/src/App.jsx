import React from 'react'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

import Achivements from './components/Achivements'
import Contact from './components/Contact'
import './App.css'

function App() {
  

  return (
    <>
    {/* <div className="App">
      <h1>Welcome to My Vite React App!</h1>
    </div> */}
    <Navbar />
    <Home />
    <About />
    <Skills />

    <Achivements />
    <Contact />
    </>
  )
}

export default App
