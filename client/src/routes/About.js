import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHead from '../components/PageHead'
import AboutPage from '../components/About'

const About = () => {
  return (
    <div>
      <Navbar/>
      <PageHead heading="ABOUT." text="Im a friendly Front-End Developer."/>
      <AboutPage/>
      <Footer/>
    </div>
  )
}

export default About
