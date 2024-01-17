import "./css/Footer.css";
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter , FaInstagram } from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          
           <div className="left">
               <div className="location">
                  <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                  <div>
                    <p>Guna, Madhya Pradesh, INDIA</p>
                  </div>
               </div>
               <div className="phone">
                 <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                 +91-8299115905</h4>
               </div>
               <div className="email">
                 <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                 devendrayadav18nov@gmail.com</h4>
               </div>
           </div>

           <div className="right">
             <h4>About Me</h4>
             <p>I'M a Full Stack Developer. Currently I'M pursuing B.Tech from Jaypee University Of Engineering and Technology Guna MP.</p>
             <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}} />
               
                

             </div>
           </div>
        </div>
      
    </div>
  )
}

export default Footer

