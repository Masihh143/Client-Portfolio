import { Routes, Route } from "react-router-dom"
import Landing from './pages/LandingPage'
import ProjectDetails from './pages/ProjectDetails'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </>
  )
}

export default App
