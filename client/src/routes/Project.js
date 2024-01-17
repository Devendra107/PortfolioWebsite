import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHead from '../components/PageHead'
import ProjectPage from '../components/Project'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <PageHead heading="PROJECTS." text="Some of my most recent works" />
      <ProjectPage/>
      <Footer/>
    </div>
  )
}

export default Project
