import "./css/Home.css";
import backgroundImg from "../assets/backgroundImg.jpg"
import ProfilePicture from "../assets/profilePic.jpg"
import React from 'react'
import {Link} from "react-router-dom"
import Typical from "react-typical";

const Home= () => {
  return (
    <div className="home">
        <div className="mask">
           <img className="backgroundImg " src={backgroundImg} alt="backgroundImg"/>
           <img className="ProfilePicture" src={ProfilePicture} alt="ProfilePicture"/>
        </div>
        <div className="content">
          <p className="name">HI, I'M Devendra Yadav</p>
          <span className="primary-text">
              {" "}
              <h1 className="hh1">
                <Typical
                  loop={Infinity}
                  steps={[
                    "FullStack Developer💻",
                    1000,
                    "Big Data Enthusiastic",
                    1000
                  ]}
                />
              </h1>
             
            </span>
          <div>
            <Link to="/project" className="btn btn-light"> 
               Projects
            </Link>
            <Link to="/contact" className="btn btn-light"> 
               Contact
            </Link>
            <a href="resume.pdf" download="Devendra_Resume.pdf">
              <button className="btn btn-light">Get Resume</button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Home
