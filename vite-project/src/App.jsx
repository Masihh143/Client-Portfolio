import React from 'react'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from './components/About'
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
    </>
  )
}

export default App
