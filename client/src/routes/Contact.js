import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHead from '../components/PageHead'
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <PageHead heading="CONTACT." text="Lets have a chat"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
