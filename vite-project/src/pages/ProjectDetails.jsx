import React from 'react'
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { projects } from "../data/projects"
import Projects from '../components/Projects'

function ProjectDetails() {
  const { slug } = useParams()

  const currentProject = projects.find(
    project => project.id === slug
  )

  if (!currentProject) {
    return <div>Project not found</div>
  }

  return (
    <>
    <Navbar />
    <Projects project={currentProject} />
    </>

  )
}

export default ProjectDetails