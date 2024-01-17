import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from '../components/Home'
import Footer from '../components/Footer'
import ProjectPage from '../components/Project'
import About from './About'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <ProjectPage/>
      <Footer/>
    </div>
  )
}

export default Home
